import { useEffect, useState } from "react";
import { BASE_URL, getWeaponsEquiped } from "../api/apiRequest";

const WeaponsSection = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    getWeaponsEquiped()
      .then((data) => {
        setWeapons(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(weapons[0])

  return (
    <div className="flex justify-center items-center gap-4">
      {[...Array(2)].map((_, index) => {
            return (
              <div
                key={index}
                className="bg-[url('/src/assets/images/weapon-inner-border.png')] bg-cover w-[4.4rem] h-36 flex justify-center items-center p-[1.35rem]"
              >
                {weapons[index] ? (
                  <img src={`${BASE_URL}/img/${weapons[index]?.image}`} alt="" className={`${weapons[index]?.image.includes('shield') || weapons[index]?.image.includes('dagger') ? 'h-1/2 w-full ' : 'size-full'}  image-cursor`}/>
                ) : (
                  ""
                )}
              </div>
            );
          })}
    </div>
  );
};

export default WeaponsSection;
