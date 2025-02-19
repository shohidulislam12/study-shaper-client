import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, handlesignOut } = useContext(AuthContext);
  const signout = () => {
    handlesignOut();
    setUser(null);
  };
  //add darkmood 
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );



  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
     
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      
    }
  }, [darkMode]);



  const list = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/blogs">Blog</NavLink>{" "}
      </li>
      {user?.email && (
        <li>
          <NavLink to="/community">Community Forum</NavLink>{" "}
        </li>
      )}
 
      <li>
        <NavLink to="/about">About Us</NavLink>{" "}
      </li>
      {user?.email && (
        <li>
          <NavLink to="/dashbord">DashBord</NavLink>{" "}
        </li>
      )}
      {user?.email && (
              <li>
                <button onClick={signout}>Logout</button>
              </li>
            )}
            {!user?.email && (
              
                <li>
                  <NavLink to="/signin">SignIn</NavLink>
                </li>
               
            
            )}
            {!user?.email && (
              
              <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
            
            )}
    </>
  );

  return (
    <div className="navbar  dark:bg-[#262626] bg-[#fbfcf8] dark:text-white  fixed max-w-screen-xl z-50 mx-auto left-0 right-0   text-black">
      <div className="flex-1 items-center">
        <img src="/reading.png" className="w-10 h-10" alt="" />
        <a className=" text-xl font-bold">
          Study<span className="text-blue-600">Sphere</span>
        </a>
      </div>
      <div className="flex-none  gap-2">
        <div className="flex items-center gap-2">
        <button 
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
          <ul className="hidden md:flex gap-2 items-center justify-between">
            {list}
          </ul>
        </div>
        <div className="dropdown  dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user ? (
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              ) : (
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              )}
            </div>
          </div>
          
     <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content dark:bg-black bg-[#fbfcf8] text-black dark:text-white rounded-box z-[1] md:mt-0  mt-3 w-52  shadow"
          >
           {/* {  user?.email &&  <li>
              <a className="justify-between">
                Profile
                <span className="badge">{user && user?.displayName}</span>
              </a>
            </li>}
           {  user?.email &&   <li>
              <NavLink to="/">Settings</NavLink>
            </li>} */}

            <span className="block md:hidden">{list}</span>

          
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
