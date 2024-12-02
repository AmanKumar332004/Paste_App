import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home';
import Pastes from './components/Pastes';
import ViewPaste from './components/ViewPaste';
import Layout from './Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout wraps all child routes
      children: [
        // { path: "/", element: <Home /> }, // Default route
        { path: "/", element: <Home /> },
        { path: "pastes", element: <Pastes /> },
        { path: "paste/:id", element: <ViewPaste /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
