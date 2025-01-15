import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Authprovider/AuthProvider';

const Githublog = () => {
    const {githubLogin}=useContext(AuthContext)
    const handleGithub=()=>{
        githubLogin()
        .then((user) => {
           console.log(user)
          }).catch((error) => {
            console.log(error)
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