import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiousPublic from '../../Shared/useAxiousPublic';
import { AuthContext } from '../../Authprovider/AuthProvider';
import { FaCodePullRequest } from 'react-icons/fa6';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Allcreatedsession = () => {
const {user}=useContext(AuthContext)
  const axiousPublic=useAxiousPublic()
  const {data:sessions=[],isLoading} = useQuery({
     queryKey: ['session'],
      queryFn: async()=>{
        const res= await axiousPublic.get(`/allsession/${user.email}`)
        return res.data
      }
               
     })
     if (isLoading) {
      return <div className="loading loading-ring loading-lg"></div>;
    }
    // "sessionTitle": "Aut est ea tempora p",
    //     "tutorName": "shohidul Islam",
    //     "tutorEmail": "shohidulislamsifat2003@gmail.com",
    //     "tutorphoto": "https://lh3.googleusercontent.com/a/ACg8ocKwCVTG4HAdwcleGmH8otwZv1YD0A_NJiCBJWO1kUicxeOvEqMbdw=s96-c",
    //     "sessionDescription": "Sed nemo error conse",
    //     "registrationStartDate": "1980-04-10",
    //     "registrationEndDate": "2008-02-17",
    //     "classStartDate": "1972-03-16",
    //     "classEndDate": "1973-04-30",
    //     "sessionDuration": "75",
    //     "registrationFee": "0",
    //     "status": "Pending"
     console.log(sessions)
     const handleRequest=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
console.log(id)
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });
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
              <td className='flex gap-2 '><FaCodePullRequest onClick={()=>handleRequest(session._id)}  />
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

export default Allcreatedsession;