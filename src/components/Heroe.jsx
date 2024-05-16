import { BASE_URL } from "../api/apiRequest";

const Heroe = ({ heroe, weapons, isAttacking }) => {
  return (
    <div
      className={`w-[256px] h-[173px] bg-no-repeat z-10 flex justify-center items-center  gap-14 pl-6 absolute left-[10%] top-[35%] ${
        isAttacking ? "heroe-attack" : "heroe-idle"
      }`}
      style={{
        backgroundImage: `url('${BASE_URL}/img/${heroe?.imageFilename}')`,
      }}
    >
      {weapons.map((weapon, index) => (
        <div key={index}>
          <img
            src={`${BASE_URL}/img/${weapon?.image}`}
            alt=""
            className={`item-animation ${
              weapon.image.includes("shield") || weapon.image.includes("dagger")
                ? "pt-16"
                : "pb-12"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Heroe;
