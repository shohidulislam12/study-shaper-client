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
import CreartNote from "./Dashbord/student/CreatNote.jsx";
import ManegeNote from "./Dashbord/student/ManegeNote.jsx";
import StudyMateril from "./Dashbord/student/StudyMateril.jsx";
import Allmaterials from "./Dashbord/Tutor/Allmaterials.jsx";
import Allcreatedsession from "./Dashbord/Tutor/Allcreatedsession.jsx";
import Uploadmaterials from "./Dashbord/Tutor/Uploadmaterials.jsx";
import Creatsession from "./Dashbord/Tutor/Creatsession.jsx";
import Allmaterialsadmin from "./Dashbord/Admin/Allmaterialsadmin.jsx";
import Allstudysession from "./Dashbord/Admin/Allstudysession.jsx";
import Allusers from "./Dashbord/Admin/allusers.jsx";
import EditNote from "./Dashbord/student/EditNote.jsx";
import UploeadMaterial from "./Dashbord/Tutor/UploeadMaterial.jsx";
import EditMaterial from "./Dashbord/Tutor/EditMaterial.jsx";


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
                    path:'personalnotes/note/:id',
                    element:<EditNote></EditNote>
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
                    path:'materials',
                    element:<Allmaterials></Allmaterials>
                },
                  {
                    path:'creatsession',
                    element:<Creatsession></Creatsession>
                },
                 {
                    path:'createdsession/material/:id',
                    element:<PrivetRoute><UploeadMaterial></UploeadMaterial></PrivetRoute>
                },
                {
                  path:'uploadmaterials/material/:id',
                  element:<PrivetRoute><UploeadMaterial></UploeadMaterial></PrivetRoute>
              },
                {
                  path:'materials/material/:id',
                  element:<PrivetRoute><EditMaterial></EditMaterial></PrivetRoute>
              },
                  {
                    path:'uploadmaterials',
                    element:<PrivetRoute><Uploadmaterials></Uploadmaterials></PrivetRoute>
                },
                  {
                    path:'createdsession',
                    element:<Allcreatedsession></Allcreatedsession>
                },
                // admin dashbord
                  {
                    path:'allmaterials',
                    element:<Allmaterialsadmin></Allmaterialsadmin>
                },
                  {
                    path:'allstudysession',
                    element:<Allstudysession></Allstudysession>
                },
                  {
                    path:'allusers',
                    element:<Allusers></Allusers>
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
                path:'/sessiondetails/:id',
                element:<PrivetRoute><SessionDetails></SessionDetails></PrivetRoute>
            },
          ]
        },
      ]);


export default router;