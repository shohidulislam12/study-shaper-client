import React, { useContext, useState } from "react";

import axios from "axios";
import { AuthContext } from "../Authprovider/AuthProvider";
import useAxiousPublic from "./useAxiousPublic";
import { toast } from "react-toastify";

const UpdateProfileModal = ({ isOpen, onClose, refetch }) => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        phone: "",
        address: "",
        institution: "",
    });
    const axiousPublic=useAxiousPublic()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiousPublic.put(`/updateProfile/${user.email}`, formData);
            console.log("Profile Updated:", response.data);
            refetch(); 
            onClose();
            toast.success("Information Update Sucessfully")
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="text"
                        name="institution"
                        placeholder="Institution Name"
                        value={formData.institution}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Update
                    </button>
                    <button onClick={onClose} className="text-red-500 mt-2">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfileModal;
