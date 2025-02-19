import React, { useState } from 'react';
import useAxiousSecure from '../Shared/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const Community = () => {
    const axiousSecure = useAxiousSecure();

    const { data: users = [], isLoading, refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await axiousSecure.get(`/allusercollection`);
        return res.data;
      },
    });
  
    if (isLoading) {
      return <div className="loading loading-ring loading-lg"></div>;
    }
  


    return (
        <div className="min-h-screen dark:bg-black  bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Community</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white dark:bg-gray-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4">
              <img
                src={user?.photoURL|| 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                alt={user?.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600 dark:text-white ">{user.email}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 dark:text-white ">
                <span className="font-semibold">Role:</span> {user.role}
              </p>
              <p className="text-gray-700 dark:text-white ">
                <span className="font-semibold">Joined:</span>{' '}
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Community;