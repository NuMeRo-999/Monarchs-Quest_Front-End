import { BASE_URL } from "../api/apiRequest";

const Enemies = ({ enemies, setSelectedEnemy, selectedEnemy, isAttacking, stageId }) => {

  return (
    <>
      <div
        className={`size-[192px] bg-no-repeat z-10 absolute hover:drop-shadow-[0_50px_50px_rgba(255,255,255,1)] image-cursor right-[10%] top-[20%] ${enemies[0]?.state === 0 ? 'enemy-die bg-left-bottom' : 'enemy-idle bg-right-top'} ${isAttacking && enemies[0]?.id === selectedEnemy ? 'enemy-hit' : ''} ${isAttacking && enemies[0]?.state !== 0 && stageId === 2 ? 'enemy-attack-2' : ''}`}
        id={enemies[0]?.id}
        style={{
          backgroundImage: `url('${BASE_URL}/img/${enemies[0]?.imageFilename}')`,
        }}
        onClick={() => setSelectedEnemy(enemies[0]?.state === 0 ? null : enemies[0]?.id)}
      >
        {enemies[0]?.state !== 0 && (
          <div className="bg-[url('/src/assets/images/level-health-bar.png')] bg-contain bg-bottom bg-no-repeat w-22 h-20">
            <p className="font-m04 text-sm text-white pt-12 pl-[.70rem]">{enemies[0]?.level}</p>
            <p className="font-m04 text-sm text-white pl-20 pt-5 pl-[.70rem]">{enemies[0]?.healthPoints}</p>
          </div>
        )}
      </div>

      <div
        className={`size-[192px] bg-no-repeat z-10 absolute hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] image-cursor right-[20%] top-[30%] ${enemies[1]?.state === 0 ? 'enemy-die bg-left-bottom' : 'enemy-idle bg-right-top'} ${isAttacking && enemies[1]?.id === selectedEnemy ? 'enemy-hit' : ''} ${isAttacking && enemies[1]?.state !== 0 && stageId === 2 ? 'enemy-attack' : ''}`}
        id={enemies[1]?.id}
        style={{
          backgroundImage: `url('${BASE_URL}/img/${enemies[1]?.imageFilename}')`,
        }}
        onClick={() => setSelectedEnemy(enemies[1]?.state === 0 ? null : enemies[1]?.id)}
      >
        {enemies[1]?.state !== 0 && (
          <div className="bg-[url('/src/assets/images/level-health-bar.png')] bg-contain bg-bottom bg-no-repeat w-22 h-20">
            <p className="font-m04 text-sm text-white pt-12 pl-[.70rem]">{enemies[1]?.level}</p>
            <p className="font-m04 text-sm text-white pt-5 pl-[.70rem]">{enemies[1]?.healthPoints}</p>
          </div>
        )}
      </div>
      
      <div
        className={`size-[192px] bg-no-repeat z-10 absolute hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] image-cursor right-[10%] top-[40%] ${enemies[2]?.state === 0 ? 'enemy-die bg-left-bottom' : 'enemy-idle bg-right-top'} ${isAttacking && enemies[2]?.id === selectedEnemy ? 'enemy-hit' : ''} ${isAttacking && enemies[2]?.state !== 0 && stageId === 2 ? 'enemy-attack-3' : ''}`}
        id={enemies[2]?.id}
        style={{
          backgroundImage: `url('${BASE_URL}/img/${enemies[2]?.imageFilename}')`,
        }}
        onClick={() => setSelectedEnemy(enemies[2]?.state === 0 ? null : enemies[2]?.id)}
      >
        {enemies[2]?.state !== 0 && (
          <div className="bg-[url('/src/assets/images/level-health-bar.png')] bg-contain bg-bottom bg-no-repeat w-22 h-20">
            <p className="font-m04 text-sm text-white pt-12 pl-[.70rem]">{enemies[2]?.level}</p>
            <p className="font-m04 text-sm text-white pt-5 pl-[.70rem]">{enemies[2]?.healthPoints}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Enemies;
