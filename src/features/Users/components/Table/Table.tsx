import { User } from '@types';

export const Table = ({ users }: { users: User[] }) => (
  <table>
    <tr>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Website</th>
    </tr>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
