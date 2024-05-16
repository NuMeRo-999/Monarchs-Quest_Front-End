import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getAmuletEquiped, getSaveSlot, getWeaponsEquiped } from "../api/apiRequest";
import Loading from "../components/Loading";
import Heroe from "../components/Heroe";
import Enemies from "../components/Enemies";
import { getWithAuth } from "../api/api";

const GamePage = () => {
  const { gameId } = useParams();

  const [abilities, setAbilities] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [amulet, setAmulet] = useState([]);
  const [saves, setSaves] = useState([]);
  const [heroe, setHeroe] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedEnemy, setSelectedEnemy] = useState(null);
  const [isAttacking, setIsAttacking] = useState(false)

  useEffect(() => {
    Promise.all([getSaveSlot(gameId), getWeaponsEquiped(), getAmuletEquiped()])
      .then(([saveData, weaponsData, amuletData]) => {
        setSaves(saveData);
        setAbilities(saveData.stage[0].heroes[0].abilities);
        setHeroe(saveData.stage[0].heroes[0]);
        setEnemies(saveData.stage[0].enemies);
        setWeapons(weaponsData);
        setAmulet(amuletData);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const attackHeroe = async () => {
      if (selectedSkill && selectedEnemy) {
        try {
          setIsAttacking(true);
          console.log(isAttacking);
          await getWithAuth(`/heroe/attack/${heroe.id}/${selectedEnemy}/${selectedSkill}`);
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setSelectedSkill(null);
          setSelectedEnemy(null);
          setIsAttacking(false);
          console.log(isAttacking);
        }
      }
    };

    attackHeroe();
  }, [selectedSkill, selectedEnemy]);

  return (
    <>
      {loading ? (
        <>
          <div className="bg-auto font-pixel size-screen bg-gradient">
            <div className=" bg-[url('/src/assets/images/background.png')] bg-[length:150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
              <div className="h-screen w-screen font-pixelify flex justify-center items-center">
                <Loading />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header saves={saves} />
          <div className="bg-[url(/src/assets/images/game-background.png)] bg-cover h-[57.5vh]">
            <Heroe heroe={heroe} weapons={weapons} isAttacking={isAttacking}/>
            <Enemies enemies={enemies} setSelectedEnemy={setSelectedEnemy}/>
          </div>
          <Footer abilities={abilities} heroe={heroe} weapons={weapons} amulet={amulet} setSelectedSkill={setSelectedSkill} selectedSkill={selectedSkill}/>
        </>
      )}
    </>
  );
};

export default GamePage;
