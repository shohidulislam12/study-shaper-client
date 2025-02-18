import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import { toast } from 'react-toastify';
import GoogleLog from './GoogleLog';
import Githublog from './Githublog';

const SignIn = () => {
    const {signInWithMailPass}=useContext(AuthContext)
const navigate=useNavigate()
const location=useLocation()
const from=location?.state||'/'
//console.log(location)
//console.log("ssssignin",location?.state)
    const handleSignin= (e)=>{
        e.preventDefault()
        const form=e.target    
        const email=form.email.value
        const password=form.password.value
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
        <div className="flex items-center my-16 justify-between min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-4">
        <div className="flex flex-col justify-between lg:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-6xl gap-5 p-5">
            {/* Image Section */}
            <div className="max-w-md w-full">
                <img
                    className="h-auto w-full rounded-xl shadow-lg"
                    src="https://i.ibb.co/TKNWsxm/premium-photo-1661761077411-d50cba031848.jpg"
                    alt="Sign-In Visual"
                />
            </div>

            {/* Form Section */}
            <div className="w-full max-w-md">
                <div className="bg-white p-6 shadow-lg rounded-xl">
                    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
                        Welcome Back!
                    </h2>
                    <p className="text-gray-500 text-center mb-6">
                        Please sign in to continue.
                    </p>
                    <form onSubmit={handleSignin} className="space-y-4">
                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
                        {/* Sign In Button */}
                        <button className="btn btn-primary w-full hover:bg-indigo-600">
                            Sign In
                        </button>
                    </form>
                    {/* Signup Link */}
                    <p className="text-center text-gray-500 mt-4">
                        Don’t have an account?{" "}
                        <NavLink
                            state={from}
                            to="/signup"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            Sign up
                        </NavLink>
                    </p>
                    {/* Social Logins */}
                    <p className="text-center text-gray-500 mt-4">
                        Or{" "}
                        <div className="flex flex-col gap-2">
                            <GoogleLog />
                            <Githublog />
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignIn;
