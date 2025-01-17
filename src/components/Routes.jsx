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
import Booked from "./Dashbord/student/Booked.jsx";
import CreartNote from "./Dashbord/student/CreartNote.jsx";
import ManegeNote from "./Dashbord/student/ManegeNote.jsx";
import StudyMateril from "./Dashbord/student/StudyMateril.jsx";
import Allmaterials from "./Dashbord/Tutor/Allmaterials.jsx";
import Allcreatedsession from "./Dashbord/Tutor/Allcreatedsession.jsx";
import Uploadmaterials from "./Dashbord/Tutor/Uploadmaterials.jsx";
import Creatsession from "./Dashbord/Tutor/Creatsession.jsx";


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
                element:<DashBord></DashBord>,
                children:[
                  // student dashbord
                  {
                    path:'booked',
                    element:<Booked></Booked>
                },
                  {
                    path:'createnote',
                    element:<CreartNote></CreartNote>
                },
                  {
                    path:'personalnotes',
                    element:<ManegeNote></ManegeNote>
                },
                  {
                    path:'studymaterials',
                    element:<StudyMateril></StudyMateril>
                },
                // tutor dashbord
                  {
                    path:'allmaterials',
                    element:<Allmaterials></Allmaterials>
                },
                  {
                    path:'creatsession',
                    element:<Creatsession></Creatsession>
                },
                  {
                    path:'uploadmaterials',
                    element:<Uploadmaterials></Uploadmaterials>
                },
                  {
                    path:'allcreatedsession',
                    element:<Allcreatedsession></Allcreatedsession>
                },
                ]
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