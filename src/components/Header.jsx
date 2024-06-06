import { Link } from "react-router-dom";
import InventoryModal from "./InventoryModal";
import PlayAudio from "../utils/PlayAudio";

const Header = ({ saves, setHeroe, setAmulet, setWeapons, inventory, setInventory }) => {
  

  return (
    <div className="flex items-center justify-around bg-[url('/images/header-border.png')] bg-cover pb-[1.6rem]">
      <div className="p-2 pl-5 font-pixelify flex items-center justify-evenly gap-10">
        <div className="flex items-center gap-2">
          <img src="/icons/door-icon.png" alt="stage" className="size-8"/>
          <p className="text-2xl text-white">{saves && Array.isArray(saves.stage) && saves.stage.length > 0 && saves.stage[0].stage}</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/images/coin_05d.png" alt="money" />
          <p className="text-2xl text-white">{saves && typeof saves.money === 'number' ? saves.money : 'N/A'}</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/images/skull_01a.png" alt="kills" />
          <p className="text-2xl text-white">{saves && typeof saves.kills === 'number' ? saves.kills : 'N/A'}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 font-pixelify text-xl">
        <InventoryModal saves={saves} setHeroe={setHeroe} setWeapons={setWeapons} setAmulet={setAmulet} inventory={inventory} setInventory={setInventory}/>
        <Link
          to="/saves"
          className="flex justify-center items-center image-cursor leading-4 text-2xl bg-[url('/images/button.png')] bg-cover h-10 text-white w-52 text-center font-bold"
          onMouseEnter={() => PlayAudio("/sounds/Cursor1.ogg")}
          onClick={() => PlayAudio("/sounds/Select2.ogg")}
        >
          Salir
        </Link>
      </div>
    </div>
  );
};

export default Header;
