import StudySessionCard from "./StudySessionCard";

const StudySession = () => {
    return (
        <div className="my-20">
            <h2 className="text-3xl text-center my-5 font-semibold">Available Session</h2>
            <div className="grid p-2 gap-5 grid-cols-1 md:grid-cols-3">
            <StudySessionCard></StudySessionCard>
            <StudySessionCard></StudySessionCard>
            <StudySessionCard></StudySessionCard>
            <StudySessionCard></StudySessionCard>
            <StudySessionCard></StudySessionCard>
            <StudySessionCard></StudySessionCard>
            <StudySessionCard></StudySessionCard>
            <StudySessionCard></StudySessionCard>
            </div>
        </div>
    );
};

export default StudySession;