import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";


const DefaultUserCred = () => {

    const {signInWithMailPass}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location?.state||'/'
        const handledefaultuser= ()=>{
       

            const email="shohidulislam2003@gmail.com"
            const password="sifatsifat"
         //   console.log(email,password)
            signInWithMailPass(email ,password)
            .then((user) => {
         //  console.log(user)
           navigate(from)
           return toast.success('sign in sucessfully')
              })
              .catch((error) => {
               
                return toast.error( error.message)
              });
            
    
        }
        const handledefaultAdmin= ()=>{
       

            const email="sifat20003@gmail.com"
            const password="sifatsifat"
         //   console.log(email,password)
            signInWithMailPass(email ,password)
            .then((user) => {
         //  console.log(user)
           navigate(from)
           return toast.success('sign in sucessfully')
              })
              .catch((error) => {
               
                return toast.error( error.message)
              });
            
    
        }
    return (
        <div className="w-full">
                  <button
                        onClick={handledefaultuser}
                        className="flex items-center w-full my-2 justify-center  px-6 py-3 text-gray-600 border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-100 "
                    >
                        <FaUser className="text-2xl mr-3" /> {/* Google Icon */}
                        <span className="text-sm font-medium">Get Default User Credential</span>
                    </button>
                  <button
                        onClick={handledefaultAdmin}
                        className="flex items-center w-full  justify-center px-6 py-3 text-gray-600 border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-100 "
                    >
                        <FaUser className="text-2xl mr-3" /> {/* Google Icon */}
                        <span className="text-sm font-medium">Get Default Admin Credential</span>
                    </button>
        </div>
    );
};

export default DefaultUserCred;