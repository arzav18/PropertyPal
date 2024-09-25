import HomePage from "./pages/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import Layout from "./pages/Layout/Layout";
import SinglePage from "./pages/SinglePage/SinglePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },

      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
