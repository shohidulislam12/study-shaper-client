import { NavLink } from "react-router-dom";


const StudentNoteCard = ({note,handledelete}) => {

    return (
        <div className="card bg-white shadow-lg border rounded-lg p-4">
        {/* Note Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
          <button
          onClick={()=>handledelete(note._id)}
            className="btn btn-warning btn-sm"
            
          >
            Delete
          </button>
        </div>
  
        {/* Note Description */}
        <p className="text-gray-600 text-sm mb-4">{note.description}</p>
  
        {/* Note Footer */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">{note.email}</span>
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