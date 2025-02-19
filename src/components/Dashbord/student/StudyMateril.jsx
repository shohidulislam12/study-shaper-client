import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { useQuery } from "@tanstack/react-query";
import { FaDownload, FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { div } from "framer-motion/client";


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
//console.log('booked',booked)
    return (
<div className="min-h-screen  dark:bg-black   dark:text-white">
<> { booked.length>0?
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {booked.map((material, index) => (
    <div
        key={material._id}
        className="card shadow-lg dark:bg-gray-500 dark:text-white  rounded-lg border border-gray-200 bg-white"
      >
        <div className="card-header p-4">
          <h3 className="text-lg font-bold mb-2">{material.sessionTitle}</h3>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Session ID:</span> {material.sessionId}
          </p>
        </div>
  
{/* Image */}
{material?.materials[0]?.photolinkarray.length>0?<div className="card-image  overflow-scroll flex space-x-2">
{ material?.materials[0]?.photolinkarray.map((link, i) => (
<div key={i} className="relative  ">
  {/* Image */}
  <img
    src={link}
    alt={`Image-${i + 1}`}
    className="w-full h-full object-cover rounded"
  />

  {/* Download Button */}
  <a
    href={link} // Set the link to the image URL
    download={`image-${i + 1}`} // Specify a default filename for download
    className="absolute top-2 right-2 dark:text-white  bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
    title="Download Image"
  >
    <FaDownload></FaDownload>
  </a>
</div>
))}
</div>:<p>No Image Found</p>}

  
        {/* Links */}
        <div className="card-body p-4">
          <div className="mb-3">
            <h4 className="text-sm font-semibold mb-1">Resource Links:</h4>
           {material?.materials[0]?.linkarray?.length>0?
             <div className="flex flex-col gap-1">
             {material?.materials[0]?.linkarray.map((link, i) => (
               <a
                 key={i}
                 href={link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-600 dark:text-white underline text-sm"
               >
                 View Resource {i + 1}
               </a>
             ))}
           </div>:<p>no Link found</p>
           }
          </div>
        </div>
  
     
      </div>
    ))}
  </div>:<p>No Note Availabe</p>
   }
   </>

</div>    );
};

export default StudyMateril;