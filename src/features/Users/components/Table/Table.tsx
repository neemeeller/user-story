import { User } from '@types';

export const Table = ({ users }: { users: User[] }) => (
  <table className="min-w-full text-left">
    <thead>
      <tr className="border-b">
        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Name
        </th>
        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Username
        </th>
        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Email
        </th>
        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Website
        </th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id} className="border-b bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.name}</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.username}</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.email}</td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.website}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
