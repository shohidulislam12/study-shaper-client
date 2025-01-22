import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";

const axiousSecure=axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`
})
const useAxiousSecure = () => {
    const navigate=useNavigate()
    const {handlesignOut}=useContext(AuthContext)
    //requast interceptor 
    axiousSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('token')
      //  console.log(token)
        config.headers.authorization=`bearer ${token}`
//console.log('request stooped by interceptortr')
return config
    },function(error){
        return Promise.reject(error)
    })
//responce 
axiousSecure.interceptors.response.use(function(responce){
    return responce
},async function(error){
 //   console.log('error core',error.status)
    const status=error.status
    if(status===401||status===403){
       await handlesignOut()
        navigate('/signin')
    }
    return Promise.reject(error)
})


    return axiousSecure
};

export default useAxiousSecure;
