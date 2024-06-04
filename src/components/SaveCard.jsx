import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import PlayAudio from "../utils/PlayAudio";

const SaveCard = ({ save, saveId, deleting, onDelete }) => {

  if (!save) {
    return null;
  }

  return (
    <>
      {deleting ? (
        <Spinner />
      ) : (
        <>
          <div>
            <h2>{save.creationDate?.substring(0, save.creationDate.indexOf("T"))}</h2>
          </div>
          <div>
            <h2>FASE: </h2>
            <h2 className="flex gap-5 justify-center items-center">
              {save?.stage?.[0]?.stage}
              <img src="/src/assets/icons/door-icon.png" alt="" />
            </h2>
          </div>
          <div>
            <h2>MUERTES: </h2>
            <h2 className="flex gap-5 justify-center items-center">
              {save.kills}
              <img src="/src/assets/images/skull_01a.png" alt="" />
            </h2>
          </div>
          <div>
            <h2>DINERO: </h2>
            <h2 className="flex gap-5 justify-center items-center">
              {save.money}
              <img src="/src/assets/images/coin_05d.png" alt="" />
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              to={`/game/${saveId}`}
              className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover h-12 w-[15.3rem] flex justify-center items-center text-white font-bold py-2 px-4 rounded"
              onMouseEnter={() => PlayAudio("/src/assets/sounds/Cursor1.ogg")}
              onClick={() => PlayAudio("/src/assets/sounds/Select2.ogg")}
            >
              Jugar
            </Link>
            <button
              onClick={() => {
                onDelete();
                PlayAudio("/src/assets/sounds/Select2.ogg");
              }}
              className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover h-12 w-[15.3rem] flex justify-center items-center text-white font-bold py-2 px-4 rounded"
              onMouseEnter={() => PlayAudio("/src/assets/sounds/Cursor1.ogg")}
            >
              Borrar
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SaveCard;
