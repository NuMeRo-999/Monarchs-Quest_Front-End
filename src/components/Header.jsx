import { useEffect, useState } from "react";
import { getUserSaveSlots } from "../api/apiRequest";
import { Link } from "react-router-dom";

const Header = ({gameId}) => {
  const [saves, setSaves] = useState([]);

  useEffect(() => {
    getUserSaveSlots()
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
          <img src="/src/assets/images/coin_05d.png" alt="" />
          <p className="text-2xl text-white">{saves && saves[gameId]?.money}</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/src/assets/images/skull_01a.png" alt="" />
          <p className="text-2xl text-white">{saves && saves[gameId]?.kills}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 font-pixelify text-xl">
        <button className="image-cursor leading-4 text-2xl bg-[url('/src/assets/images/button.png')] bg-cover h-10 text-white w-52 text-center pt-2 font-bold py-2 px-4">
          Estadisticas
        </button>
        <button className="image-cursor leading-4 text-2xl bg-[url('/src/assets/images/button.png')] bg-cover h-10 text-white w-52 text-center pt-2 font-bold py-2 px-4">
          Inventario
        </button>
        <Link to={-1} className="flex justify-center items-center image-cursor leading-4 text-2xl bg-[url('/src/assets/images/button.png')] bg-cover h-10 text-white w-52 text-center font-bold">
          Salir
        </Link>
      </div>
    </div>
  );
};

export default Header;
