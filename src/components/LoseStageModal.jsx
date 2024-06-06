import { useNavigate, useParams } from "react-router-dom";
import { getWithAuth } from "../api/api";
import PlayAudio from "../utils/PlayAudio";

const LoseStageModal = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();

  const handleExit = () => {
    getWithAuth("/save/slot/end-state/" + gameId);
    navigate("/saves");
  };

  PlayAudio("/sounds/brass-shot-96185.ogg", 0.2);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="h-[500px] w-[905px] bg-[url('/images/abilities-border.png')] bg-cover z-[51] font-pixelify flex flex-col justify-evenly items-center">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-4xl text-white font-bold mb-2 uppercase">
            Has perdido
          </h1>
          <img src="/images/skull_01a.png" alt="kills" />
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="bg-[url('/images/button.png')] bg-cover h-12 w-[15.3rem] flex justify-center items-center text-white font-bold py-2 px-4 rounded"
            onClick={handleExit}
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoseStageModal;
