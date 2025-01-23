import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { FaCloudUploadAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { VscPreview } from "react-icons/vsc";
import { FaTrash } from "react-icons/fa6";
import useAxiousSecure from "../../Shared/useAxiousSecure";
import { toast } from "react-toastify";

const Allstudysession = () => {
  const { user } = useContext(AuthContext);
  const axiousPublic = useAxiousPublic();
  const axiousSecure=useAxiousSecure()
  const [status, setSelestatus] = useState("pending");
  const [amount, setAmount] = useState('0');
  const [selectedOption, setSelectedOption] = useState("");
  const [rejectreson, setrejectreson] = useState("");
  const [feedback, setFeedback] = useState("");
useEffect(()=>{
  if(status!=='reject'){
    setrejectreson('N/A')
    setFeedback('N/A')
    }
},[status])

  const {
    data: sessions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const res = await axiousSecure.get(`/allsessionadmin`);
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="loading loading-ring loading-lg"></div>;
  }

  const handleCheckboxChange = (option) => {
    setSelectedOption(option); 
  };

  const handlestartus = (id) => {
    if (!status) {
      Swal.fire("Error", "Please select a status!", "error");
      return;
    }

 
    if ( status!=='reject' && !selectedOption) {
      Swal.fire("Error", "Please select Free or Paid!", "error");
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecure
          .patch(`/updatestatus/${id}`, {
            status,
            rejectreson:rejectreson,
            feedback:feedback,
            registrationFee:amount
          })
          .then((res) => {
            refetch();
        
            Swal.fire({
              title: "Updated!",
              text: "Session status updated successfully.",
              icon: "success",
            });
          });
      }
    });

  };
 
  //delete session 
  const handleDelete=async (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async(result) => {
      if (result.isConfirmed) {
       
        const {data}=await axiousSecure.delete(`/sessiondelete/${id}`)
     
            refetch();
            Swal.fire({
              title: "Updated!",
              text: "Session deletesuccessfully.",
              icon: "success",
            });
       
      }
    });
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* Table Head */}
        <thead>
          <tr>
            <th></th>
            <th>Session Title</th>
            <th>Registration Fee</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, i) => (
            <tr key={session._id}>
              <th>{i + 1}</th>
              <td>{session.sessionTitle}</td>
              <td>{session.registrationFee}</td>
              <td>{session.status}</td>
              <td className="flex items-center  gap-2">
        

         {session.status === 'pending'  &&  <button
                  className="btn"
                  onClick={() =>
                    document
                      .getElementById(`my_modal_${session._id}`)
                      .showModal()
                  }
                >
                  <VscPreview />
                </button>}
                <dialog
                  id={`my_modal_${session._id}`}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Approve or Reject</h3>
                    {/* Free or Paid */}
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <h2>Session Free or Paid</h2>
                        <div className="flex flex-row gap-5 items-center">
                          <label className="flex items-center gap-2">
                            <span className="label-text">Free</span>
                            <input
                              type="checkbox"
                              className="checkbox checkbox-primary"
                              checked={selectedOption === "free"}
                              onChange={() => handleCheckboxChange("free")}
                            />
                          </label>
                          <label className="flex items-center gap-2">
                            <span className="label-text">Paid</span>
                            <input
                              type="checkbox"
                              className="checkbox checkbox-primary"
                              checked={selectedOption === "paid"}
                              onChange={() => handleCheckboxChange("paid")}
                            />
                          </label>
                        </div>
                      </label>
                    </div>
                    {/* Amount Input */}
                    {selectedOption === "paid" && (
                      <div className="mt-4">
                        <label className="block text-sm mb-1">Amount:</label>
                        <input
                          type="number"
                          className="input input-bordered w-full"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="Enter amount"
                          min="0"
                        />
                      </div>
                    )}
                    {/* Status Dropdown */}
                    <div className="flex justify-center flex-col items-center mt-4">
                      <div className="flex justify-center gap-5 items-center">
                        <span className="text-2xl">Status:</span>
                        <select
                          className="p-4 border border-blue-600"
                          onChange={(e) => setSelestatus(e.target.value)}
                          value={status}
                        >
                          <option value="pending">Pending</option>
                          <option value="reject">Reject</option>
                          <option value="approve">Approve</option>
                        </select>
                      </div>
                    </div>
                    { status==='reject'&&
                       <form className="card-body">
                       <div className="form-control">
                         <label className="label">
                           <span className="label-text">Reject reson</span>
                         </label>
                         <input type="text" onChange={(e)=>setrejectreson(e.target.value)}  placeholder="write reject reason" className="input input-bordered" required />
                       </div>
                       <div className="form-control">
                         <label className="label">
                           <span className="label-text">Feedback</span>
                         </label>
                         <input type="text" onChange={(e)=>setFeedback(e.target.value)}  placeholder="write reject reason" className="input input-bordered" required />
                       </div>
                       
                     </form>
                    }
                    {/* Modal Actions */}
                    <div className="modal-action">
                      <form method="dialog">
                        <button
                          onClick={() => handlestartus(session._id)}
                          className="btn btn-primary "
                        >
                          Ok
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
               {session.status == 'approve' && <FaTrash  onClick={()=>{
                  handleDelete(session._id)
                }} className={`text-red-500 `}></FaTrash>}
                        {session.status == 'approve'&& <button
                  className={`text-red-500 `}
                  onClick={() =>
                    document
                      .getElementById(`my_modal_${session._id}`)
                      .showModal()
                  }
                >
                  <FaEdit className="text-green-600" />
                </button>}
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allstudysession;
