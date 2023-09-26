# QueryClientProvider:
    Wrapping the App component with QueryClientProvider is a good practice for any React application that uses React Query. It provides a number of benefits that can improve the performance
    consistency, and maintainability of your code:
    
        - Makes React Query available to all components in the application: 
            The QueryClientProvider component provides a QueryClient instance to all of its child components. 
            This means that any component in the application can use the React Query hooks to fetch, cache, and update data.

        - Enhances performance: 
            When you wrap the App component with QueryClientProvider, React Query can optimize the rendering of your application. 
            For example, React Query can avoid re-rendering components if the data they need has not changed.

        - Provides a consistent data management experience: 
            When you wrap the App component with QueryClientProvider, all components in the application will use the same React Query instance to manage their data. 
            This helps to ensure that your application's data is managed consistently across all components.

---

# QueryClint: 
    instance for each page request,
    This ensures that data is not shared between different users and requests, 
    while still only creating the QueryClient once per component lifecycle.

---

# ReactQueryDevtools: 
    used to dedicate and debug react query and it's not the same as ReactQuery. 
    it's only opepned when we are only in the development mode, so don't worry of havong this tool 
    in the production mode.

---
### React Query Hooks: 
    A query is a declarative dependency on an asynchronous source of data that is tied to a unique key. A query can be used with any Promise based method (including GET and POST methods) to fetch data from a server. 
    If your method modifies data (Create, Update or Delete) on the server, we recommend using Mutations instead.

# useQuery(Key, callbackFunc()): 
is a react query hook that fetching data from an endpoint api , and it has two arguments: 
-   `key:` A unique key for the query, which denotes the store name, used internally for refetching, caching, and sharing your queries throughout your application.

-   `callbackFunc():` A function that returns a promise. 
    this hook return an Object that hold the query information such as:
    `isLoading`, `error`, `isError`, `data`, `isSuccess`, and other properties.  

# useMutation(callbackFunc(), { helper1, helper2, ... helpern })
Unlike useQuery(), mutations are typically used to create/update/delete data or perform server side-effects.
A mutation can only be in one of the following states at any given moment:
`isIdle` => The mutation is currently idle or in a fresh/reset state.
`isLoading`, `isError`, `isSuccess`.
`data` and `error` as well, holding all these info. in a returned Object.

- `callbackFunc():` is an async function of dealing with fetched data.
- `{ helpers }` : useMutation() comes with some helper options that allow quick and easy side-effects at any stage during the mutation lifecycle. and they are: 
    ```JSX
        onError: (error) => {
            // An error happened!
            console.log(`Opps, an error occured !! ${error}`)
        },
        onSuccess: (data) => {
            // process succeed!
            console.log(`Process succeed ! ${data}`)
        },
        onSettled: (data, error) => {
            // Error or success... doesn't matter!
        },
    ```




# api Link
[https://jsonplaceholder.typicode.com/posts]