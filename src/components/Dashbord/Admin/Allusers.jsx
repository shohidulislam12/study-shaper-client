import React, { useState, useCallback } from 'react';
import useAxiousPublic from '../../Shared/useAxiousPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useAxiousSecure from '../../Shared/useAxiousSecure';
import debounce from 'lodash.debounce';

const AllUsers = () => {
  const axiousSecure = useAxiousSecure();
  const [selectedRole, setSelectedRole] = useState("");
  const [search, setSearch] = useState("");
  const [activeUser, setActiveUser] = useState(null); // State for modal management

  // Debounced search input handler
  const handleSearchChange = useCallback(
    debounce((value) => setSearch(value), 500), // Delay API call for 500ms
    []
  );

  // Fetch users based on search
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users', search],
    queryFn: async () => {
      const res = await axiousSecure.get(`/users?search=${search}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="loading loading-ring loading-lg"></div>;
  }

  // Update user role
  const handleRole = (user) => {
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
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecure.patch(`/updateuserole/${user.email}`, { role: selectedRole }).then(() => {
          refetch();
          toast.success("Role updated successfully");
          setActiveUser(null); // Close the modal
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      {/* Search Input */}
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            onChange={(e) => handleSearchChange(e.target.value)}
            className="grow"
            placeholder="Search by name or email"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* User Table */}
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Registration Fee</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <th>{i + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user.photoURL} alt="Avatar" />
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
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>
                <button
                  className="btn"
                  onClick={() => setActiveUser(user)} // Open modal
                >
                  {user.role}
                </button>
              </td>
              <th></th>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Role Update Modal */}
      {activeUser && (
        <dialog className="modal modal-bottom sm:modal-middle" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Role</h3>
            <div className="flex items-center gap-4">
              <select
                className="p-4 border border-blue-600"
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="modal-action">
              <button
                onClick={() => handleRole(activeUser)}
                className="btn btn-primary"
              >
                Update Role
              </button>
              <button
                onClick={() => setActiveUser(null)}
                className="btn btn-ghost"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default AllUsers;
