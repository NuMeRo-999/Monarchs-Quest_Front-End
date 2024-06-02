import { useEffect, useState } from "react";
import ContextMenu from "./ContextMenu";
import CloseModalButton from "./CloseModalButton";
import Spinner from "./Spinner";
import { getInventory } from "../api/apiRequest";

const InventoryModal = ({ saves, setHeroe, setAmulet, setWeapons, inventory, setInventory }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInventory(saves.id)
      .then((data) => {
        setInventory(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <button
        className="image-cursor leading-4 text-2xl bg-[url('/src/assets/images/button.png')] bg-cover h-10 text-white w-52 text-center pt-2 font-bold py-2 px-4"
        onClick={() => setShowModal(true)}
      >
        Inventario
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none">
            <div className="relative flex items-center justify-center">
              <CloseModalButton setShowModal={setShowModal} />
              <div className="bg-[url('/src/assets/images/Inventory.png')] bg-cover w-[80vw] h-[77.7vh] grid grid-cols-10 p-20 z-20 text-3xl justify-center">
                {loading ? (
                  <Spinner />
                ) : (
                  [...Array(40)].map((_, index) => (
                    <div
                      key={inventory[index]?.id}
                      id={inventory[index]?.id}
                      className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-20 flex justify-center items-center relative"
                    >
                      <ContextMenu
                        inventory={inventory}
                        index={index}
                        setInventory={setInventory}
                        getInventory={getInventory}
                        saves={saves}
                        setHeroe={setHeroe}
                        setWeapons={setWeapons}
                        setAmulet={setAmulet}
                      />
                      <p className="text-white absolute bottom-2 right-2 text-xl font-m04">
                        {inventory[index]?.quantity}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-30 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default InventoryModal;
