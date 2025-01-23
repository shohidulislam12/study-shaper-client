

const TutorCard = ({tutor}) => {

    return (
     
            <div className="card bg-base-100 shadow-md group   hover:shadow-lg rounded-lg overflow-hidden transform max-w-xs mx-auto">
            <figure className="relative group">
                <img
                    src={tutor.photoURL}
                    alt={tutor.name}
                    className="object-cover duration-300 group-hover:scale-110  w-full h-48"
                />
            </figure>
            <div className="card-body text-center p-4">
                <h3 className="text-xl font-semibold text-indigo-600">{tutor.name}</h3>
                <p className="text-gray-500 text-sm"> Email: {'   ' }{tutor.email}</p>
               
             
            </div>

        </div>
    );
};

export default TutorCard;