import React from 'react';
import useAxiousPublic from '../../Shared/useAxiousPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Allusers = () => {
    const axiousPublic=useAxiousPublic()
    const [selectedRole, setSelectedRole] = useState("")
    const [search,setsearch]=useState('')
const {data:users=[],isLoading,refetch} = useQuery({
   queryKey: ['users',search],
    queryFn: async()=>{
      const res= await axiousPublic.get(`/users?search=${search}`)
      return res.data
    }
             
   })
   if (isLoading) {
    return <div className="loading loading-ring loading-lg"></div>;
  }
  console.log(search)
//update rule 
const handlerole=(user)=>{
    if (!selectedRole) {
        Swal.fire("Error", "Please select a role!", "error");
        return;
      }
     
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
            console.log(selectedRole)
          axiousPublic.patch(`/updateuserole/${user.email}`,{role:selectedRole})
          .then(res=>{
            refetch()
            toast.success('role updated sucessfully')
            console.log(res.data)
          })
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        }
      });
}




    return (
      <div className="overflow-x-auto">
        <div>
        <label className="input input-bordered flex items-center gap-2">
  <input type="text" onChange={(e)=>setsearch(e.target.value)} className="grow" placeholder="Search by name or email " />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
        </div>
             <table className="table table-zebra">
               {/* head */}
               <thead>
                 <tr>
                   <th></th>
                   <th>UserName</th>
                   <th>Rejistration fee</th>
                   <th>Status</th>
                   <th>Action</th>
     
                 </tr>
               </thead>
               <tbody>
              {
               users.map((user,i)=>  
                 <tr key={user._id}>
                  
        <th>
        {i+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.email}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        {/* <td>{user.role}</td> */}
        <td>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById(`my_modal_${user._id}`).showModal()}>{user.role}</button>
<dialog id={`my_modal_${user._id}`} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update Role</h3>
<div className='flex items-center'>
<select  className='p-4 border border-blue-600' onChange={(e) => setSelectedRole(e.target.value)} name="role" id="cars">
    <option value="student">Student</option>
    <option value="tutor">Tutor</option>
    <option value="administrator">Administrator</option>

  </select>
</div>
  
    <div className="modal-action">
        <div>
       
        </div>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={()=>handlerole(user)} className="btn btn-ghost btn-xs">Updaterole</button>
      </form>
    </div>
  </div>
</dialog>
{/* end modal */}
        </td>
        <th>
      
        </th>
      </tr>
     )
              }
               </tbody>
             </table>
           </div>
    );
};

export default Allusers;