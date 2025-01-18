import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';

import { FaCodePullRequest } from 'react-icons/fa6';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiousPublic from '../../Shared/useAxiousPublic';
import { AuthContext } from '../../Authprovider/AuthProvider';
import { VscPreview } from 'react-icons/vsc';

const Allstudysession = () => {
const {user}=useContext(AuthContext)
  const axiousPublic=useAxiousPublic()
      const [status, setSelestatus] = useState("")
  const {data:sessions=[],isLoading,refetch} = useQuery({
     queryKey: ['session'],
      queryFn: async()=>{
        const res= await axiousPublic.get(`/allsession`)
        return res.data
      }
               
     })
     if (isLoading) {
      return <div className="loading loading-ring loading-lg"></div>;
    }
    const handlerole=(id)=>{
        if (!setSelestatus) {
            Swal.fire("Error", "Please select a role!", "error");
            return;
          }
          console.log("id",id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
           
          }).then((result) => {
            if (result.isConfirmed) {
                console.log(user)
                console.log(status)
                console.log(id)
              axiousPublic.patch(`/updatestatus/${id}`,{
                status:status})
              .then(res=>{
                refetch()
                toast.success('role updated sucessfully')
                console.log(res.data)
              })
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    
    
    
    return (
        <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Session Title</th>
              <th>Rejistration fee</th>
              <th>Status</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
         {
          sessions.map((session,i)=>  
            <tr key={session._id}>
              <th>{i+1}</th>
              <td>{session.sessionTitle}</td>
              <td>{session.registrationFee}</td>
              <td>{session.status}</td>
              <td className='flex gap-2 '>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById(`my_modal_${session._id}`).showModal()}><VscPreview /></button>
<dialog id={`my_modal_${session._id}`} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update Role</h3>
<div className='flex items-center'>
<select  className='p-4 border border-blue-600' onChange={(e) =>setSelestatus(e.target.value)} name="role" id="cars">
    <option value="reject">reject</option>
    <option value="approve">approve</option>
   

  </select>
</div>
  
    <div className="modal-action">
        <div>
       
        </div>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={()=>handlerole(session._id)} className="btn btn-ghost btn-xs">Updaterole</button>
      </form>
    </div>
  </div>
</dialog>
{/* end modal */}
                
                
            
              <FaCloudUploadAlt />
              </td>
            </tr>
)
         }
          </tbody>
        </table>
      </div>
    );
};

export default Allstudysession;