import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { FaCodePullRequest } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const Booked = () => {
const {user}=useContext(AuthContext)
    const axiousPublic=useAxiousPublic()
    const {data:booked=[],isLoading,refetch} = useQuery({
        queryKey: ['booked'],
         queryFn: async()=>{
           const res= await axiousPublic.get(`/bookingdata/${user.email}`)
           return res.data
         }
                  
        })
        if (isLoading) {
         return <div className="loading loading-ring loading-lg"></div>;
       }
console.log(booked)

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Tutor</th>
              <th>Session Inf</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          {
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
                  <div className="text-sm opacity-50">{book.TutorEmail }</div>
                </div>
              </div>
            </td>
            <td>
              {book.sessionTitle}
              <br />
              <span className="badge badge-ghost badge-sm">{book.transitionId==='N/A'?'free':`${book.transitionId}`}</span>
            </td>
            <td>Purple</td>
            <th>
              <NavLink to={`/sessiondetails/${book.sessionId
}`} className="btn btn-primary">details</NavLink>
            </th>
          </tr>)
          }
         

          </tbody>
      
        </table>
      </div>
    );
};

export default Booked;