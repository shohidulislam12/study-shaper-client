

const TutorCard = () => {
    const tutor = {
        name: "John Doe",
        subject: "Mathematics",
        bio: "Experienced tutor with over 5 years of teaching Algebra, Calculus, and Geometry.",
        imageUrl: "https://i.ibb.co.com/Z6knsH8/images-1.jpg" // Replace with a tutor's image URL
    };
    return (
     
            <div className="card bg-base-100 shadow-md group   hover:shadow-lg rounded-lg overflow-hidden transform max-w-xs mx-auto">
            <figure className="relative group">
                <img
                    src={tutor.imageUrl}
                    alt={tutor.name}
                    className="object-cover duration-300 group-hover:scale-110  w-full h-48"
                />
            </figure>
            <div className="card-body text-center p-4">
                <h3 className="text-xl font-semibold text-indigo-600">{tutor.name}</h3>
                <p className="text-gray-500 text-sm">{tutor.subject}</p>
                <p className="text-gray-700 text-base mt-2">{tutor.bio}</p>
                <div className="card-actions mt-4">
                    <button className="btn btn-primary  w-full">Contact</button>
                </div>
            </div>

        </div>
    );
};

export default TutorCard;