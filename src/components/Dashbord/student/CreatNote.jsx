import React, { useContext } from 'react';
import { AuthContext } from '../../Authprovider/AuthProvider';
import { toast } from 'react-toastify';
import useAxiousPublic from '../../Shared/useAxiousPublic';
import { useNavigate } from 'react-router-dom';

const CreatNote = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user's info
const axiousPublic=useAxiousPublic()
const navigate=useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    // Get form data
    const email = user?.email;
    const title = form.title.value;
    const description = form.description.value;

    const noteData = { email, title, description };
    
  const {data}=await axiousPublic.post('/creatnote',noteData)

if(data.acknowledged){
  navigate('/dashbord/personalnotes')
  toast.success('note created  sucess')
}
 
  }

  return (
<div className=' dark:bg-black  pt-10 dark:text-white min-h-screen '>

<div className="max-w-md mx-auto p-6 py-5 dark:bg-gray-500 dark:text-white  bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email (Read-Only) */}
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white  ">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={user?.email || ''}
            readOnly
            className="input dark:text-black input-bordered w-full"
          />
        </div>

        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter note title"
            className="input dark:text-black input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Enter note description"
            className="textarea dark:text-black textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Create Note
          </button>
        </div>
      </form>
    </div>
</div>
  );
};

export default CreatNote;
