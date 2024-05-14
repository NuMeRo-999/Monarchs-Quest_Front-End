import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getSaveSlot } from "../api/apiRequest";
import Loading from "../components/Loading";

const GamePage = () => {
  const { gameId } = useParams();

  const [saves, setSaves] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [heroe, setHeroe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSaveSlot(gameId)
      .then((data) => {
        setSaves(data);
        setAbilities(data.stage[0].heroes[0].abilities);
        setHeroe(data.stage[0].heroes[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="bg-auto font-pixel size-screen bg-gradient">
            <div className=" bg-[url('/src/assets/images/background.png')] bg-[length:150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
              <div className="h-screen w-screen font-pixelify flex justify-center items-center bg-[]">
                <div className="bg-gradient-2"></div>
                <Loading />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header saves={saves} />
          <div className="bg-[url(/src/assets/images/game-background.png)] bg-cover h-[57.5vh]"></div>
          <Footer abilities={abilities} heroe={heroe} />
        </>
      )}
    </>
  );
};

export default GamePage;
