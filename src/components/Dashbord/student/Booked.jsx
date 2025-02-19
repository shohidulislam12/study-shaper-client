import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { FaCodePullRequest } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useAxiousSecure from "../../Shared/useAxiousSecure";


const Booked = () => {
const {user}=useContext(AuthContext)
    const axiousPublic=useAxiousPublic()
    const axiousSecure=useAxiousSecure()
    const {data:booked=[],isLoading,refetch} = useQuery({
        queryKey: ['booked',user?.email],
         queryFn: async()=>{
           const res= await axiousSecure.get(`/bookingdata/${user.email}`)
           return res.data
         }
                  
        })
        if (isLoading) {
         return <div className="loading loading-ring loading-lg"></div>;
       }
       console.log('book',booked)
//console.log(booked)

    return (
        <div className="overflow-x-auto  dark:bg-black   dark:text-white">
        <table className="table dark:text-white">
          {/* head */}
          <thead>
            <tr className="dark:text-white">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Tutor</th>
              <th>TransactionId</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          { booked.length>0&&
            booked.map((book,i)=>
              <tr key={book._id} >
            <th>
             {i+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={book.tutorphoto }
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{book.tutorName}</div>
                  <div>{book.sessionTitle}</div>
                  <div className="text-sm opacity-50">{book.TutorEmail }</div>
                  
            
              
                </div>
              </div>
            </td>
            <td>
              
              <span className="badge badge-ghost badge-sm">{book.transitionId==='N/A'?'free':`${book.transitionId}`}</span>
            </td>
            <td>Action</td>
            <th>
              <NavLink to={`/sessiondetails/${book.sessionId
}`} className="btn btn-primary">details</NavLink>
            </th>
          </tr>)
          }
         {
          !booked.length&& <p>No Booked Session Found</p>
         }

          </tbody>
      
        </table>
      </div>
    );
};

export default Booked;