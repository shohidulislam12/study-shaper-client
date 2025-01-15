import React from 'react';

const SignUp = () => {
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
                    <form className="card-body">
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
                                placeholder="Enter your name"
                                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Photo</span>
                            </label>
                            <input
                                type="file"
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
                            <a
                                href="/login"
                                className="text-indigo-600 font-semibold hover:underline"
                            >
                                Log in
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
