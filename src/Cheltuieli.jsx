import { React, useState } from "react";

const Cheltuieli = () => {
  const [isWaterIconClicked, setWaterIconClicked] = useState(false);

  const toggleWaterMenu = (e) => {
    e.preventDefault();

    setWaterIconClicked((prev) => !prev);
  };
  return (
    <section className="font-bold cursor-pointer group transition-all delay-100 grid grid-cols-2 xl:grid  md:grid-cols-4 md:grid-rows-3 gap-3">
      <a
        onClick={toggleWaterMenu}
        href="#"
        className="relative order-2 lg:order-none menu-item">
        Apa
        <i class="fa-solid fa-faucet-drip text-xl text-blue-300"></i>
        <div
          className={` ${
            isWaterIconClicked ? "block opacity-100" : "hidden opacity-0"
          } z-10 absolute flex flex-col -top-35 bg-gray-50 shadow-lg right-0 gap-4 w-full translate-x-40 rounded-lg transition-opacity delay-100 md:-translate-x-40 lg:translate-x-40 xl:flex-row xl:justify-evenly xl:w-max xl:bottom-10 xl:translate-x-30`}>
          <a
            href="#"
            className="p-4 grid place-items-center border-b border-gray-300 xl:border-b-0">
            <i class="fa-solid fa-faucet text-red-500 text-xl"></i>
            Apa calda
          </a>
          <a
            href="#"
            className="p-4 grid place-items-center border-b border-gray-300 xl:border-b-0 xl:border-r xl:border-l ">
            <i class="fa-solid fa-faucet text-blue-300 text-xl"></i>
            Apa rece
          </a>
          <a
            href="#"
            className="p-4 rounded-md grid place-items-center">
            <i class="fa-solid fa-cloud-rain text-gray-800"></i>
            Apa pluviala
          </a>
        </div>
      </a>
      <a
        href="#"
        className="flex order-1 bg-indigo-200 items-center justify-center rounded-lg p-8 shadow-md gap-2 w-full col-span-2 md:col-span-3 row-span-2 ">
        <i class="bx bx-dollar-circle text-4xl"></i>
        <div>
          <h1 className="poppins text-3xl tracking-widest font-extrabold">
            Cheltuieli
          </h1>
        </div>
      </a>

      <a
        href="#"
        className="order-3 menu-item">
        Gaze
        <i class="fa-solid fa-fire-burner text-xl text-red-300"></i>
      </a>

      <a
        href="#"
        className="order-4 menu-item">
        Energie
        <i class="fa-solid fa-bolt text-xl text-yellow-300"></i>
      </a>

      <a
        href="#"
        className="order-5 menu-item">
        Alta factura
        <i class="fa-solid fa-file-invoice text-xl text-blue-400"></i>
      </a>
      <a
        href="#"
        className="order-6 menu-item">
        Service Lift
        <i class="fa-solid fa-cable-car text-xl text-green-800"></i>
      </a>
      <a
        href="#"
        className="order-7 menu-item">
        Alte cheltuieli
        <i class="fa-solid fa-cash-register text-xl"></i>
      </a>
    </section>
  );
};

export default Cheltuieli;
