import TutorCard from "./TutorCard";


const TutorSection = () => {
    return (
        <div className="my-20">
            <h2 className="text-3xl text-center my-5 font-semibold">Choose Your Tutor</h2>
            <div className="grid p-2 gap-5 grid-cols-1 md:grid-cols-3">
        <TutorCard></TutorCard>
            </div>
        </div>
    );
};

export default TutorSection;