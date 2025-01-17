import React, { useContext } from 'react';
import { AuthContext } from '../../Authprovider/AuthProvider';


const Creatsession = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const form=event.target

    const sessionTitle=form.sessionTitle.value
    const tutorName=form.tutorName.value
    const tutorEmail=form.tutorEmail.value
    const tutorphoto=user.photoURL
    const sessionDescription=form.sessionDescription.value
    const registrationStartDate=form.registrationStartDate.value
    const registrationEndDate=form.registrationEndDate.value
    const classStartDate=form.classStartDate.value
    const classEndDate=form.classEndDate.value
    const sessionDuration=form.sessionDuration.value
    const registrationFee=form.registrationFee.value
    const status=form.status.value




    const formData={sessionTitle,tutorName,tutorEmail,tutorphoto,sessionDescription,registrationStartDate,registrationEndDate,classStartDate,classEndDate,sessionDuration,registrationFee,status}
    console.log(formData)
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Study Session</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Session Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Session Title</span>
          </label>
          <input
            type="text"
            name="sessionTitle"
            placeholder="Enter session title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Tutor Name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tutor Name</span>
          </label>
          <input
            type="text"
            name="tutorName"
            value={user?.displayName || ''}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Tutor Email (Read-Only) */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tutor Email</span>
          </label>
          <input
            type="email"
            name="tutorEmail"
            value={user?.email || ''}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Session Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Session Description</span>
          </label>
          <textarea
            name="sessionDescription"
            placeholder="Enter session description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Registration Start Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Registration Start Date</span>
          </label>
          <input
            type="date"
            name="registrationStartDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Registration End Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Registration End Date</span>
          </label>
          <input
            type="date"
            name="registrationEndDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Class Start Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Start Date</span>
          </label>
          <input
            type="date"
            name="classStartDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Class End Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class End Date</span>
          </label>
          <input
            type="date"
            name="classEndDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Session Duration */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Session Duration (in hours)</span>
          </label>
          <input
            type="number"
            name="sessionDuration"
            placeholder="Enter session duration"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Registration Fee (Read-Only) */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Registration Fee</span>
          </label>
          <input
            type="number"
            name="registrationFee"
            value="0"
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Status (Read-Only) */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input
            type="text"
            name="status"
            value="Pending"
            readOnly
            className="input input-bordered w-full"
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
  );
};

export default Creatsession;
