import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const StudyMateril = () => {
    const {user}=useContext(AuthContext)
    const axiousPublic=useAxiousPublic()
    const {data:booked=[],isLoading,refetch} = useQuery({
        queryKey: ['booked'],
         queryFn: async()=>{
           const res= await axiousPublic.get(`/booked-studynote/${user.email}`)
           return res.data
         }
                  
        })
        if (isLoading) {
         return <div className="loading loading-ring loading-lg"></div>;
       }
console.log(booked)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {booked.map((material, index) => (
          <div
            key={material._id}
            className="card shadow-lg rounded-lg border border-gray-200 bg-white"
          >
            <div className="card-header p-4">
              <h3 className="text-lg font-bold mb-2">{material.sessionTitle}</h3>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Session ID:</span> {material.sessionId}
              </p>
            </div>
      
            {/* Image */}
            <div className="card-image">
              <img
                src={material?.materials[0]?.drivephoto
                }
                alt={'material.sessionTitle'}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
      
            {/* Links */}
            <div className="card-body p-4">
              <div className="mb-3">
                <h4 className="text-sm font-semibold mb-1">Resource Links:</h4>
                <div className="flex flex-col gap-1">
                  {material?.materials[0]?.linkarray.map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm"
                    >
                      View Resource {i + 1}
                    </a>
                  ))}
                </div>
              </div>
            </div>
      
         
          </div>
        ))}
      </div>
    );
};

export default StudyMateril;