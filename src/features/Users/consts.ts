import { TableColumn, User } from '@types';

export const FILTER_COLUMNS: (keyof User)[] = ['name', 'username', 'email', 'website'];
export const TABLE_COLUMNS: TableColumn[] = [
  {
    id: 'name',
    displayName: 'Name',
  },
  {
    id: 'username',
    displayName: 'Username',
  },
  {
    id: 'email',
    displayName: 'Email',
  },
  {
    id: 'website',
    displayName: 'Website',
  },
];
