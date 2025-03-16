import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DashBoard from "../pages/DashBoard";
import HomePage from "../pages/HomePage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/dashboard",
      element: <DashBoard/>
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Signup/>,
    }
  ]);

  export default router