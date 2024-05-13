import { useEffect, useState } from "react";
import { BASE_URL, getSaveSlot } from "../api/apiRequest";
import AbilitiesSection from "./AbilitiesSection";
import PlayerSection from "./PlayerSection";
import WeaponsSection from "./WeaponsSection";
import AmuletoSection from "./AmuletoSection";

const Footer = ({ saveSlotId }) => {
  const [saves, setSaves] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [heroe, setHeroe] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getSaveSlot(saveSlotId)
      .then((data) => {
        setSaves(data);
        setAbilities(data.stage[0].heroes[0].abilities);
        setHeroe(data.stage[0].heroes[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(heroe)

  return (
    <div className="flex justify-center gap-10 items-center font-pixelify bg-[url('/src/assets/images/footer-border.png')] bg-cover p-2 pt-7 text-white">
      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Habilidades</div>
          <AbilitiesSection abilities={abilities}/>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Armas</div>
        <WeaponsSection/>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Amuleto</div>
        <AmuletoSection/>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Personaje</div>
          <PlayerSection heroe={heroe}/>
      </div>
    </div>
  );
};

export default Footer;
