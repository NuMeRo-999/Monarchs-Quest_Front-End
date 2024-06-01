import { useEffect, useState } from "react";
import {
  BASE_URL,
  getAmuletEquiped,
  getSaveSlot,
  getWeaponsEquiped,
} from "../api/apiRequest";
import ItemDetail from "./ItemDetail";
import { postWithAuth } from "../api/api";
import { useParams } from "react-router-dom";

const ContextMenu = ({
  inventory,
  index,
  setInventory,
  getInventory,
  saves,
  setHeroe,
  setAmulet,
  setWeapons,
}) => {
  const [contextMenu, setContextMenu] = useState(null);
  const { gameId } = useParams();

  function handleContextMenu(e, index) {
    e.preventDefault();
    setContextMenu({
      index: index,
      position: { top: 60, left: 60 },
    });
  }

  async function refreshInventory() {
    try {
      const data = await getInventory();
      setInventory(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    function handleClickOutsideContextMenu(e) {
      if (contextMenu && !e.target.closest(".context-menu")) {
        setContextMenu(null);
      }
    }

    document.addEventListener("click", handleClickOutsideContextMenu);
    return () => {
      document.removeEventListener("click", handleClickOutsideContextMenu);
    };
  }, [contextMenu]);

  async function handleConsumeItem() {
    setContextMenu(null);
    try {
      await postWithAuth(
        `/heroe/consume-item/${saves?.stage[0]?.heroes[0]?.id}/${inventory[index]?.id}`
      );
      await refreshInventory();
      const response = await getSaveSlot(gameId);
      setHeroe(response.stage[0].heroes[0]);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function handleEquipItem() {
    setContextMenu(null);
    try {
      await postWithAuth(`/heroe/equip-item/${inventory[index]?.id}`);
      await refreshInventory();
      const [weapons, amulet] = await Promise.all([
        getWeaponsEquiped(),
        getAmuletEquiped(),
      ]);
      setWeapons(weapons);
      setAmulet(amulet);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function handleUnequipItem() {
    setContextMenu(null);
    try {
      await postWithAuth(`/heroe/unequip-item/${inventory[index]?.id}`);
      await refreshInventory();
      const [weapons, amulet] = await Promise.all([
        getWeaponsEquiped(),
        getAmuletEquiped(),
      ]);
      setWeapons(weapons);
      setAmulet(amulet);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function handleDeleteItem() {
    setContextMenu(null);
    try {
      await postWithAuth(
        `/heroe/delete-item/${saves?.stage[0]?.heroes[0]?.id}/${inventory[index]?.id}`
      );
      await refreshInventory();
      const [weapons, amulet] = await Promise.all([
        getWeaponsEquiped(),
        getAmuletEquiped(),
      ]);
      setWeapons(weapons);
      setAmulet(amulet);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      {inventory[index]?.image ? (
        <img
          src={`${BASE_URL}/img/${inventory[index]?.image}`}
          alt=""
          className={` image-cursor rounded ${
            inventory[index]?.image.includes("sword") ||
            inventory[index]?.image.includes("dagger") ||
            inventory[index]?.image.includes("hammer") ||
            inventory[index]?.image.includes("spear") ||
            inventory[index]?.image.includes("axe")
              ? "w-4 h-15 rotate-45"
              : "size-10"
          }`}
          onContextMenu={(e) => handleContextMenu(e, index)}
        />
      ) : (
        <div
          key={index}
          className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-20 flex justify-center items-center"
        ></div>
      )}
      {contextMenu && contextMenu.index === index && (
        <div
          className="context-menu absolute bg-[url('/src/assets/images/menu-context.png')] z-50 bg-cover p-3 h-36 w-52 flex flex-col justify-center items-center box-border text-white"
          style={{
            top: contextMenu.position.top,
            left: contextMenu.position.left,
          }}
        >
          {inventory[index].type === "consumible" ? (
            <button
              onClick={() => handleConsumeItem()}
              className="image-cursor hover:bg-[#382f35] size-full rounded-t-lg border-b border-gray-400"
              id={inventory[index]?.id}
            >
              Consumir
            </button>
          ) : inventory[index].state ? (
            <button
              onClick={() => handleUnequipItem()}
              className="image-cursor hover:bg-[#382f35] size-full rounded-t-lg border-b border-gray-400"
              id={inventory[index]?.id}
            >
              Desequipar
            </button>
          ) : (
            <button
              onClick={() => handleEquipItem()}
              className="image-cursor hover:bg-[#382f35] size-full rounded-t-lg border-b border-gray-400"
              id={inventory[index]?.id}
            >
              Equipar
            </button>
          )}
          <ItemDetail
            inventory={inventory}
            index={index}
            setContextMenu={setContextMenu}
          />
          <button
            onClick={() => handleDeleteItem()}
            className="image-cursor hover:bg-[#382f35] size-full rounded-b-lg"
            id={inventory[index]?.id}
          >
            Eliminar
          </button>
        </div>
      )}
    </>
  );
};

export default ContextMenu;
