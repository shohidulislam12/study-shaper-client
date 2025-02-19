import React, { useContext, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import useAxiousSecure from '../Shared/useAxiousSecure';
import { AuthContext } from '../Authprovider/AuthProvider';

const DashBord = () => {
  const location=useLocation()
  const {user,loading}=useContext(AuthContext)
  const axiousSecure=useAxiousSecure()
  const [isLoading, setIsLoading] = useState(true);
  const [role,setrole]=useState('')
  useEffect(() => {
      const fetchRole = async () => {
        try {
          if (user?.email) {
            const { data } = await axiousSecure.get(`/tuotorprivet/${user.email}`);
            setrole(data?.role);
          }
        } catch (error) {
          console.error('Error fetching role:', error);
        } finally {
          setIsLoading(false); // Mark loading as complete
        }
      };
  
      fetchRole();
    }, [user?.email, axiousSecure]);
  
    // Show a loading spinner while role is being fetched
    if (loading || isLoading) {
      return <span className="loading loading-ring loading-lg"></span>;
    }
  console.log("role",role)


    return (
        <div className='min-h-screen'>
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    {/* Page content here */}
  <div className=''>
  <label htmlFor="my-drawer-2" className="btn  border-b-2   border-blue-500  btn-outline  drawer-button lg:hidden">
    <FaBars />
    </label>
  </div>
    <div>
<Outlet></Outlet>
</div>



  </div>
  <div className="drawer-side  mt-16 md:mt-0">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-[#fbf6f6] text-base-content min-h-full lg:w-80 p-4">
      {/* Sidebar for Student DashBord here */}
     {role==='student'&&<span>
      
      <div className="divider">Student</div>
      <li> <NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='profile'>Profile</NavLink></li>
      <li><NavLink to='booked'>View booked session</NavLink></li>
      <li><NavLink to='createnote'>Create note</NavLink></li>
      <li><NavLink to='personalnotes'>Manage personal notes</NavLink></li>
    <li><NavLink to='studymaterials'>Study materials from tutor</NavLink></li></span>}
            {/* Sidebar for Tutor DashBord here */}
           { role==='tutor'&&
            <span>
               <div className="divider">Tutor</div>
               <li><NavLink to='/'>Home</NavLink></li>
               <li><NavLink to='profile'>Profile</NavLink></li>
            <li><NavLink to='creatsession'>Create study session</NavLink></li>
      <li><NavLink to='createdsession'>All Created Session</NavLink></li>
      <li><NavLink to='uploadmaterials'> Upload materials</NavLink></li>
    <li><NavLink to='materials'> All Your materials</NavLink></li>
            </span>
           }
            {/* Sidebar for Tutor DashBord here */}
{role==='admin'&&
  <span>
                <div className="divider">Admin</div>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='profile'>Profile</NavLink></li>
            <li><NavLink to='allusers'>All users</NavLink></li>
      <li><NavLink to='allstudysession'>All study session</NavLink></li>

    <li><NavLink to='allmaterials'> All  Materials</NavLink></li>
  </span>
}




    </ul>
  </div>
  
</div>


        </div>
    );
};

export default DashBord;