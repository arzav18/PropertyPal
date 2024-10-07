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
        },
        {
          path: "/:id",
          element: <SinglePage />,
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

// import HomePage from "./pages/homePage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ListPage from "./pages/ListPage/ListPage";
// import SinglePage from "./pages/SinglePage/SinglePage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import Register from "./pages/Register/Register";
// import Login from "./pages/login/Login";
// import { Layout, RequireAuth } from "../src/pages/Layout/Layout";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <HomePage />,
//         },
//         {
//           path: "/list",
//           element: <ListPage />,
//         },
//         {
//           path: "/:id",
//           element: <SinglePage />,
//         },
//         {
//           path: "/login",
//           element: <Login />,
//         },
//         {
//           path: "/register",
//           element: <Register />,
//         },
//       ],
//     },
//     {
//       path: "/",
//       element: <RequireAuth />,
//       children: [
//         {
//           path: "/profile",
//           element: <ProfilePage />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;
