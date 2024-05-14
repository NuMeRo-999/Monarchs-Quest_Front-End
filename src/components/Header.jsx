import { useEffect, useState } from "react";
import { getSaveSlot } from "../api/apiRequest";
import { Link } from "react-router-dom";
import InventoryModal from "./InventoryModal";

const Header = ({ saves }) => {
  

  return (
    <div className="flex items-center justify-around bg-[url('/src/assets/images/header-border.png')] bg-cover pb-[1.6rem]">
      <div className="p-2 pl-5 font-pixelify flex items-center justify-evenly gap-10">
        <div className="flex items-center gap-2">
          <img src="/src/assets/icons/door-icon.png" alt="stage" className="size-8"/>
          <p className="text-2xl text-white">{saves && Array.isArray(saves.stage) && saves.stage.length > 0 && saves.stage[0].stage}</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/src/assets/images/coin_05d.png" alt="money" />
          <p className="text-2xl text-white">{saves && typeof saves.money === 'number' ? saves.money : 'N/A'}</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/src/assets/images/skull_01a.png" alt="kills" />
          <p className="text-2xl text-white">{saves && typeof saves.kills === 'number' ? saves.kills : 'N/A'}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 font-pixelify text-xl">
        <InventoryModal/>
        <Link
          to="/saves"
          className="flex justify-center items-center image-cursor leading-4 text-2xl bg-[url('/src/assets/images/button.png')] bg-cover h-10 text-white w-52 text-center font-bold"
        >
          Salir
        </Link>
      </div>
    </div>
  );
};

export default Header;
