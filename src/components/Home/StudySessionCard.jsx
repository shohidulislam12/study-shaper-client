import { NavLink } from "react-router-dom";


const StudySessionCard = ({session}) => {
    const date = new Date();
    const registrationStartDate=new Date(session.registrationStartDate)
  const disablebtn =date>registrationStartDate

    const {sessionTitle,thumbnelurl,sessionDescription}=session
    return (
        <div className="card bg-base-100 dark:bg-gray-600 border border-gray-200 shadow-lg rounded-lg overflow-hidden group transition-transform transform ">
        <figure className="overflow-hidden relative">
            <img
                src={thumbnelurl}
                alt={sessionTitle}
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gray-800 font-bold text-sm">{session.
registrationFee==='0'?'Free':`${session.registrationFee}$`}</span>
            </div>
        </figure>
        <div className="card-body py-4 px-5 text-center">
            <h2 className="text-2xl font-semibold dark:text-white text-gray-800 mb-2 transition-all group-hover:text-indigo-600">
               {sessionTitle}
            </h2>
            <p className="text-gray-500 dark:text-white text-sm mb-4 transition-all group-hover:text-gray-700">
               {sessionDescription}
            </p>
            <div className="card-actions flex justify-between">
                <NavLink to={`/sessiondetails/${session._id}`} className="btn bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    ReadMore
                </NavLink>
                <button className={` font-bold  ${!disablebtn?'text-green-600':'text-red-600'} btn-primary`}> { !disablebtn?'session: onging...':'session: closed'}</button>
            </div>
        </div>
    </div>
    );
};

export default StudySessionCard;
