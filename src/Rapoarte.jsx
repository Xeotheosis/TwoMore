import React from "react";

const Rapoarte = () => {
  return (
    <section className="font-bold grid grid-cols-2 group transition-all delay-100  lg:grid lg:grid-cols-3 gap-3">
      <a
        href="#"
        className="menu-item order-2">
        Afise
        <i class="fa-solid fa-chalkboard-user text-xl text-orange-300"></i>
      </a>

      <a
        href="#"
        className="menu-item order-3">
        Centralizator
      </a>
      <a
        href="#"
        className="menu-item order-4">
        Formulare
        <i class="fa-regular fa-rectangle-list text-xl text-indigo-500"></i>
      </a>
      <a
        href="#"
        className="flex justify-center p-8 items-center shadow-md rounded-md gap-4 h-full w-full col-span-2 lg:col-span-3 bg-indigo-200">
        <i class="bx bxs-file-pdf text-4xl"></i>
        <div className="">
          <h1 className="poppins text-3xl tracking-wider">Rapoarte</h1>
        </div>
      </a>
    </section>
  );
};

export default Rapoarte;
