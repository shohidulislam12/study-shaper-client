

const StudySessionCard = () => {
    return (
        <div className="card bg-base-100 border border-gray-200 shadow-lg rounded-lg overflow-hidden group transition-transform transform ">
        <figure className="overflow-hidden relative">
            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gray-800 font-bold text-sm">Sale</span>
            </div>
        </figure>
        <div className="card-body py-4 px-5 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 transition-all group-hover:text-indigo-600">
                Stylish Shoes!
            </h2>
            <p className="text-gray-500 text-sm mb-4 transition-all group-hover:text-gray-700">
                A quick brown fox jumps over the lazy dog. Choose your shoes!
            </p>
            <div className="card-actions">
                <button className="btn bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
    );
};

export default StudySessionCard;
