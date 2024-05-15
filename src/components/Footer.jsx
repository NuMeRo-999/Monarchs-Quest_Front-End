import AbilitiesSection from "./AbilitiesSection";
import PlayerSection from "./PlayerSection";
import WeaponsSection from "./WeaponsSection";
import AmuletoSection from "./AmuletoSection";

const Footer = ({ abilities, heroe, weapons, amulet, setSelectedSkill }) => {
  

  return (
    <div className="flex justify-center gap-10 items-center font-pixelify bg-[url('/src/assets/images/footer-border.png')] bg-cover p-2 pt-7 text-white">
      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Habilidades</div>
          <AbilitiesSection abilities={abilities} setSelectedSkill={setSelectedSkill}/>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Armas</div>
        <WeaponsSection weapons={weapons}/>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Amuleto</div>
        <AmuletoSection amulet={amulet}/>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Personaje</div>
          <PlayerSection heroe={heroe}/>
      </div>
    </div>
  );
};

export default Footer;
