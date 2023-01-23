import { TestArray } from 'test-utils/consts';
import { render, screen } from '@testing-library/react';
import { TableColumn } from '@types';
import { Table } from '.';

const columns: TableColumn[] = [
  { id: 'name', displayName: 'Some name' },
  { id: 'email', displayName: 'E-mail' },
];

describe('Table', () => {
  it('should render Table component with defined headers', () => {
    render(<Table data={TestArray} columns={columns} />);

    expect(screen.getAllByRole('columnheader').length).toBe(2);
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('Some name');
    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('E-mail');
  });

  it('should render Table component with data values', () => {
    render(<Table data={TestArray} columns={columns} />);

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Shanna@melissa.tv')).toBeInTheDocument();
  });

  it('should not render extra columns', () => {
    render(<Table data={TestArray} columns={columns} />);

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();

    expect(screen.queryByText('Bret')).not.toBeInTheDocument();
    expect(screen.queryByText('Romaguera-Crona')).not.toBeInTheDocument();
  });
});

export {};
