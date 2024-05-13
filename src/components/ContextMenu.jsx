import { useEffect, useState } from "react";
import { BASE_URL } from "../api/apiRequest";

const ContextMenu = ({ inventory, index }) => {
  const [contextMenu, setContextMenu] = useState(null);

  function handleContextMenu(e, index) {
    e.preventDefault();
    setContextMenu({
      index: index,
      position: { top: e.clientY - 100, left: e.clientX - 120 },
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
          className="size-10 image-cursor rounded"
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
            >
              Consumir
            </button>
          ) : inventory[index].state ? (
            <button
              onClick={() => setContextMenu(null)}
              className="image-cursor hover:bg-[#382f35] size-full rounded-t-lg border-b border-gray-400"
            >
              Desequipar
            </button>
          ) : (
            <button
              onClick={() => setContextMenu(null)}
              className="image-cursor hover:bg-[#382f35] size-full rounded-t-lg border-b border-gray-400"
            >
              Equipar
            </button>
          )}
          <button
            onClick={() => setContextMenu(null)}
            className="image-cursor hover:bg-[#382f35] size-full border-b border-gray-400"
          >
            Detalles
          </button>
          <button
            onClick={() => setContextMenu(null)}
            className="image-cursor hover:bg-[#382f35] size-full rounded-b-lg"
          >
            Eliminar
          </button>
        </div>
      )}
    </>
  );
};

export default ContextMenu;
