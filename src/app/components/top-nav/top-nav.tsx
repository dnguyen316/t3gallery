import React from "react";

const TopNav = () => {
  return (
    <div className="mb-10 border-b-[2px] px-8 py-3">
      <div className="flex items-center">
        <h2 className="mr-6 min-w-10 text-2xl font-bold">
          upload<span className="text-primary">thing</span>
        </h2>
        <span className="text-[50px] font-thin text-gray-400">/</span>
      </div>
    </div>
  );
};

export default TopNav;
