import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";


const Navbar = () => {
    const {user,handlesignOut}=useContext(AuthContext)
    console.log(user)
    const list=<>
        <li><NavLink to='/'>Home</NavLink> </li>
    <li><NavLink to='/dashbord'>DashBord</NavLink> </li>
    </>
    const signout=()=>{
      handlesignOut()
      setUser(null)
    }
    return (
        <div className="navbar bg-[#262626] text-white">
        <div className="flex-1 items-center">
            <img src="/reading.png" className="w-10 h-10" alt="" />
          <a className=" text-xl font-bold">Study<span className="text-[#82B440]">Sphere</span></a>
        </div>
        <div className="flex-none  gap-2">
       <div>
        <ul className="hidden md:flex gap-2 items-center justify-between">
            {
                list
            }
        </ul>
       </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              {user?  <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL}/>:  <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#262626] rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">{user&&user?.displayName}</span>
                </a>
              </li>
           
            <span className="block md:hidden">
            {
                list
            }
            </span>
      
              <li><NavLink to='/'>Settings</NavLink></li>
              <li><button onClick={signout}>Logout</button></li>
              <li><NavLink to='/signin'>SignIn</NavLink></li>
              <li><NavLink to='/signup'>SignUp</NavLink></li>
            </ul>
         

          </div>
        </div>
      </div>

  
    );
};

export default Navbar;