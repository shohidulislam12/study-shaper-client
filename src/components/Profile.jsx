import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UpdateProfileModal from "./Shared/UpdateProfileModal";
import { AuthContext } from "./Authprovider/AuthProvider";
import useAxiousSecure from "./Shared/useAxiousSecure";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [profileinf, setProfileinf] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiousSecure=useAxiousSecure()

    useEffect(() => {
        if (!user?.email) return;

        axiousSecure.get(`/singleusers/${user.email}`)
            .then(res => setProfileinf(res.data))
            .catch(err => console.error("Error fetching profile:", err));
    }, [user?.email,setProfileinf]);

    if (!profileinf) {
        return <div className="text-center mt-20 text-xl font-semibold">Loading profile...</div>;
    }

    return (
      <div className="dark:bg-black min-h-screen py-10">
          <div className="max-w-xl mx-auto py-10 dark:bg-gray-500   p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl dark:text-white  font-bold text-indigo-700 text-center mb-6">Profile</h2>
            <div className="flex flex-col items-center">
                <img src={profileinf.photoURL} alt={profileinf?.name} className="w-32 h-32 rounded-full hover:scale-105 shadow-md" />
                <h3 className="text-2xl font-semibold dark:text-white  text-gray-900">{profileinf.name}</h3>
                <p className="text-gray-600 dark:text-white  text-left">{profileinf.email}</p>
                <p className="text-gray-600 dark:text-white  text-left"><strong>Phone:</strong> {profileinf.phone || "Not Provided"}</p>
                <p className="text-gray-600 dark:text-white  text-left"><strong>Address:</strong> {profileinf.address || "Not Provided"}</p>
                <p className="text-gray-600 dark:text-white  text-left"><strong>Institution:</strong> {profileinf.institution || "Not Provided"}</p>
                <span className="px-4 py-1 dark:text-black  bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {profileinf.role}
                </span>
                <button onClick={() => setIsModalOpen(true)} className="bg-blue-500  text-white px-4 py-2 rounded mt-4">
                    Edit Profile
                </button>
            </div>

            {/* Update Profile Modal */}
            <UpdateProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} refetch={() => {
                axiousSecure.get(`/singleusers/${user.email}`)
                    .then(res => setProfileinf(res.data))
                    .catch(err => console.error("Error fetching profile:", err));
            }} />
        </div>
      </div>
    );
};

export default Profile;
