import React, { useState } from "react";

const Header = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isSideBarExpanded, setSideBarExpanded] = useState(false);

  const menuItems = [
    {
      icon: "bx bxs-dashboard",
      label: "Acasa",
      href: "#",
    },
    {
      icon: "bx bxs-info-circle",
      label: "Info",
      href: "#",
    },
    { icon: "bx bx-dollar-circle", label: "Cheltuieli", href: "#Login.aspx" },
    { icon: "bx bxs-file-pdf", label: "Rapoarte", href: "#" },
    { icon: "bx bx-buildings", label: "Apartamente", href: "#" },
    { icon: "bx bxs-cog", label: "Setari", href: "#" },
  ];

  return (
    <aside className="h-fit w-full lg:h-full sticky top-0 z-20 lg:static lg:w-fit">
      <nav
        className={`h-full w-full flex flex-col gap-4 bg-slate-200 shadow-md transition-[width] lg:justify-between rounded-lg duration-300 ease-in-out lg:w-fit ${
          isSideBarExpanded ? "w-64" : "w-full rounded-lg"
        }`}>
        <div className="hidden lg:flex p-4 pb-2 justify-between items-center">
          <div className="flex gap-2 items-center text-xl transition-all px-3 border-b">
            <i className="bx bx-bar-chart-alt text-3xl"></i>
            <h1
              className={`font-bold text-2xl ${
                isSideBarExpanded ? "block" : "hidden"
              }`}>
              AsPropManager
            </h1>
          </div>
        </div>
        <ul
          className={`flex p-2 lg:flex-col gap-2 w-full lg:w-full lg:items-center lg:justify-center ${
            isSideBarExpanded ? "items-start" : "items-center"
          } lg:py-4`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveItem(index)}
              className={`relative group flex gap-4 items-center  p-2 ${
                isSideBarExpanded ? "" : "justify-center"
              } w-full font-medium rounded-md cursor-pointer transition-colors ${
                activeItem === index
                  ? "bg-slate-100"
                  : "hover:bg-slate-100 text-black"
              }`}>
              <a
                href={item.href}
                className="flex items-center gap-4">
                <i className={`${item.icon} text-3xl`}></i>
                <span
                  className={`text-lg ${
                    isSideBarExpanded ? "block" : "hidden"
                  }`}>
                  {item.label}
                </span>
                {activeItem === index && (
                  <div
                    className={`absolute right-0 top-2 w-2 h-2 rounded bg-indigo-400 ${
                      isSideBarExpanded ? "" : "block"
                    }`}></div>
                )}
                {!isSideBarExpanded && (
                  <div
                    className={`absolute z-50 left-full rounded-md px-2 py-1 bg-slate-100 text-black text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {item.label}
                  </div>
                )}
              </a>
            </li>
          ))}
          <li
            onClick={() => setSideBarExpanded((prev) => !prev)}
            className={`hidden lg:flex items-center w-full relative p-2 
              rounded-md  hover:bg-indigo-50 ${
                isSideBarExpanded ? "justify-end" : "justify-center"
              }`}>
            <i
              className={`bx bx-chevron-left-square text-3xl transition-transform ${
                isSideBarExpanded ? "" : "rotate-180"
              }`}></i>
          </li>
        </ul>
        <div
          className={`hidden border-t lg:flex p-3 ${
            isSideBarExpanded ? "" : "justify-center"
          }`}>
          <div className="bg-indigo-200 p-5 rounded-full"></div>
          <div
            className={`flex justify-between items-center w-52 ml-3 ${
              isSideBarExpanded ? "" : "hidden"
            }`}>
            <div className="leading-4">
              <h4 className="font-bold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Header;
