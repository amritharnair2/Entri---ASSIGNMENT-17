import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DashBoard from "../pages/DashBoard";

  const router = createBrowserRouter([
    {
      path: "/",
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