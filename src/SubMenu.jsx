import React from "react";
import ProgressBar from "./ProgressBar";
import MenuItem from "./MenuItem";

const SubMenu = () => {
  return (
    <section className="w-full h-full rounded-lg grid grid-cols-1 gap-2 md:grid md:grid-cols-2 xl:grid-cols-4  xl:gap-4">
      <ProgressBar />
      <MenuItem
        title="Apa"
        description="Informatii despre asociatie"
        icon={
          <i class="fa-solid fa-circle-info text-5xl xl:text-6xl opacity-80 group-hover:opacity-100"></i>
        }
      />
      <MenuItem
        title="Gaze"
        description="Informatii despre asociatie"
        icon={
          <i class="fa-solid fa-circle-info text-5xl xl:text-6xl opacity-80 group-hover:opacity-100"></i>
        }
      />
      <MenuItem
        title="Energie"
        description="Informatii despre asociatie"
        icon={
          <i class="fa-solid fa-circle-info text-5xl xl:text-6xl opacity-80 group-hover:opacity-100"></i>
        }
      />
      <MenuItem
        title="Lift"
        description="Informatii despre asociatie"
        icon={
          <i class="fa-solid fa-circle-info text-5xl xl:text-6xl opacity-80 group-hover:opacity-100"></i>
        }
      />
      <MenuItem
        title="Lift"
        description="Informatii despre asociatie"
        icon={
          <i class="fa-solid fa-circle-info text-5xl xl:text-6xl opacity-80 group-hover:opacity-100"></i>
        }
      />
      <MenuItem
        title="Lift"
        description="Informatii despre asociatie"
        icon={
          <i class="fa-solid fa-circle-info text-5xl xl:text-6xl opacity-80 group-hover:opacity-100"></i>
        }
      />
      <MenuItem
        title="Lift"
        description="Informatii despre asociatie"
        icon={
          <i class="fa-solid fa-circle-info text-5xl xl:text-6xl opacity-80 group-hover:opacity-100"></i>
        }
      />
      <MenuItem
        title="Lift"
        description="Informatii despre asociatie"
        icon={
          <i class="fa-solid fa-circle-info text-5xl xl:text-6xl opacity-80 group-hover:opacity-100"></i>
        }
      />
    </section>
  );
};

export default SubMenu;
