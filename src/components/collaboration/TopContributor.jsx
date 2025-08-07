import React from "react";
import { blogData } from "../../data/blogDataStore";
const TopContributor = () => {
    const TopContributor = blogData.slice(6, 10)
  return (
    <>
      <div className="text-white flex flex-col md:flex-row md:justify-between items-center text-center px-6">
        <div className="py-6">
          <h1 className="text-2xl font-bold">Meet Top Contributor Users</h1>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit
            numquam quasi.
          </p>
        </div>

        <div className="imgs grid grid-cols-2 gap-y-17 gap-x-7 pt-12">
          {TopContributor.map((user, i)=> (
            <div key={i} className="1 flex flex-col items-center">
            <div className="1 bg-green-500 w-40 h-40 rotate-12 rounded-lg relative z-0 "></div>
            <div className="absolute bg-white text-black w-40 h-40 rounded-lg z-10 flex flex-col items-center transform transition-all duration-1000 ease-in-out hover:scale-110">
              <img
                className="w-24 h-24 rounded-full object-cover -mt-12 border-4 border-white"
                src={user.author.avatar}
                alt="user1"
              />
              <h1 className="text-lg font-bold mt-1">{user.author.name}</h1>
              <h3 className="text-md text-green-500 font-bold line-clamp-2">
                {user.author.bio}
              </h3>
            </div>
          </div>
          ))}

          
        </div>
      </div>
    </>
  );
};

export default TopContributor;
