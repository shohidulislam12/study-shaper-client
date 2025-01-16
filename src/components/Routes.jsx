import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "./Main/Main";
import DashBord from "./Dashbord/DashBord";
import Home from "./Home/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
  import SessionDetails    from "../components/Home/SessionDetails.jsx"
import PrivetRoute from "./Shared/PrivetRoute.jsx";


    const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/dashbord',
                element:<DashBord></DashBord>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/sessiondetails',
                element:<PrivetRoute><SessionDetails></SessionDetails></PrivetRoute>
            },
          ]
        },
      ]);


export default router;