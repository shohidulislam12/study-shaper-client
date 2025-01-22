import React, {  useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import { Navigate, NavLink, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
   // console.log(loading)
    if(loading){
       // console.log('hit these loading')
        return <span className="loading loading-ring loading-lg"></span>}
    if(user){
        return children
    }
 //console.log(location)
return <Navigate to='/signin' state={location?.pathname}></Navigate>
};

export default PrivetRoute;