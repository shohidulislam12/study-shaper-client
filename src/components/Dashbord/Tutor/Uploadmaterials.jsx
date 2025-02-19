import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Uploadmaterials = () => {
  const { user } = useContext(AuthContext);
  const [status, setSelestatus] = useState("pending");
  const [amount, setAmount] = useState("");
  const axiousPublic = useAxiousPublic();
  const { data: sessions = [], isLoading,refetch } = useQuery({
    queryKey: ["session",user],
    queryFn: async () => {
      const res = await axiousPublic.get(`/allsession/${user.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <div className="loading loading-ring loading-lg"></div>;
  }
const approve=sessions.filter((session)=>session.status==='approve')
//console.log(approve)
 
  const handlestatus = (id) => {
    if (!setSelestatus) {
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
    
        axiousPublic
          .patch(`material/${id}`, {
            status: status,
          })
          .then((res) => {
            refetch();
           
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
   <div className=" dark:bg-black   dark:text-white">

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
          {approve.map((session, i) => (
            <tr key={session._id}>
              <th>{i + 1}</th>
              <td>{session.sessionTitle}</td>
              <td>{session.registrationFee}</td>
              <td>{session.status}</td>
              <td className="flex gap-2 ">
                

              <NavLink to={`material/${session._id}`}>
              <FaCloudUploadAlt />
              </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default Uploadmaterials;
