import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import { fetchUsers, selectError, selectStatus, selectUsers } from 'store/userSlice';
import { User } from '@types';
import { Table } from './components/Table';
import { SearchBox } from './components/Search';
import { paramsInclude } from './helpers';
import { FILTER_COLUMNS, TABLE_COLUMNS } from './consts';
import { LoadingIcon } from './components/Loading';
import { Alert } from './components/Alert';

export const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);
  const initialList = useSelector(selectUsers);
  const [users, setUsers] = useState<User[]>(initialList);

  const fetchData = useCallback(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'success') {
      setUsers(initialList);
    }
  }, [initialList, status]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredList = paramsInclude(initialList, FILTER_COLUMNS, e.target.value);
    setUsers(filteredList);
  };

  fetchData();

  if (status === 'error') {
    return <Alert message={`Error while fetching data. \n Please try again: ${error}`} />;
  }

  if (status === 'loading') {
    return <LoadingIcon />;
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex justify-end mb-4">
            <div className="w-64">
              <SearchBox onChange={onChange} />
            </div>
          </div>
          <Table data={users} columns={TABLE_COLUMNS} />
          {users?.length === 0 && (
            <Alert message={'Nothing found. Please try other search keyword'} />
          )}
        </div>
      </div>
    </div>
  );
};
