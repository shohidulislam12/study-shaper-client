import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { AuthContext } from "../../Authprovider/AuthProvider";
import useAxiousSecure from "../../Shared/useAxiousSecure";


const TutorDashBord= () => {
    const { user } = useContext(AuthContext); 
    const axiousSecure=useAxiousSecure()
    const [stats, setStats] = useState({ sessionCount: 0, noteCount: 0, bookingCount: 0 });

    useEffect(() => {
        if (!user?.email) return;

        axiousSecure.get(`/tutor-dashboard/${user.email}`)
            .then(res => setStats(res.data))
            .catch(err => console.error("Error fetching tutor dashboard data:", err));
    }, [user?.email]);

    const pieData = [
        { name: "Created Sessions", value: stats.sessionCount },
        { name: "Provided Notes", value: stats.noteCount },
        { name: "Session Bookings", value: stats.bookingCount }
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

    return (
        <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6"> Tutor Dashboard</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-blue-500 text-white rounded-lg">
                    <h3 className="text-xl font-semibold">Created Sessions</h3>
                    <p className="text-2xl">{stats.sessionCount}</p>
                </div>
                <div className="p-4 bg-green-500 text-white rounded-lg">
                    <h3 className="text-xl font-semibold">Provided Notes</h3>
                    <p className="text-2xl">{stats.noteCount}</p>
                </div>
                <div className="p-4 bg-yellow-500 text-white rounded-lg">
                    <h3 className="text-xl font-semibold">Session Bookings</h3>
                    <p className="text-2xl">{stats.bookingCount}</p>
                </div>
            </div>

            {/* Charts */}
            <div className="mt-10 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-center mb-4">Sessions, Notes & Bookings</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                            {pieData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TutorDashBord;
