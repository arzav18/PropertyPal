import HomePage from "./pages/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import SinglePage from "./pages/SinglePage/SinglePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";
import { Layout, RequireAuth } from "../src/pages/Layout/Layout";
import ProfileUpdatePage from "./pages/ProfileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./pages/NewPostPage/NewPostPage";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";
import ContactPage from "./pages/ContactPage/ContactPage";
import About from "./pages/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/contact",
          element: <ContactPage />,
          // loader: listPageLoader,
        },
        {
          path: "/about",
          element: <About />,
          // loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
