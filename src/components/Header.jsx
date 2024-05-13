import { useEffect, useState } from "react";
import { getSaveSlot } from "../api/apiRequest";
import { Link } from "react-router-dom";

const Header = ({ saveSlotId }) => {
  const [saves, setSaves] = useState([]);

  useEffect(() => {
    getSaveSlot(saveSlotId)
      .then((data) => {
        setSaves(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="flex items-center justify-around bg-[url('/src/assets/images/header-border.png')] bg-cover pb-[1.6rem]">
      <div className="p-2 pl-5 font-pixelify flex items-center justify-evenly gap-10">
        <div className="flex items-center gap-2">
          <img src="/src/assets/icons/door-icon.png" alt="" className="size-10"/>
          <p className="text-2xl text-white">{saves && Array.isArray(saves.stage) && saves.stage.length > 0 && saves.stage[0].stage}</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/src/assets/images/coin_05d.png" alt="" />
          <p className="text-2xl text-white">{saves && typeof saves.money === 'number' ? saves.money : 'N/A'}</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/src/assets/images/skull_01a.png" alt="" />
          <p className="text-2xl text-white">{saves && typeof saves.kills === 'number' ? saves.kills : 'N/A'}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 font-pixelify text-xl">
        <button className="image-cursor leading-4 text-2xl bg-[url('/src/assets/images/button.png')] bg-cover h-10 text-white w-52 text-center pt-2 font-bold py-2 px-4">
          Estadisticas
        </button>
        <button className="image-cursor leading-4 text-2xl bg-[url('/src/assets/images/button.png')] bg-cover h-10 text-white w-52 text-center pt-2 font-bold py-2 px-4">
          Inventario
        </button>
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
