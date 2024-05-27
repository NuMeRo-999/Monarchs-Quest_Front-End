import { BASE_URL } from "../api/apiRequest";

const Heroe = ({ heroe, weapons, isAttacking, stageId }) => {
  return (
    <div
      className={`w-[256px] h-[173px] bg-no-repeat z-10 flex justify-center items-center  gap-14 pl-6 absolute left-[10%] top-[35%] ${
        isAttacking && stageId === 1 ? "heroe-attack" : heroe?.state === 0 ? "heroe-die" : "heroe-idle"
      } ${isAttacking && stageId === 2 ? "heroe-hit" : ""}`}
      style={{
        backgroundImage: `url('${BASE_URL}/img/${heroe?.imageFilename}')`,
      }}
    >
      {weapons.slice(0, 2).map((weapon, index) => (
        <div key={index}>
          <img
            src={`${BASE_URL}/img/${weapon?.image}`}
            alt=""
            className={`item-animation ${
              weapon?.image.includes("shield") || weapon?.image.includes("dagger")
                ? "pt-16"
                : "pb-12"
            }`}
          />
        </div>
      ))}
      {weapons.length < 2 && (
        <div>
          <img
            src=""
            alt=""
            className="item-animation w-12"
          />
        </div>
      )}
    </div>
  );
};

export default Heroe;
