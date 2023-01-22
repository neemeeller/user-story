import { useEffect } from 'react';
import logo from 'logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import { fetchUsers, selectStatus, selectUsers } from 'store/userSlice';
import { Table } from './components/Table';

export const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(selectStatus);
  const users = useSelector(selectUsers);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <img src={logo} className="App-logo" alt="logo" />;
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8"></div>
        <Table users={users} />
      </div>
    </div>
  );
};
