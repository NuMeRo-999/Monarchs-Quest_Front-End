import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  getAmuletEquiped,
  getSaveSlot,
  getWeaponsEquiped,
} from "../api/apiRequest";
import Loading from "../components/Loading";
import Heroe from "../components/Heroe";
import Enemies from "../components/Enemies";
import { getWithAuth } from "../api/api";
import WinStageModal from "../components/WinStageModal";
import LoseStageModal from "../components/LoseStageModal";
import { useAudio } from "../context/AudioContext";
import PlayAudio from "../utils/PlayAudio";

const GamePage = () => {
  const { gameId } = useParams();
  const { setShouldPlay } = useAudio();

  const [abilities, setAbilities] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [amulet, setAmulet] = useState([]);
  const [saves, setSaves] = useState([]);
  const [heroe, setHeroe] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedSkill, setSelectedSkill] = useState([]);
  const [selectedEnemy, setSelectedEnemy] = useState(null);
  const [isAttacking, setIsAttacking] = useState(false);

  const [areAllEnemiesDead, setAreAllEnemiesDead] = useState(false);
  const hasShownModalRef = useRef(false);

  useEffect(() => {
    const audio = new Audio("/src/assets/music/GameTheme.ogg");
    audio.loop = true;
    audio.volume = 0.5;
    
    setShouldPlay(false);
    audio.play();

    return () => {
      audio.pause();
      setShouldPlay(true);
    };
  }, []);

  useEffect(() => {
    Promise.all([
      getSaveSlot(gameId),
      getWeaponsEquiped(gameId),
      getAmuletEquiped(gameId),
    ])
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
  }, [gameId]);

  useEffect(() => {
    const attackHeroe = async () => {
      if (selectedSkill && selectedEnemy) {
        try {
          setIsAttacking(true);
          PlayAudio("/src/assets/sounds/sword-sound-2-36274.ogg");
          await getWithAuth(
            `/heroe/attack/${heroe.id}/${selectedEnemy}/${selectedSkill.id}`
          ).then((response) => {
            setEnemies(response.enemies);
            setSaves(response.saveSlot);
          });
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setSelectedSkill(null);
          setSelectedEnemy(null);
          setIsAttacking(false);
        }
      }
    };

    const buffHeroe = async () => {
      if (selectedSkill && !selectedEnemy && selectedSkill.type === "Buff") {
        PlayAudio("/src/assets/sounds/086161_pickups_shield_beltwav-81574.mp3");
        try {
          await getWithAuth(`/heroe/buff/${heroe.id}/${selectedSkill.id}`).then(
            (response) => {
              setHeroe(response.heroe);
              setSaves(response.saveSlot);
            }
          );
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setSelectedSkill(null);
          setIsAttacking(false);
        }
      }
    };

    const enemyAttack = async () => {
      if (saves?.stage?.[0]?.state === 2) {
        const attackingEnemies = enemies.filter((enemy) => enemy.state === 1);
        if (attackingEnemies.length > 0) {
          try {
            setIsAttacking(true);
            PlayAudio("/src/assets/sounds/strong-hit-36455.ogg");
            await getWithAuth(`/enemy/attack/${heroe.id}`).then((response) => {
              setHeroe(response.heroe);
              setSaves(response.saveSlot);
            });
          } catch (error) {
            console.error("Error:", error);
          } finally {
            setIsAttacking(false);
          }
        }
      }
    };

    enemyAttack();
    attackHeroe();
    buffHeroe();
  }, [selectedSkill, selectedEnemy, enemies, heroe.id, saves]);

  useEffect(() => {
    if (enemies.length > 0 && enemies.every((enemy) => enemy.state === 0)) {
      setAreAllEnemiesDead(true);
    } else {
      setAreAllEnemiesDead(false);
    }
  }, [enemies]);

  useEffect(() => {
    if (areAllEnemiesDead && !hasShownModalRef.current) {
      hasShownModalRef.current = true;
    }
  }, [areAllEnemiesDead]);

  return (
    <>
      {loading ? (
        <div className="bg-auto font-pixel size-screen bg-gradient">
          <div className=" bg-[url('/src/assets/images/background.png')] bg-[length:150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
            <div className="h-screen w-screen font-pixelify flex justify-center items-center">
              <Loading />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Header
            saves={saves}
            setHeroe={setHeroe}
            setWeapons={setWeapons}
            setAmulet={setAmulet}
            inventory={inventory}
            setInventory={setInventory}
          />
          <div className="bg-[url(/src/assets/images/game-background.png)] bg-cover h-[57.5vh]">
            <Heroe
              heroe={heroe}
              weapons={weapons}
              isAttacking={isAttacking}
              stageId={saves?.stage[0].state}
            />
            <Enemies
              enemies={enemies}
              selectedEnemy={selectedEnemy}
              setSelectedEnemy={setSelectedEnemy}
              isAttacking={isAttacking}
              stageId={saves?.stage[0].state}
            />
          </div>

          {heroe.healthPoints <= 0 && <LoseStageModal />}

          {areAllEnemiesDead && (
            <WinStageModal
              setSaves={setSaves}
              setEnemies={setEnemies}
              hasShownModalRef={hasShownModalRef}
              setInventory={setInventory}
            />
          )}
          <Footer
            abilities={abilities}
            heroe={heroe}
            weapons={weapons}
            amulet={amulet}
            setSelectedSkill={setSelectedSkill}
            selectedSkill={selectedSkill}
          />
        </>
      )}
    </>
  );
};

export default GamePage;
