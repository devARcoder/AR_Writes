import React, { useState, useEffect } from "react";
import { blogData } from "../../data/blogDataStore";
import { UserPlus, Clock } from "lucide-react";
import toast from "react-hot-toast";
import UsersListSkeleton from "../shared/common/loadings/UsersListSkeleton"; // Import the skeleton

const UsersList = () => {
  const [connections, setConnections] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleConnectClick = (userId, userName) => {
    if (connections[userId]) return;
    setConnections(prev => ({
      ...prev,
      [userId]: "pending"
    }));

    toast.success(`Connection request sent to ${userName}!`, {
      position: "top-right",
      duration: 4000,
    });
  };

  // Show skeleton while loading
  if (isLoading) {
    return <UsersListSkeleton />;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 lg:gap-y-6 gap-y-4">
        {blogData.map((users, i) => {
          const connectionStatus = connections[users.author.id] || "not-connected";
          
          return (
            <div className="flex justify-between items-center space-y-5 space-x-3 border-b border-gray-600 pt-4" key={i}>
              <div className="flex items-center space-x-2">
                <img className="w-12 h-12 rounded-full" src={users.author.avatar} alt="" />
                <div className="flex flex-col items-start">
                  <h1>{users.author.name}</h1>
                  <p className="text-start line-clamp-1 text-sm text-gray-300">
                    {users.author.technologies?.join(" | ")}
                  </p>
                </div>
              </div>

              <div 
                className={`flex items-center space-x-2 border px-2 py-1 rounded-xl cursor-pointer ${
                  connectionStatus === "pending" 
                    ? "bg-gray-700 text-gray-400" 
                    : "hover:bg-gray-800 transition-colors"
                }`}
                onClick={() => handleConnectClick(users.author.id, users.author.name)}
              >
                <span>
                  {connectionStatus === "pending" ? (
                    <Clock className="w-4 h-4" />
                  ) : (
                    <UserPlus className="w-4 h-4" />
                  )}
                </span>
                <button className="text-sm cursor-pointer">
                  {connectionStatus === "pending" ? "Pending" : "Connect"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsersList;