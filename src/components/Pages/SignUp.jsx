import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { photoURL } from '../Shared/Sheared';
import { AuthContext } from '../Authprovider/AuthProvider';
import GoogleLog from './GoogleLog';
import Githublog from './Githublog';
import useAxiousPublic from '../Shared/useAxiousPublic';

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
        <div className="hero bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 md:p-20 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="max-w-lg">
                    <img
                        className="h-auto w-full rounded-xl shadow-lg"
                        src="https://i.ibb.co/GCLNg9D/360-F-255226859-Rhqr5hflr2es-VXHQE1s-S1b-Wxm-Zxs0g-WI.jpg"
                        alt="Sign-Up Visual"
                    />
                </div>
                <div className="card bg-white w-full max-w-md shrink-0 shadow-2xl p-8 rounded-xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
                            Sign Up Today!
                        </h2>
                        <p className="text-gray-500 text-center mb-6">
                            Fill in the form below to create your account.
                        </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Name</span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter your name"
                                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Select Role</span>
                            </label>
                            <select name="role" id="cars">
    <option value="student">Student</option>
    <option value="tutor">Tutor</option>
    <option value="administrator">Administrator</option>

  </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Photo</span>
                            </label>
                            <input 
                            onChange={(e)=>setPhoto(e.target.files[0])}
                                type="file"
                                name='photo'
                                accept='images/*'
                                className="file-input file-input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
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
                                Sign Up
                            </button>
                        </div>
                        <p className="text-center text-gray-500 mt-4">
                            Already have an account?{" "}
                            <NavLink state={from}
                                to="/signin"
                                className="text-indigo-600 font-semibold hover:underline"
                            >
                                Log in
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

export default SignUp;
