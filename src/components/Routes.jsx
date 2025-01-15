import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "./Main/Main";
import DashBord from "./Dashbord/DashBord";
import Home from "./Home/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
  


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
          ]
        },
      ]);


export default router;