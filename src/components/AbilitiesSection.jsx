import { useState } from "react";
import PlayAudio from "../utils/PlayAudio";
import { BASE_URL } from "../api/api";

const AbilitiesSection = ({
  abilities,
  setSelectedSkill,
  selectedSkill,
  weapons,
}) => {
  const [selectedAbility, setSelectedAbility] = useState(null);
  const [hoveredAbility, setHoveredAbility] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleSelectedSkill(skill) {
    PlayAudio("/src/assets/sounds/Cursor2.ogg");
    setSelectedSkill(skill);
    setSelectedAbility(skill);
  }

  function handleHoveredAbility(skill, event) {
    
    setMousePosition({ x: event.clientX, y: event.clientY });
    setHoveredAbility(skill);
  }

  function handleMouseMove(event) {
    
    setMousePosition({ x: event.clientX, y: event.clientY });
  }

  function handleUnhoveredAbility() {
    setHoveredAbility(null);
  }

  function hasHammerWeapon() {
    return weapons.some((weapon) =>
      weapon.name.toLowerCase().includes("martillo")
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-3 bg-[url('/src/assets/images/abilities-border.png')] bg-cover p-[1.4rem]">
        {[...Array(8)].map((_, index) => {
          const ability = abilities[index];
          const isMartillazo = ability && ability.name === "Martillazo";
          const canUseMartillazo = isMartillazo ? hasHammerWeapon() : true;

          return (
            <div
              key={index}
              className={`relative bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center ${
                !canUseMartillazo ? "opacity-50" : ""
              }`}
              onMouseEnter={(event) =>
                ability && handleHoveredAbility(ability, event)
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={handleUnhoveredAbility}
              onClick={() => canUseMartillazo && handleSelectedSkill(ability)}
            >
              {ability ? (
                <img
                  src={`${BASE_URL}/img/${ability?.imageFilename}`}
                  alt=""
                  className={`size-10 image-cursor rounded-md border-white box-border hover:scale-105 transition-transform duration-300 ease-in-out ${
                    selectedSkill && Object.keys(selectedSkill).length > 0 && selectedAbility === ability
                      ? "border-2 "
                      : ""
                  }`}
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>

      {hoveredAbility && (
        <div
          className="fixed w-48 bg-red-700 border border-white text-white p-2 rounded-md z-20 bg-opacity-80"
          style={{
            top: `${mousePosition.y - 180}px`,
            left: `${mousePosition.x - 50}px`,
          }}
        >
          <h3 className="text-lg font-bold">{hoveredAbility.name}</h3>
          <p className="text-sm">{hoveredAbility.description}</p>
          <div className="flex gap-2 justify-evenly">
            <div>
              <p className="text-sm">Daño: {hoveredAbility.attack_damage}</p>
              <p className="text-sm">Defensa: {hoveredAbility.defense}</p>
            </div>
            <div>
              <p className="text-sm">Vida: {hoveredAbility.health_points}</p>
              <p className="text-sm">
                Crítico: {hoveredAbility.critical_strike_chance}
              </p>
            </div>
          </div>
          {hoveredAbility.name === "Martillazo" && !hasHammerWeapon() && (
            <p className="text-sm text-red-300 mt-2">Necesitas un martillo para usar esta habilidad.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AbilitiesSection;
