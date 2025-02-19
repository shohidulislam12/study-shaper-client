import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiousSecure from "../../Shared/useAxiousSecure";

const Allmaterials = () => {
  const { user } = useContext(AuthContext);
  const axiousPublic = useAxiousPublic();
  const axiousSecure = useAxiousSecure();
  const {
    data: materials = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["materials", user],
    queryFn: async () => {
      const res = await axiousPublic.get(`/allmaterial/${user.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <div className="loading loading-ring loading-lg"></div>;
  }
  //  console.log(materials)
  const handleDelete = (id) => {
    //
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //    console.log(id)
        const { data } = await axiousSecure.delete(`/deletematerial/${id}`);
        //   console.log(data)
        if (data.acknowledged) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className=" dark:bg-black  min-h-screen  dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-6 p-6">
        {materials.map((material, index) => (
          <div
            key={material._id}
            className="card shadow-lg dark:bg-gray-500 dark:text-white rounded-lg border border-gray-200 bg-white"
          >
            <div className="card-header p-4">
              <h3 className="text-lg font-bold mb-2">
                {material.sessionTitle}
              </h3>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Session ID:</span>{" "}
                {material.sessionId}
              </p>
            </div>
            <div className="flex h-36 overflow-scroll">
              {material.photolinkarray.map((link, i) => (
                <img className="" src={link} alt="" />
              ))}
            </div>

            {/* Links */}
            <div className="card-body p-4">
              <div className="mb-3">
                <h4 className="text-sm font-semibold mb-1">Resource Links:</h4>
                <div className="flex flex-col gap-1">
                  {material.linkarray.map((link, i) => (
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
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="card-footer p-4 flex justify-between items-center border-t border-gray-200">
              <NavLink
                to={`material/${material._id}`}
                className="btn btn-primary btn-sm"
              >
                <FaEdit className="mr-1" />
                Edit
              </NavLink>
              <button
                className="btn btn-outline dark:text-white btn-sm"
                onClick={() => handleDelete(material._id)}
              >
                <FaTrash className="mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allmaterials;
