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
import Payment from "./Dashbord/student/Payment.jsx";
import TutorPrivet from "./Dashbord/Tutor/TutorPrivet.jsx";
import StudentPrivet from "./Dashbord/student/StudentPrivet.jsx";
import AdminPrivet from "./Dashbord/Admin/AdminPrivet.jsx";
import ErrorElement from "./ErrorElement.jsx";
import BlogPage from "./blogpage/BlogPage.jsx";
import AboutUs from "./aboutus/AboutUs.jsx";
import Community from "./commonity/Community.jsx";


    const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
          errorElement:<ErrorElement></ErrorElement>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<BlogPage></BlogPage>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/community',
                element:<Community></Community>
            },
            {
                path:'/payment',
                element:<Payment></Payment>
            },
            {
                path:'/dashbord',
                element:<PrivetRoute><DashBord></DashBord></PrivetRoute>,
                children:[
                  // student dashbord
                  {
                    path:'booked',
                    element:<StudentPrivet><Booked></Booked></StudentPrivet>
                },
                  {
                    path:'createnote',
                    element:<StudentPrivet><CreartNote></CreartNote></StudentPrivet>
                },
                  {
                    path:'personalnotes/note/:id',
                    element:<StudentPrivet><EditNote></EditNote></StudentPrivet>
                },
                  {
                    path:'personalnotes',
                    element:<StudentPrivet><ManegeNote></ManegeNote></StudentPrivet>
                },
                  {
                    path:'studymaterials',
                    element:<StudentPrivet><StudyMateril></StudyMateril></StudentPrivet>
                },
                // tutor dashbord
                  {
                    path:'materials',
                    element:<Allmaterials></Allmaterials>
                },
                  {
                    path:'creatsession',
                    element:<TutorPrivet><Creatsession></Creatsession></TutorPrivet>
                },
                 {
                    path:'createdsession/material/:id',
                    element:<TutorPrivet><UploeadMaterial></UploeadMaterial></TutorPrivet>
                },
                {
                  path:'uploadmaterials/material/:id',
                  element:<TutorPrivet><UploeadMaterial></UploeadMaterial></TutorPrivet>
              },
                {
                  path:'materials/material/:id',
                  element:<TutorPrivet><EditMaterial></EditMaterial></TutorPrivet>
              },
                  {
                    path:'uploadmaterials',
                    element:<TutorPrivet><Uploadmaterials></Uploadmaterials></TutorPrivet>
                },
                  {
                    path:'createdsession',
                    element:<TutorPrivet><Allcreatedsession></Allcreatedsession></TutorPrivet>
                },
                // admin dashbord
                  {
                    path:'allmaterials',
                    element:<AdminPrivet><Allmaterialsadmin></Allmaterialsadmin></AdminPrivet>
                },
                  {
                    path:'allstudysession',
                    element:<AdminPrivet><Allstudysession></Allstudysession></AdminPrivet>
                },
                  {
                    path:'allusers',
                    element:<AdminPrivet><Allusers></Allusers></AdminPrivet>
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