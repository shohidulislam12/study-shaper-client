import React, { useContext, useState } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import useAxiousPublic from "../../Shared/useAxiousPublic";
import { toast } from "react-toastify";
import { photoURL } from "../../Shared/Sheared";
import useAxiousSecure from "../../Shared/useAxiousSecure";
import { useNavigate } from "react-router-dom";

const Creatsession = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const { user } = useContext(AuthContext);
  const axiousPublic = useAxiousPublic();
  const axiousSecure = useAxiousSecure();
  const currentDate = new Date();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const form = event.target;
    const thumbnelurl = await photoURL(photo);
    const sessionTitle = form.sessionTitle.value;
    const tutorName = form.tutorName.value;
    const tutorEmail = form.tutorEmail.value;
    const tutorphoto = user.photoURL;
    const sessionDescription = form.sessionDescription.value;
    const registrationStartDate = form.registrationStartDate.value;
    const registrationEndDate = form.registrationEndDate.value;
    const classStartDate = form.classStartDate.value;
    const classEndDate = form.classEndDate.value;
    const sessionDuration = form.sessionDuration.value;
    const registrationFee = form.registrationFee.value;
    const status = form.status.value;

    // Get form values
    const registrationStart = new Date(form.registrationStartDate.value);
    const registrationEnd = new Date(form.registrationEndDate.value);
    const classStart = new Date(form.classStartDate.value);
    const classEnd = new Date(form.classEndDate.value);

    // Validate date conditions
    if (registrationStart >= registrationEnd) {
      toast.error("Registration start date must be before the end date.");
      return;
    }

    if (registrationEnd >= classStart) {
      toast.error("Class start date must be after the registration end date.");
      return;
    }

    if (classStartDate >= classEndDate) {
      toast.error("Class end date must be after the class start date.");
      return;
    }
    if (classStart < currentDate) {
      toast.error("Class start date must be today or a future date.");
      return;
    }
    if (registrationStart < currentDate) {
      toast.error("Registration  start date must be tommorow a future date.");
      return;
    }

    const formData = {
      sessionTitle,
      tutorName,
      tutorEmail,
      tutorphoto,
      thumbnelurl,
      sessionDescription,
      registrationStartDate,
      registrationEndDate,
      classStartDate,
      classEndDate,
      sessionDuration,
      registrationFee,
      status,
    };
    //console.log(formData)
    //save data in database
    const { data } = await axiousSecure.post("/allsession", formData);
    if (data.insertedId) {
    navigate("/dashbord/createdsession");
      toast.success("Session Creat Sucess");
    } else toast.error("Sorr,there is an irror");
    // console.log(data)
  };

  return (
    <div className="dark:bg-black dark:text-white ">
      <div className="max-w-xl  dark:bg-gray-500  dark:text-white  mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Create Study Session</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Session Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text  dark:text-white">Session Title</span>
            </label>
            <input
              type="text"
              name="sessionTitle"
              placeholder="Enter session title"
              className="input dark:text-black input-bordered w-full"
              required
            />
          </div>

          {/* Tutor Name  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Tutor Name</span>
            </label>
            <input
              type="text"
              name="tutorName"
              value={user?.displayName || ""}
              readOnly
              className="input  dark:text-black input-bordered w-full"
            />
          </div>

          {/* Tutor Email (Read-Only) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white ">Tutor Email</span>
            </label>
            <input
              type="email"
              name="tutorEmail"
              value={user?.email || ""}
              readOnly
              className="input input-bordered dark:text-black w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">Session Thumbnel</span>
            </label>
            <input
              onChange={(e) => setPhoto(e.target.files[0])}
              type="file"
              name="photo"
              accept="images/*"
              className="file-input dark:text-black  file-input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          {/* Session Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Session Description</span>
            </label>
            <textarea
              name="sessionDescription"
              placeholder="Enter session description"
              className="textarea dark:text-black  textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Registration Start Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Registration Start Date</span>
            </label>
            <input
              type="date"
              name="registrationStartDate"
              className="input input-bordered dark:text-black w-full"
              required
            />
          </div>

          {/* Registration End Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Registration End Date</span>
            </label>
            <input
              type="date"
              name="registrationEndDate"
              className="input dark:text-black input-bordered w-full"
              required
            />
          </div>

          {/* Class Start Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white ">Class Start Date</span>
            </label>
            <input
              type="date"
              name="classStartDate"
              className="input input-bordered dark:text-black w-full"
              required
            /> 
          </div>

          {/* Class End Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Class End Date</span>
            </label>
            <input
              type="date"
              name="classEndDate"
              className="input input-bordered dark:text-black w-full"
              required
            />
          </div>

          {/* Session Duration */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Session Duration (in hours)</span>
            </label>
            <input
              type="number"
              name="sessionDuration"
              placeholder="Enter session duration"
              className="input dark:text-black input-bordered w-full"
              required
            />
          </div>

          {/* Registration Fee (Read-Only) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Registration Fee</span>
            </label>
            <input
              type="number"
              name="registrationFee"
              value="0"
              readOnly
              className="input dark:text-black input-bordered w-full"
            />
          </div>

          {/* Status (Read-Only) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white ">Status</span>
            </label>
            <input
              type="text"
              name="status"
              value="pending"
              readOnly
              className="input dark:text-black input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Create Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Creatsession;
