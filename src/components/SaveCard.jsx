import { Link } from "react-router-dom";

const SaveCard = ({save, index, saveId}) => {
  console.log(save.stage[0].stage);
  return (
    <>
      <div>
        <h2>{save.creationDate.substring(0, save.creationDate.indexOf("T"))}</h2>
      </div>
      <div>
        <h2>STAGE: </h2>
        <h2 className="flex gap-5 justify-center items-center">
          {save?.stage[index]?.stage}
          <img src="/src/assets/icons/door-icon.png" alt="" />
        </h2>
        
      </div>
      <div>
        <h2>KILLS: </h2>
        <h2 className="flex gap-5 justify-center items-center">
          {save.kills}
          <img src="/src/assets/images/skull_01a.png" alt="" />
        </h2>
      </div>
      <div>
        <h2>MONEY: </h2>
        <h2 className="flex gap-5 justify-center items-center">
          {save.money}
          <img src="/src/assets/images/coin_05d.png" alt="" />
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Link
          to={`/game/${saveId}`}
          className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover h-12 w-[15.3rem] flex justify-center items-center text-white font-bold py-2 px-4 rounded"
        >
          Jugar
        </Link>
        <Link
          to={`/game/${saveId}`}
          className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover h-12 w-[15.3rem] flex justify-center items-center text-white font-bold py-2 px-4 rounded"
        >
          Borrar
        </Link>
      </div>
    </>
  );
};

export default SaveCard;
