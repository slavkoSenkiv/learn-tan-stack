# infinite loops

- The data array that you pass to the table instance MUST have a "stable" reference in order to prevent bugs that cause infinite re-renders (especially in React).

- React.useState and React.useMemo are not the only ways to give your data a stable reference. You can also define your data outside of the component or use a 3rd party state management library like Redux, Zustand, or TanStack Query.

- The main thing to avoid is defining the data array inside the same scope as the useReactTable call. That will cause the data array to be redefined on every render, which will cause an infinite loop of re-renders.

## good examples
```
const fallbackData = []

export default function MyComponent() {
  //✅ GOOD: This will not cause an infinite loop of re-renders because `columns` is a stable reference
  const columns = useMemo(() => [
    // ...
  ], []);

  //✅ GOOD: This will not cause an infinite loop of re-renders because `data` is a stable reference
  const [data, setData] = useState(() => [
    // ...
  ]);

  // Columns and data are defined in a stable reference, will not cause infinite loop!
  const table = useReactTable({
    columns,
    data ?? fallbackData, //also good to use a fallback array that is defined outside of the component (stable reference)
  });

  return <table>...</table>;
}
```

## bad examples
```
export default function MyComponent() {
  //😵 BAD: This will cause an infinite loop of re-renders because `columns` is redefined as a new array on every render!
  const columns = [
    // ...
  ];

  //😵 BAD: This will cause an infinite loop of re-renders because `data` is redefined as a new array on every render!
  const data = [
    // ...
  ];

  //❌ Columns and data are defined in the same scope as `useReactTable` without a stable reference, will cause infinite loop!
  const table = useReactTable({
    columns,
    data ?? [], //❌ Also bad because the fallback array is re-created on every render
  });

  return <table>...</table>;
}
```

# SSR/ISR

The default mindset of a developer building a data grid is to implement server-side pagination, sorting, and filtering for large datasets. This is still usually a good idea, but a lot of developers underestimate how much data can actually be handled in the client with modern browsers and the right optimizations. If your table will never have more than a few thousand rows, you can probably take advantage of the client-side features in TanStack Table instead of implementing them yourself on the server. Before committing to letting TanStack Table's client-side features handle your large dataset, you should test it with your actual data to see if it performs well enough for your needs, of course.
