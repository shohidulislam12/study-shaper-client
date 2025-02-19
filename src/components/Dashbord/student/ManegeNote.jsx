import React, { useContext } from 'react';
import useAxiousPublic from '../../Shared/useAxiousPublic';
import { AuthContext } from '../../Authprovider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { all } from 'axios';
import StudentNoteCard from './StudentNoteCard';
import Swal from 'sweetalert2';
import useAxiousSecure from '../../Shared/useAxiousSecure';


const ManegeNote = () => {
    const {user}=useContext(AuthContext)
    const axiousPublic=useAxiousPublic()
    const axiousSecure=useAxiousSecure()
    const {data:allnotes=[],isLoading,refetch} = useQuery({
        queryKey: ['allnotes',user],
         queryFn: async()=>{
           const res= await axiousSecure.get(`/getnote/${user.email}`)
           return res.data
         }
                  
        })
        if (isLoading) {
         return <div className="loading loading-ring loading-lg"></div>;
       }
 
//delete note 
const handledelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
        
            const {data}=await axiousPublic.delete(`/deletenote/${id}`)
          
            if(data.acknowledged){
                refetch()
     Swal.fire({
            title: "Deleted!",
            text: "Your note has been deleted.",
            icon: "success"
          });
            }
     
        }
      });
}
    return (
       <>{ allnotes.length>0?
        <div className=' dark:bg-black md:p-4 p-2 min-h-screen dark:text-white'>
           {allnotes.map((note,i)=>
            <StudentNoteCard handledelete={handledelete} note={note} key={note._id}></StudentNoteCard>
           )}
        </div>:<p className='text-3xl dark:text-white '>
          No note Available </p>}</>
    );
};

export default ManegeNote;