import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./Component/Menu";
import Home from "./Component/Home";
import Create from "./Component/Create";
import Update from "./Component/Update";
import { ToastContainer } from "react-toastify";
const Layout = () => {
  return (
    <React.Fragment>
      <Menu />
      <ToastContainer autoClose={4000} position={"top-right"}/>
      <Outlet />
    </React.Fragment>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/create",
    element:<Create/>,
    }, {
      path: "/update/:id",
      element:<Update/>
    }
    ]
  },

  {
    path: "/login",
    element: "Login",
  },
  {
    path: "/*",
    element: "Requested path not found",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
