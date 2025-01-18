import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const DashBord = () => {
    return (
        <div className='mt-16 min-h-screen'>
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
    <ul className="menu bg-base-200 text-base-content min-h-full lg:w-80 p-4">
      {/* Sidebar for Student DashBord here */}
      <div className="divider">Student</div>
      <li><NavLink to='booked'>View booked session</NavLink></li>
      <li><NavLink to='createnote'>Create note</NavLink></li>
      <li><NavLink to='personalnotes'>Manage personal notes</NavLink></li>
    <li><NavLink to='studymaterials'>Study materials from tutor</NavLink></li>
            {/* Sidebar for Tutor DashBord here */}
            <div className="divider">Tutor</div>
            <li><NavLink to='creatsession'>Create study session</NavLink></li>
      <li><NavLink to='createdsession'>All Created Session</NavLink></li>
      <li><NavLink to='uploadmaterials'>Your Uploaded materials</NavLink></li>
    <li><NavLink to='materials'> All Your materials</NavLink></li>
            {/* Sidebar for Tutor DashBord here */}
            <div className="divider">Admin</div>
            <li><NavLink to='allusers'>All users</NavLink></li>
      <li><NavLink to='allstudysession'>All study session</NavLink></li>

    <li><NavLink to='allmaterials'> All  Materials</NavLink></li>




    </ul>
  </div>
  
</div>


        </div>
    );
};

export default DashBord;