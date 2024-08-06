import React from "react";

const MenuItem = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4  font-primary-color font-bold flex flex-col justify-between flex-1 shadow-md cursor-pointer xl:p-8 group hover:scale-95 transition-all delay-100 hover:bg-indigo-50">
      <div className="flex justify-center items-center gap-4 h-1/2 w-full">
        {icon}
      </div>
      <div>
        <h1 className="poppins text-2xl group-hover:opacity-100">{title}</h1>

        <p className="roboto text-lg opacity-50">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
