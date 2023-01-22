import { User } from '../../../../@types';

export const Table = ({ users }: { users: User[] }) => (
  <table>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.address.street}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
