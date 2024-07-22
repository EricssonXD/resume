import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import { routes } from './routes';

function App() {
  // const router = useMemo(() => createBrowserRouter(routes, {
  //   basename: "/resume/",
  // }), []);

  // Use createHashRouter instead of createBrowserRouter to avoid 404 errors when refreshing the page in a GitHub Pages environment
  const router = useMemo(() => createHashRouter(routes, {
    basename: "/resume/",
  }), []);

  return <RouterProvider router={router} />;
}

export default App;
