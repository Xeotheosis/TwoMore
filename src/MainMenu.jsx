import React from "react";
import InformatiiAsociatii from "./InformatiiAsociatii";
import Apartamente from "./Apartamente";
import Cheltuieli from "./Cheltuieli";
import Rapoarte from "./Rapoarte";

const MainMenu = () => {
  return (
    <section className=" w-full h-full rounded-lg grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-4 lg:overflow-scroll xl:overflow-visible scroll-behavior: smooth;">
      <InformatiiAsociatii />
      <Cheltuieli />
      <Apartamente />
      <Rapoarte />
    </section>
  );
};

export default MainMenu;
