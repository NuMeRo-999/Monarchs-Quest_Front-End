import { BASE_URL } from '../api/apiRequest'

const PlayerSection = ({heroe}) => {

  console.log(heroe)
  return (
    <div className="flex justify-center items-center gap-4 bg-[url('/src/assets/images/abilities-border.png')] bg-cover h-44 w-80 p-8">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="flex items-center gap-2 text-center font-bold uppercase">
              <img src="/src/assets/icons/level-icon.png" alt="" /> Lvl {heroe?.level}
            </div>
            <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover p-2 flex justify-center items-center">
              <div alt="" className=" bg-[length:800px_300px] bg-no-repeat bg-left-top p-8"
              style={{ backgroundImage: `url('${BASE_URL}/img/${heroe?.imageFilename}')`,
              backgroundPosition: "-35px 0px"
               }}>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <img src="/src/assets/icons/heart-icon.png" alt="" />
              <p className="text-lg">{heroe?.healthPoints}/{heroe?.maxHealthPoints} HP</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/src/assets/icons/shield-icon.png" alt="" />
              <p className="text-lg">{heroe?.defense} DEF</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/src/assets/icons/attack-icon.png" alt="" />
              <p className="text-lg">{heroe?.attackPower} ATK</p>
            </div>
            <div className="flex items-center gap-1">
              <img src="/src/assets/icons/critick-icon-2.png" alt="" />
              <p className="text-lg">{heroe?.criticalStrikeChance}% CRIT</p>
            </div>
          </div>
        </div>
  );
}

export default PlayerSection;
