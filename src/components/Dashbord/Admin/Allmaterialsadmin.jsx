import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";

import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { AuthContext } from "../../Authprovider/AuthProvider";
import useAdmin from "../../Shared/useAdmin";
import useAxiousSecure from "../../Shared/useAxiousSecure";


const Allmaterialsadmin = () => {
    const {user}=useContext(AuthContext)
    const [isadmin]=useAdmin()
        const axiousSecure=useAxiousSecure()
    const axiousPublic = useAxiousPublic();
    const { data: materials = [], isLoading,refetch } = useQuery({
      queryKey: ["materials",user],
      queryFn: async () => {
        const res = await axiousSecure.get(`/allmaterialadmin`);
        return res.data;
      },
    });
    if (isLoading) {
      return <div className="loading loading-ring loading-lg"></div>;
    }
 
    const handleDelete=(id)=>{
        //
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
             
                const{data}=await axiousSecure.delete(`/deletematerial/${id}`)
             
                if(data.acknowledged){
                    refetch()
                 Swal.fire({
                title: "Updateded!",
                text: "Material Delete Done",
                icon: "success"
              });
                }
           
            }
          });

    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {materials.map((material, index) => (
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
                src={material.drivephoto}
                alt={material.sessionTitle}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
      
            {/* Links */}
            <div className="card-body p-4">
              <div className="mb-3">
                <h4 className="text-sm font-semibold mb-1">Resource Links:</h4>
                <div className="flex flex-col gap-1">
                  {material.linkarray.map((link, i) => (
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
      
            {/* Actions */}
            <div className="card-footer p-4 flex gap-3 justify-between items-center border-t border-gray-200">
        
              <button
                className="btn btn-warning btn-sm"
                onClick={() => handleDelete(material._id)}
              >
                <FaTrash className="mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Allmaterialsadmin;