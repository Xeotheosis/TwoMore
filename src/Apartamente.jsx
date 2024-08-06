import React from "react";

const Apartamente = () => {
  return (
    <section className="font-bold grid grid-cols-2 group transition-all delay-100  lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-3">
      <a
        href="#"
        className="menu-item order-2 lg:order-none">
        Consumuri
        <i class="fa-solid fa-chart-simple text-xl text-green-800"></i>
      </a>
      <a
        href="#"
        className="menu-item order-3 lg:order-none">
        Restante
        <i class="fa-solid fa-hourglass-half text-xl text-amber-800"></i>
      </a>
      <a
        href="#"
        className="menu-item order-6 lg:order-none">
        Setari
        <i className="bx bxs-cog text-xl"></i>
      </a>
      <a
        href="#"
        className="flex order-1 shadow-md justify-center items-center rounded-lg p-8 gap-4 h-full w-full col-span-2 lg:row-span-2 bg-indigo-200">
        <i class="bx bx-buildings text-4xl"></i>
        <div>
          <h1 className="poppins text-3xl tracking-wider group-hover:opacity-100">
            Apartamente
          </h1>
        </div>
      </a>
      <div className="menu-item order-4">
        Caldura <i class="fa-solid fa-fire text-xl text-red-500"></i>
      </div>
      <div className="menu-item order-5">Altele</div>
    </section>
  );
};

export default Apartamente;
