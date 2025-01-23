import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import useAxiousPublic from '../Shared/useAxiousPublic';
import { toast } from 'react-toastify';

const Githublog = () => {
    const axiousPublic=useAxiousPublic()
    const {  githubLogin}=useContext(AuthContext )
    const navigate=useNavigate()
    const location=useLocation()
const from=location?.state||'/'

    const handleGithub=()=>{
       // console.log('google')
       githubLogin()
        .then((result) => {
            console.log(result.user)
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
        onClick={handleGithub}
        className="flex items-center justify-center w-full px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-100 "
    >
        <FaGithub className="text-2xl mr-3" /> {/* GitHub Icon */}
        <span className="text-sm font-medium">Continue with GitHub</span>
    </button>
    );
};

export default Githublog;