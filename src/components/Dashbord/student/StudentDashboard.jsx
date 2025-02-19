import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { AuthContext } from "../../Authprovider/AuthProvider";
import useAxiousSecure from "../../Shared/useAxiousSecure";

const StudentDashboard = () => {
    const axiousSecure=useAxiousSecure()
    const { user } = useContext(AuthContext); // Get logged-in user
    const [stats, setStats] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        axiousSecure.get(`/student-dashboard/${user.email}`)
            .then(res => setStats(res.data))
            .catch(err => console.error("Error fetching student dashboard data:", err));
    }, [user?.email]);

    const pieData = [
        { name: "Books", value: stats.bookCount },
        { name: "Notes", value: stats.noteCount }
    ];
console.log("studentverview",stats)
    const COLORS = ["#0088FE", "#FFBB28"];

    return (
       <div className="min-h-screen py-12  dark:bg-black   dark:text-white">

<div className="max-w-6xl mx-auto  p-6 bg-white dark:bg-gray-500 dark:text-white shadow-lg rounded-lg">
            <h2 className="text-3xl dark:text-white font-bold text-indigo-700 text-center mb-6"> Student Dashboard</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center">
                <div className="p-4 bg-blue-500 text-white rounded-lg">
                    <h3 className="text-xl font-semibold">Total Books</h3>
                    <p className="text-2xl">{stats.bookCount}</p>
                </div>
                <div className="p-4 bg-green-500 text-white rounded-lg">
                    <h3 className="text-xl font-semibold">Total Notes</h3>
                    <p className="text-2xl">{stats.noteCount}</p>
                </div>
            </div>

            {/* Charts */}
            <div className="mt-10 bg-gray-100  dark:bg-gray-600 dark:text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-center dark:text-white mb-4">Booked vs Notes</h3>
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
       </div>
    );
};

export default StudentDashboard;
