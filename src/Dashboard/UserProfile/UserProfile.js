import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const UserProfile = () => {
    const {user} = useContext(AuthContext);
    console.log('user form profile', user);
    const {data: userdata} = useQuery({
      queryKey: ["user", user],
      queryFn: async () => {
        const res = await fetch(
          `https://inventory-management-server-flame.vercel.app/user?email=${user}`
        );
        const data = await res.json();
        return data
      },
    });
    console.log('user data data data', userdata);
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <h3 className="text-center font-bold text-3xl mb-5">
            Welcome to Your Profile
          </h3>
          <div className="max-w-md  p-8 sm:flex sm:space-x-6 bg-secondary dark:bg-gray-900 dark:text-gray-100">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src={userdata?.image}
                alt=""
                className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  {userdata?.name}
                </h2>
                <span className="text-sm dark:text-gray-400 text-white">
                  Status: <span className="font-bold">Unverified</span>
                </span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span className="dark:text-gray-400 text-white">
                    {userdata?.email}
                  </span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className='text-white'>ID: </span>
                  <span className="dark:text-gray-400 text-white">
                    {userdata?._id}
                  </span>
                </span>
                <span className='btn btn-sm btn-primary text-white'>Edit</span>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default UserProfile;