import { User } from '@types';

export const Table = ({ data, columns }: { data: User[]; columns: { id: keyof User; displayName: string }[] }) => (
  <table className="min-w-full text-left">
    <thead>
      <tr className="border-b">
        {columns.map(({ displayName }) => (
          <th key={displayName} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            {displayName}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map(user => (
        <tr key={user.id} className="border-b bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          {columns.map(({ id }) => (
            <td key={`${id}-${Math.random()}`} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user[id].toString()}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
