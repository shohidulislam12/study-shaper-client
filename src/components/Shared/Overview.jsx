import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import useAxiousSecure from "./useAxiousSecure";

const Overview = () => {

    const [stats, setStats] = useState({ totalUsers: 0, totalOrders: 0, totalRevenue: 0,totalOrder:0 });
const axiousSecure=useAxiousSecure()
    useEffect(() => {
        axiousSecure.get("/dashboard-stats")
            .then(res => setStats(res.data))
            .catch(err => console.error("Error fetching stats:", err));
    }, []);

    const pieData = [
        { name: "Users", value: stats.totalUsers },
        { name: "Orders", value: stats.totalOrder },
        { name: "Revenue", value: stats.totalRevenue }
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

    return (
        <div className="max-w-6xl mx-auto my-4 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">Dashboard Overview</h2>
            
            {/* Stats for admin  */}
            <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-blue-500 text-white rounded-lg">
                    <h3 className="text-xl font-semibold">Total Users</h3>
                    <p className="text-2xl">{stats.totalUsers}</p>
                </div>
                <div className="p-4 bg-green-500 text-white rounded-lg">
                    <h3 className="text-xl font-semibold">Total session</h3>
                    <p className="text-2xl">{stats.totalsession}</p>
                </div>
                <div className="p-4 bg-yellow-500 text-white rounded-lg">
                    <h3 className="text-xl font-semibold">Total Revenue</h3>
                    <p className="text-2xl">${stats.totalRevenue}</p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 gap-6 mt-10">
                {/* Bar Chart */}
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-semibold text-center mb-4">Order & Revenue Stats</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={[stats]}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="totalOrders" fill="#8884d8" />
                            <Bar dataKey="totalRevenue" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-semibold text-center mb-4">Users vs Orders vs Revenue</h3>
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

export default Overview;
