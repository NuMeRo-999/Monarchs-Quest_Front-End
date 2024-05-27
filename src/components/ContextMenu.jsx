import { useEffect, useState } from "react";
import { BASE_URL } from "../api/apiRequest";
import ItemDetail from "./ItemDetail";

const ContextMenu = ({ inventory, index }) => {
  const [contextMenu, setContextMenu] = useState(null);

  function handleContextMenu(e, index) {
    e.preventDefault();
    setContextMenu({
      index: index,
      position: { top: e.clientY - 180, left: e.clientX - 300 },
    });
  }

  function handleClickOutsideContextMenu(e) {
    if (contextMenu && !e.target.closest(".context-menu")) {
      setContextMenu(null);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideContextMenu);
    return () => {
      document.removeEventListener("click", handleClickOutsideContextMenu);
    };
  }, [contextMenu]);

  return (
    <>
      {inventory[index]?.image ? (
        <img
          src={`${BASE_URL}/img/${inventory[index]?.image}`}
          alt=""
          className={` image-cursor rounded ${
            inventory[index]?.image.includes('sword') ||
            inventory[index]?.image.includes('dagger') ||
            inventory[index]?.image.includes('hammer') ||
            inventory[index]?.image.includes('spear') ||
            inventory[index]?.image.includes("axe")
              ? 'w-4 h-15 rotate-45'
              : 'size-10'
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
              onClick={() => setContextMenu(null)}
              className="image-cursor hover:bg-[#382f35] size-full rounded-t-lg border-b border-gray-400"
              id={inventory[index]?.id}
            >
              Consumir
            </button>
          ) : inventory[index].state ? (
            <button
              onClick={() => setContextMenu(null)}
              className="image-cursor hover:bg-[#382f35] size-full rounded-t-lg border-b border-gray-400"
              id={inventory[index]?.id}
            >
              Desequipar
            </button>
          ) : (
            <button
              onClick={() => setContextMenu(null)}
              className="image-cursor hover:bg-[#382f35] size-full rounded-t-lg border-b border-gray-400"
              id={inventory[index]?.id}
            >
              Equipar
            </button>
          )}
          <ItemDetail inventory={inventory} index={index} setContextMenu={setContextMenu} />
          <button
            onClick={() => setContextMenu(null)}
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