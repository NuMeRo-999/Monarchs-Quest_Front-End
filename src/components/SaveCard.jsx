import { Link } from "react-router-dom";

const SaveCard = ({save, index}) => {
  return (
    <>
      <div>
        <h2>
          {save.creationDate.substring(0, save.creationDate.indexOf("T"))}
        </h2>
      </div>
      <div>
        <h2>STAGE: </h2>
        <h2>{save.stage}</h2>
      </div>
      <div>
        <h2>KILLS: </h2>
        <h2 className="flex gap-5">
          {save.kills}
          <img src="/src/assets/images/skull_01a.png" alt="" />
        </h2>
      </div>
      <div>
        <h2>MONEY: </h2>
        <h2 className="flex gap-5">
          {save.money}
          <img src="/src/assets/images/coin_05d.png" alt="" />
        </h2>
      </div>
      <div>
        <Link
          to={`/game/${index}`}
          className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover h-12 w-[15.3rem] flex justify-center items-center text-white font-bold py-2 px-4 rounded"
        >
          Play
        </Link>
      </div>
    </>
  );
};

export default SaveCard;
