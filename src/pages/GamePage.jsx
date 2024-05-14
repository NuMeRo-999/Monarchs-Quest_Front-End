import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { BASE_URL, getSaveSlot, getWeaponsEquiped } from "../api/apiRequest";
import Loading from "../components/Loading";

const GamePage = () => {
  const { gameId } = useParams();

  const [saves, setSaves] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [heroe, setHeroe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enemies, setEnemies] = useState([]);
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    getSaveSlot(gameId)
      .then((data) => {
        setSaves(data);
        setAbilities(data.stage[0].heroes[0].abilities);
        setHeroe(data.stage[0].heroes[0]);
        setEnemies(data.stage[0].enemies);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getWeaponsEquiped()
      .then((data) => {
        setWeapons(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
            <div
              className={`w-[305px] h-[192px] bg-no-repeat heroe-idle z-10 flex justify-evenly items-center absolute left-[10%] top-[30%]`}
              style={{
                backgroundImage: `url('${BASE_URL}/img/${heroe?.imageFilename}')`,
              }}
            >
              {weapons.map((weapon, index) => (
                <div key={index}>
                  <img
                    src={`${BASE_URL}/img/${weapon?.image}`}
                    alt=""
                    className={`item-animation ${
                      weapon.image.includes("shield") ||
                      weapon.image.includes("dagger")
                        ? "pt-16"
                        : "pb-12"
                    }`}
                  />
                </div>
              ))}
            </div>
            <div
              className="size-[192px] bg-no-repeat enemy-idle z-10 bg-right-top absolute right-[10%] top-[20%]"
              id={enemies[0]?.id}
              style={{
                backgroundImage: `url('${BASE_URL}/img/${enemies[0]?.imageFilename}')`,
              }}
            >
              <img
                src={`${BASE_URL}/img/${enemies[0]?.image}`}
                alt=""
                className={`item-animation`}
              />
            </div>
            <div
              className="size-[192px] bg-no-repeat enemy-idle bg-right-top z-10 absolute right-[20%] top-[30%]"
              id={enemies[1]?.id}
              style={{
                backgroundImage: `url('${BASE_URL}/img/${enemies[1]?.imageFilename}')`,
              }}
            >
              <img
                src={`${BASE_URL}/img/${enemies[1]?.image}`}
                alt=""
                className={`item-animation`}
              />
            </div>
            <div
              className="size-[192px] bg-no-repeat enemy-idle bg-right-top z-10 absolute right-[10%] top-[40%]"
              id={enemies[2]?.id}
              style={{
                backgroundImage: `url('${BASE_URL}/img/${enemies[2]?.imageFilename}')`,
              }}
            >
              <img
                src={`${BASE_URL}/img/${enemies[2]?.image}`}
                alt=""
                className={`item-animation`}
              />
            </div>
            {/* {enemies.map((enemy, index) => (
              
            ))} */}
          </div>
          <Footer abilities={abilities} heroe={heroe} weapons={weapons} />
        </>
      )}
    </>
  );
};

export default GamePage;
