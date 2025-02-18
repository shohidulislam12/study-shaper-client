import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Authprovider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiousPublic from "../Shared/useAxiousPublic";



const GoogleLog = () => {
    const axiousPublic=useAxiousPublic()
    const {googleLogin}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
const from=location?.state||'/'
//console.log(location)
    const handleGoogle=()=>{
       // console.log('google')
        googleLogin()
        .then((result) => {
            navigate(from)
           // console.log(result.user)
            const userData = {
                name: result.user.displayName, // Fixed: Use `displayName` for user's name
                email: result.user.email, // Include email as a best practice
                photoURL: result.user.photoURL,
                role:'student', // Optional: User's profile picture
            };
        
      axiousPublic.post('/users',userData)
      .then(res=>{
        if(res){
        console.log(res.data.insertedId)
        }
      })
          
            toast.success('login Sucess')
       
          }).catch((error) => {
            toast.error(error)
            
          });
        
    }
    return (
        <button
            onClick={handleGoogle}
            className="flex items-center justify-center w-auto px-6 py-3 text-gray-600 border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-100 "
        >
            <FcGoogle className="text-2xl mr-3" /> {/* Google Icon */}
            <span className="text-sm font-medium">Continue with Google</span>
        </button>
    );
};


export default GoogleLog;