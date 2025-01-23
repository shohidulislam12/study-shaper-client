import React, {  useContext, useEffect, useState } from 'react';

import { Navigate, NavLink, useLocation } from 'react-router-dom';
import useAxiousSecure from '../../Shared/useAxiousSecure';
import { AuthContext } from '../../Authprovider/AuthProvider';

const TutorPrivet = ({children}) => {
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
    if(role==='tutor'){
        return children
    }
 //console.log(location)
return <Navigate to='/signin' state={location?.pathname}></Navigate>
};

export default TutorPrivet;