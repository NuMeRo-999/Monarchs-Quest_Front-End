import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAudio } from "../context/AudioContext";
import PlayAudio from "../utils/PlayAudio";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const { isPlaying, audioRef } = useAudio();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    if (!isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error:", error);
      });
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="bg-auto font-pixelify size-screen bg-gradient ">
      <div className=" bg-[url('/images/background.png')] bg-[length:150px_150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
        <div className="bg-gradient-2"></div>
        <div className="bg-[url('/images/home.png')] bg-cover h-4/5 w-1/2 flex flex-col justify-center z-10">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-72"
              src="/images/MonarchQuest.png"
              alt=""
            />

            <div className="flex flex-col items-center gap-5 mt-7">
              <Link
                to={"/saves"}
                type="submit"
                className="image-cursor bg-[url('/images/button.png')] bg-cover leading-4 text-2xl h-[2.55rem] text-white w-52 flex justify-center items-center"
                onMouseEnter={() => PlayAudio("/sounds/Cursor1.ogg")}
                onClick={() => PlayAudio("/sounds/Select2.ogg")}
              >
                Jugar
              </Link>
              <Link
                to={"/ranking"}
                type="submit"
                className="image-cursor bg-[url('/images/button.png')] bg-cover leading-4 text-2xl h-[2.55rem] text-white w-52 flex justify-center items-center"
                onMouseEnter={() => PlayAudio("/sounds/Cursor1.ogg")}
                onClick={() => PlayAudio("/sounds/Select2.ogg")}
              >
                Ranking
              </Link>
              <Link
                to={"/login"}
                className="image-cursor bg-[url('/images/button.png')] bg-cover leading-4 text-2xl h-[2.55rem] text-white w-52 flex justify-center items-center"
                onMouseEnter={() => PlayAudio("/sounds/Cursor1.ogg")}
                onClick={() => {
                  PlayAudio("/sounds/Select2.ogg");
                  logout();
                }}
              >
                Salir
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center mt-5">
              <h2 className="text-3xl font-bold ">Créditos</h2>
              <p className="text-lg">Desarrollado por Pedro Vílchez</p>
              <div className="flex gap-5 justify-center items-center">
                <a
                  href="https://github.com/NuMeRo-999"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => PlayAudio("/sounds/Cursor1.ogg")}
                >
                  <img
                    className="size-10"
                    src="/images/github-icon.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-vílchez-peña-4669292b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => PlayAudio("/sounds/Cursor1.ogg")}
                >
                  <img
                    className="size-10"
                    src="/images/linkedin-icon.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
