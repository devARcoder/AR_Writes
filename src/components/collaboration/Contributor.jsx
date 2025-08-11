import React from "react";
import UsersList from "./UsersList";
import TopViewsUsers from "./TopViewsUsers";
const Contributor = () => {
    
  return (
    <>
      <div className="text-white flex flex-col  text-center px-6 lg:px-18">
        <div className="py-6 md:py-8 space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-t from-white/10 to-white bg-clip-text text-transparent">Expand your Network</h1>
          <p className="text-[15px] text-gray-300">People you may know based on your recent activity</p>
        </div>

        <TopViewsUsers />

        <UsersList/>
      </div>
    </>
  );
};

export default Contributor;
