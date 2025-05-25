//TData
type FlatUser = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
};

//note: data needs a "stable" reference in order to prevent infinite re-renders
const flatData: FlatUser[] = [
  {
    firstName: 'Tanner',
    lastName: 'Linsley',
    age: 33,
    visits: 100,
    progress: 50,
    status: 'Married',
  },
  {
    firstName: 'Kevin',
    lastName: 'Vandy',
    age: 27,
    visits: 200,
    progress: 100,
    status: 'Single',
  },
];
//or const [data, setData] = React.useState<User[]>([])

type NestedUser = {
  name: {
    first: string;
    last: string;
  };
  info: {
    age: number;
    visits: number;
  };
};

const nestedData: NestedUser[] = [
  {
    name: {
      first: 'Tanner',
      last: 'Linsley',
    },
    info: {
      age: 33,
      visits: 100,
    },
  },
  {
    name: {
      first: 'Kevin',
      last: 'Vandy',
    },
    info: {
      age: 27,
      visits: 200,
    },
  },
];

const columns = [
  {
    header: 'First Name',
    accessorKey: 'name.first',
  },
  {
    header: 'Last Name',
    accessorKey: 'name.last',
  },
  {
    header: 'Age',
    //accessorFn: (row) => row.info.age,
  },
  //...
];

type User = {
  firstName: string
  lastName: string
  subRows?: User[] //does not have to be called "subRows", can be called anything
}

const nestedSubRowData = [
  {
    firstName: 'Tanner',
    lastName: 'Linsley',
    subRows: [
      {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        subRows: [
          //...
        ],
      },
    ],
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
  },
];
