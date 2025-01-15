import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Authprovider/AuthProvider";
import { toast } from "react-toastify";


const GoogleLog = () => {
    const {googleLogin}=useContext(AuthContext)
    const handleGoogle=()=>{
        console.log('google')
        googleLogin()
        .then((result) => {
            toast.success('login Sucess')
          console.log(result)
          }).catch((error) => {
            toast.error(error)
            console.log(error)
          });
        
    }
    return (
        <button
            onClick={handleGoogle}
            className="flex items-center justify-center w-full px-6 py-3 text-gray-600 border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-100 "
        >
            <FcGoogle className="text-2xl mr-3" /> {/* Google Icon */}
            <span className="text-sm font-medium">Continue with Google</span>
        </button>
    );
};


export default GoogleLog;