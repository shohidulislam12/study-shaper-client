import { NavLink } from "react-router-dom";


const StudentNoteCard = ({note,handledelete}) => {

    return (
        <div className="card py-2 my-2 dark:bg-gray-500 dark:text-white  bg-white shadow-lg border rounded-lg p-4">
        {/* Note Header */}
        <div className="flex justify-between dark:text-white items-center mb-4">
          <h3 className="text-lg font-semibold dark:text-white text-gray-800">{note.title}</h3>
          <button
          onClick={()=>handledelete(note._id)}
            className="btn btn-outline dark:text-white btn-sm"
            
          >
            Delete
          </button>
        </div>
  
        {/* Note Description */}
        <p className="text-gray-600 dark:text-white  text-sm mb-4">{note.description}</p>
  
        {/* Note Footer */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400 dark:text-white">{note.email}</span>
          <NavLink to={`note/${note._id}`}
            className="btn btn-sm btn-primary"
           
          >
            Edit
          </NavLink>
        </div>
      </div>
    );
};

export default StudentNoteCard;