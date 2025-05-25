'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

type Product = {
  name: string;
  brand: string;
  price: number;
};

const data: Product[] = [
  { name: 'iPhone 15', brand: 'Apple', price: 999 },
  { name: 'Pixel 8', brand: 'Google', price: 699 },
  { name: 'Galaxy S23', brand: 'Samsung', price: 899 },
];

const columns: ColumnDef<Product>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Brand',
    accessorKey: 'brand',
  },
  {
    header: 'Price ($)',
    accessorKey: 'price',
    cell: (info) => `$${info.getValue()}`,
  },
];

export function MyTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log('table', table);

  return (
    <table className="table-auto w-full border border-gray-200">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="p-2 border">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2 border text-sm">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
