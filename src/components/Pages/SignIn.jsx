import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import { toast } from 'react-toastify';
import GoogleLog from './GoogleLog';
import Githublog from './Githublog';

const SignIn = () => {
    const {signInWithMailPass}=useContext(AuthContext)
const navigate=useNavigate()

    const handleSignin= (e)=>{
        e.preventDefault()
        const form=e.target    
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        signInWithMailPass(email ,password)
        .then((user) => {
       console.log(user)
       navigate('/')
       return toast.success('sign in sucessfully')
          })
          .catch((error) => {
           
            return toast.error( error.message)
          });
        

    }
    return (
        <div className="hero p-5 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 md:p-20 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="max-w-lg">
                    <img
                        className="h-auto w-full rounded-xl shadow-lg"
                        src="https://i.ibb.co.com/TKNWsxm/premium-photo-1661761077411-d50cba031848.jpg"
                        alt="Sign-In Visual"
                    />
                </div>
                <div className="card bg-white w-full max-w-md shrink-0 shadow-2xl p-8 rounded-xl">
                    <form onSubmit={handleSignin} className="card-body">
                        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
                            Welcome Back!
                        </h2>
                        <p className="text-gray-500 text-center mb-6">
                            Please sign in to continue.
                        </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full hover:bg-indigo-600">
                                Sign In
                            </button>
                        </div>
                        <p className="text-center text-gray-500 mt-4">
                            Don’t have an account?{" "}
                            <NavLink
                                to="/signup"
                                className="text-indigo-600 font-semibold hover:underline"
                            >
                                Sign up
                            </NavLink>
                        </p>
                       
                    </form>
                    <p className="text-center text-gray-500 mt-4">
                            Or  {" "}
                            <span className='flex flex-col '><GoogleLog></GoogleLog><Githublog></Githublog> </span>
                           
                        </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
