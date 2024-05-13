import { useEffect } from "react";
import { useState } from "react";
import { getWithAuth } from "../api/api";
import { BASE_URL } from "../api/apiRequest";

const InventoryModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    getInventory()
      .then((data) => {
        setInventory(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [])

  async function getInventory() {
    try {
      return await getWithAuth(`/item/equiped_items`);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  console.log(inventory)
  

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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative flex items-center justify-center">
            <button className="image-cursor">
                  <span
                    onClick={() => setShowModal(false)}
                    className="text-3xl top-10 right-10 absolute z-50"
                  >
                    <img src="/src/assets/icons/close-icon.png" alt="" className="size-10"/>
                  </span>
                </button>
              <div className="bg-[url('/src/assets/images/Inventory.png')] bg-cover w-[80vw] h-[77.7vh] grid grid-cols-10 p-20 z-20 text-3xl justify-center">
                {
                  [...Array(40)].map((_, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-20 flex justify-center items-center"
                      >
                        {inventory[index] ? (
                          <img
                            src={`${BASE_URL}/img/${inventory[index]?.image}`}
                            alt=""
                            className="size-10 image-cursor rounded"
                          />
                        ) : (
                          <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] size-20 bg-cover p-6"></div>
                        )}
                      </div>
                    );
                  })
                }

              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default InventoryModal;
