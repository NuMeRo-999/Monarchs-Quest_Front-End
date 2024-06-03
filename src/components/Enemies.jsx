import { BASE_URL } from "../api/apiRequest";
import PlayAudio from "../utils/PlayAudio";

const Enemies = ({ enemies, setSelectedEnemy, selectedEnemy, isAttacking, stageId }) => {

  return (
    <>
      <div
        className={`size-[192px] bg-no-repeat z-10 absolute ${selectedEnemy === enemies[0]?.id ? 'drop-shadow-[0_50px_50px_rgba(255,255,255,1)]' : '' } hover:drop-shadow-[0_50px_50px_rgba(255,255,255,1)] image-cursor right-[10%] top-[20%] ${enemies[0]?.state === 0 ? 'enemy-die bg-left-bottom' : 'enemy-idle bg-right-top'} ${isAttacking && enemies[0]?.id === selectedEnemy ? 'enemy-hit' : ''} ${isAttacking && enemies[0]?.state !== 0 && stageId === 2 ? 'enemy-attack-2' : ''}`}
        id={enemies[0]?.id}
        style={{
          backgroundImage: `url('${BASE_URL}/img/${enemies[0]?.imageFilename}')`,
        }}
        onClick={() => {
          setSelectedEnemy(enemies[0]?.state === 0 ? null : enemies[0]?.id);
          PlayAudio("/src/assets/sounds/Cursor2.ogg");
        }}
      >
      {enemies[0]?.state !== 0 && (
        <div className="bg-[url('/src/assets/images/level-health-bar.png')] bg-contain bg-bottom bg-no-repeat h-20">
          <p className="font-m04 text-sm text-white pt-[2.7rem] pl-[.8rem]">{enemies[0]?.level < 10 ? `0${enemies[0]?.level}` : enemies[0]?.level}</p>
          <div className="bg-red-500 absolute max-w-32 top-[3.20rem] left-[3.3rem] h-2" style={{ width: `${enemies[0]?.healthPoints}%`, transition: 'width 0.5s' }}></div>
        </div>
      )}
      </div>

      <div
        className={`size-[192px] bg-no-repeat z-10 absolute ${selectedEnemy === enemies[1]?.id ? 'drop-shadow-[0_50px_50px_rgba(255,255,255,1)]' : '' } hover:drop-shadow-[0_50px_50px_rgba(255,255,255,1)] image-cursor right-[20%] top-[30%] ${enemies[1]?.state === 0 ? 'enemy-die bg-left-bottom' : 'enemy-idle bg-right-top'} ${isAttacking && enemies[1]?.id === selectedEnemy ? 'enemy-hit' : ''} ${isAttacking && enemies[1]?.state !== 0 && stageId === 2 ? 'enemy-attack' : ''}`}
        id={enemies[1]?.id}
        style={{
          backgroundImage: `url('${BASE_URL}/img/${enemies[1]?.imageFilename}')`,
        }}
        onClick={() => {
          setSelectedEnemy(enemies[1]?.state === 0 ? null : enemies[1]?.id);
          PlayAudio("/src/assets/sounds/Cursor2.ogg");
        }}
      >
        {enemies[1]?.state !== 0 && (
          <div className="bg-[url('/src/assets/images/level-health-bar.png')] bg-contain bg-bottom bg-no-repeat h-20">
            <p className="font-m04 text-sm text-white pt-[2.7rem] pl-[.8rem]">{enemies[1]?.level < 10 ? `0${enemies[1]?.level}` : enemies[1]?.level}</p>
            <div className="bg-red-500 absolute max-w-32 top-[3.20rem] left-[3.3rem] h-2" style={{ width: `${enemies[1]?.healthPoints}%`, transition: 'width 0.5s' }}></div>
          </div>
        )}
      </div>
      
      <div
        className={`size-[192px] bg-no-repeat z-10 absolute ${selectedEnemy === enemies[2]?.id ? 'drop-shadow-[0_50px_50px_rgba(255,255,255,1)]' : '' } hover:drop-shadow-[0_50px_50px_rgba(255,255,255,1)] image-cursor right-[10%] top-[40%] ${enemies[2]?.state === 0 ? 'enemy-die bg-left-bottom' : 'enemy-idle bg-right-top'} ${isAttacking && enemies[2]?.id === selectedEnemy ? 'enemy-hit' : ''} ${isAttacking && enemies[2]?.state !== 0 && stageId === 2 ? 'enemy-attack-3' : ''}`}
        id={enemies[2]?.id}
        style={{
          backgroundImage: `url('${BASE_URL}/img/${enemies[2]?.imageFilename}')`,
        }}
        onClick={() => {
          setSelectedEnemy(enemies[2]?.state === 0 ? null : enemies[2]?.id);
          PlayAudio("/src/assets/sounds/Cursor2.ogg");
        }}
      >
        {enemies[2]?.state !== 0 && (
          <div className="bg-[url('/src/assets/images/level-health-bar.png')] bg-contain bg-bottom bg-no-repeat h-20">
            <p className="font-m04 text-sm text-white pt-[2.7rem] pl-[.8rem]">{enemies[2]?.level < 10 ? `0${enemies[2]?.level}` : enemies[2]?.level}</p>
            <div className="bg-red-500 absolute max-w-32 top-[3.20rem] left-[3.3rem] h-2" style={{ width: `${enemies[2]?.healthPoints}%`, transition: 'width 0.5s' }}></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Enemies;
