import React from "react";

import HomeRet from "../../assets/HomeRet.png";
import HomeCirc from "../../assets/HomeCirc.png";
import HomeClareador from "../../assets/HomeClareador.png";

import MemoryBot from "../../assets/MemoryBot.png";

export function Home() {
  return (
    <main>
      <div
        className="h-110 relative"
        style={{ backgroundImage: `url(${HomeRet})` }}
      >
        <img
          src={HomeCirc}
          alt="Decorative Circle"
          className="right-3 w-55.3125 h-26.7525 mt-45 absolute"
        />

        <img
          src={HomeClareador}
          alt=""
          className="right-0 w-60 h-25 mt-59 absolute rotate-170"
        />

        <img
          src={MemoryBot}
          alt="Mobile Memory Bot"
          className="right-5 w-50 h-80 mt-25 absolute drop-shadow-2xl"
        />
      </div>
    </main>
  );
}
