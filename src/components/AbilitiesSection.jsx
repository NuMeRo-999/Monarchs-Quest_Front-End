import { useState } from "react";
import { BASE_URL } from "../api/apiRequest";

const AbilitiesSection = ({ abilities, setSelectedSkill, selectedSkill }) => {
  const [selectedAbility, setSelectedAbility] = useState(null);

  function handleSelectedSkill(skill) {
    setSelectedSkill(skill);
    setSelectedAbility(skill);
  }

  return (
    <div className="grid grid-cols-4 gap-3 bg-[url('/src/assets/images/abilities-border.png')] bg-cover p-[1.4rem]">
      {[...Array(8)].map((_, index) => {
        return (
          <div
            key={index}
            className={`bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center`}
          >
            {abilities[index] ? (
              <img
                src={`${BASE_URL}/img/${abilities[index]?.imageFilename}`}
                alt=""
                className={`size-10 image-cursor rounded-md border-white box-border hover:scale-105 transition-transform duration-300 ease-in-out ${
                  selectedSkill && selectedAbility === abilities[index] ? "border-2 " : ""
                }`}
                onClick={() => handleSelectedSkill(abilities[index])}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AbilitiesSection;
