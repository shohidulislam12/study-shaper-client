import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { photoURL } from '../Shared/Sheared';
import { AuthContext } from '../Authprovider/AuthProvider';
import GoogleLog from './GoogleLog';
import Githublog from './Githublog';
import useAxiousPublic from '../Shared/useAxiousPublic';
import DefaultUserCred from '../Shared/DefaultUserCred';

const SignUp = () => {
    const {creatuserUsingMailPass,updateProfice}=useContext(AuthContext)
    const [photo,setPhoto]=useState(null)
    const navigate=useNavigate()
    const axiousPublic=useAxiousPublic()
    const location=useLocation()
const from=location?.state||'/'

    const handleSignUp=async (e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        if (!photo) {
            alert('Please upload a photo');
            return;
        }
      const photourl= await photoURL(photo)

        const email=form.email.value
        const password=form.password.value
        const role=form.role.value
        const data={name,userphoto:photourl,email,password,role}
      // firebase creat user
      creatuserUsingMailPass(email,password)
      .then((user) => {

        //updateprofile
       updateProfice(name,photourl)
        .then(() => {
            navigate(from)
            //save in database 
            const userData = {
                name: user.user.displayName, 
                email: user.user.email,
                photoURL: user.user.photoURL ,
                role,
            };
        
      axiousPublic.post('/users',userData)
      .then(res=>{
        if(res){
     
        }
      })
          //  console.log('sucess')
          }).catch((error) => {
           //console.log(error)
          });

      })
      .catch((error) => {
      //  console.log(error.message)
      });
    
    }
    
    return (
        <div className="flex items-center my-16 justify-center min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-4">
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-6xl">
            {/* Left Section - Image */}
            <div className="w-full justify-between flex-col lg:w-1/2 p-6 flex ">
                <img
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
                    src="https://i.ibb.co/GCLNg9D/360-F-255226859-Rhqr5hflr2es-VXHQE1s-S1b-Wxm-Zxs0g-WI.jpg"
                    alt="Sign-Up"
                />
              
            </div>

            {/* Right Section - SignUp Form */}
            <div className="w-full lg:w-1/2 p-6 md:p-10">
                <form onSubmit={handleSignUp} className="space-y-4">
                    <h2 className="text-3xl font-bold text-center text-indigo-600">Sign Up Today!</h2>
                    <p className="text-center text-gray-500">Create your account by filling in the details below.</p>

                    {/* Name Input */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Select Role</label>
                        <select
                            name="role"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            <option value="student">Student</option>
                            <option value="tutor">Tutor</option>
                            <option value="adminRequest">Request As Admin</option>
                        </select>
                    </div>

                    {/* Photo Upload */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Upload Photo</label>
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={(e) => setPhoto(e.target.files[0])}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* Sign Up Button */}
                    <div>
                        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                            Sign Up
                        </button>
                    </div>

                    {/* Login Redirect */}
                    <p className="text-center text-gray-500">
                        Already have an account?{' '}
                        <NavLink
                            state={from}
                            to="/signin"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            Log in
                        </NavLink>
                    </p>

                    {/* Social Login Options */}
                    <div className="text-center">
                        <p className="text-gray-500">Or sign up with:</p>
                        <div className="flex flex-col justify-center gap-4 mt-2">
                            <GoogleLog />
                            <Githublog />
                            <DefaultUserCred></DefaultUserCred>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;
