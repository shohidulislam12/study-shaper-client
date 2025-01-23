import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import useAxiousSecure from "../../Shared/useAxiousSecure";

const Allcreatedsession = () => {
  const { user } = useContext(AuthContext);
  const [status, setSelestatus] = useState("pending");
  const [amount, setAmount] = useState("");
  const axiousPublic = useAxiousPublic();
  const axiousSecure=useAxiousSecure()
  const { data: sessions = [], isLoading,refetch } = useQuery({
    queryKey: ["session",user],
    queryFn: async () => {
      const res = await axiousSecure.get(`/allsession/${user.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <div className="loading loading-ring loading-lg"></div>;
  }

 
  const handlestatus = (id) => {
    if (!setSelestatus) {
      Swal.fire("Error", "Please select a role!", "error");
      return;
    }
  
    Swal.fire({
      title: "Are you sure?",
   
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Do It!",
    }).then((result) => {
      if (result.isConfirmed) {
    
        axiousSecure
          .patch(`/updatestatus/${id}`, {
            status: status,
          })
          .then((res) => {
            refetch();
            toast.success("role updated sucessfully");
           // console.log(res.data);
          });
        Swal.fire({
          title: "Seccess!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
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
          {sessions.map((session, i) => (
            <tr key={session._id}>
              <th>{i + 1}</th>
              <td>{session.sessionTitle}</td>
              <td>{session.registrationFee}</td>
              <td>{session.status}</td>
              <td className="flex gap-2 ">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
               {session.status==='reject'&& <button
                  className="btn"
                  onClick={() =>
                    document
                      .getElementById(`my_modal_${session._id}`)
                      .showModal()
                  }
                >
                  <FaCodePullRequest />
                </button>}
                <dialog
                  id={`my_modal_${session._id}`}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Sent Requist Again </h3>

                    <div className="flex justify-center flex-col items-center">
                      <div className="flex justify-center gap-5 items-center ">
                        {/* <span className="text-2xl ">Status : </span> */}
                        <select
                          className="p-4  border border-blue-600"
                          onChange={(e) => setSelestatus(e.target.value)}
                          name="role"
                          id="cars"
                          value={status}
                        >
                          <option value="pending" >resent requist for Aprove</option>
                     
                        </select>
                      </div>
                    </div>

                    <div className="modal-action">
                      <div></div>
                      <form method="dialog">
                     
                        <button
                          onClick={() => handlestatus(session._id)}
                          className="btn btn-primary "
                        >
                          sent 
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
                {/* end modal */}
             {session.status=='reject'&&   <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Show resason </button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg"> Reject Reason:{session?.rejectreson}</h3>
    <p className="py-4">FeedBAck: <br />
    {session?.feedback}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
             </div>
              }
            {session.status=='approve'&&  <NavLink to={`material/${session._id}`}>
              <FaCloudUploadAlt />
              </NavLink>}
             
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allcreatedsession;
