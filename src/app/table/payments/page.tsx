import { Payment, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: 'a6c24d81',
      amount: 250,
      status: 'success',
      email: 'alice@example.com',
    },
    {
      id: 'b81f72da',
      amount: 499,
      status: 'processing',
      email: 'bob@example.org',
    },
    {
      id: 'de34f3a1',
      amount: 349,
      status: 'failed',
      email: 'carol@example.net',
    },
    {
      id: 'c9e4c3b5',
      amount: 199,
      status: 'success',
      email: 'dave@example.com',
    },
    {
      id: 'f7b32c29',
      amount: 799,
      status: 'pending',
      email: 'erin@example.org',
    },
    {
      id: '1a0d9ee1',
      amount: 650,
      status: 'success',
      email: 'frank@example.net',
    },
    {
      id: '3b2e1a9f',
      amount: 75,
      status: 'processing',
      email: 'grace@example.com',
    },
    {
      id: '5eaf27cc',
      amount: 1200,
      status: 'failed',
      email: 'hank@example.org',
    },
    {
      id: '9ac84b12',
      amount: 430,
      status: 'success',
      email: 'ivy@example.net',
    },
    {
      id: '9ac84b12',
      amount: 430,
      status: 'success',
      email: 'ivy@example.net',
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
