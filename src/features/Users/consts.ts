import { User } from '@types';

export const FILTER_COLUMNS: (keyof User)[] = ['name', 'username', 'email', 'website'];
export const TABLE_COLUMNS: { id: keyof User; displayName: string }[] = [
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
