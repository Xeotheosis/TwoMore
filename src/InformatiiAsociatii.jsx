import React from "react";

const InformatiiAsociatii = () => {
  return (
    <section className="font-bold cursor-pointer group transition-all delay-100 grid grid-cols-2 xl:grid xl:grid-rows-2 xl:grid-cols-3 gap-3 group">
      <a
        href="#"
        className="flex p-8 lg:flex-row justify-center items-center shadow-md rounded-md gap-4 h-full w-full col-span-2 lg:col-span-3  bg-indigo-200">
        <i class="bx bxs-info-circle text-4xl"></i>
        <div className="">
          <h1 className="poppins text-3xl xl:text-2xl tracking-widest 2xl:text-4xl">
            Informatii
          </h1>
        </div>
      </a>
      <a
        href="#"
        className="menu-item 2xl:text-xl">
        Editare
        <i class="fa-solid fa-highlighter text-blue-400"></i>
      </a>
      <a
        href="#"
        className="menu-item text-lg 2xl:text-xl">
        Preturi
        <i class="fa-solid fa-hand-holding-dollar text-green-800 text-xl"></i>
      </a>
      <a
        href="#"
        className="col-span-2 lg:col-span-1 menu-item 2xl:text-xl">
        Cheltuieli<i class="fa-solid fa-sack-dollar text-xl text-green-800"></i>{" "}
      </a>
    </section>
  );
};

export default InformatiiAsociatii;
