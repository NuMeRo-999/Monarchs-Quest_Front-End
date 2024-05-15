import { BASE_URL } from "../api/apiRequest";

const Enemies = ({ enemies, setSelectedEnemy }) => {

  return (
    <>
      <div
        className="size-[192px] bg-no-repeat enemy-idle z-10 bg-right-top absolute hover:drop-shadow-[0_50px_50px_rgba(255,255,255,1)] image-cursor right-[10%] top-[20%]"
        id={enemies[0]?.id}
        style={{
          backgroundImage: `url('${BASE_URL}/img/${enemies[0]?.imageFilename}')`,
        }}
        onClick={() => setSelectedEnemy(enemies[0]?.id)}
      >
        <p className="font-m04 text-white pt-10 pl-10">{enemies[0]?.healthPoints}</p>
      </div>

      <div
        className="size-[192px] bg-no-repeat enemy-idle bg-right-top z-10 absolute hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] image-cursor right-[20%] top-[30%]"
        id={enemies[1]?.id}
        style={{
          backgroundImage: `url('${BASE_URL}/img/${enemies[1]?.imageFilename}')`,
        }}
        onClick={() => setSelectedEnemy(enemies[1]?.id)}
      >
        <p className="font-m04 text-white pt-10 pl-10">{enemies[1]?.healthPoints}</p>
      </div>
      
      <div
        className="size-[192px] bg-no-repeat enemy-idle bg-right-top z-10 absolute hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] image-cursor right-[10%] top-[40%]"
        id={enemies[2]?.id}
        style={{
          backgroundImage: `url('${BASE_URL}/img/${enemies[2]?.imageFilename}')`,
        }}
        onClick={() => setSelectedEnemy(enemies[2]?.id)}
      >
        <p className="font-m04 text-white pt-10 pl-10">{enemies[2]?.healthPoints}</p>
      </div>
    </>
  );
};

export default Enemies;
