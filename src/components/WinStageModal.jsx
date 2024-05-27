import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getWithAuth } from "../api/api";
import { BASE_URL } from "../api/apiRequest";
import Spinner from "./Spinner";

const WinStageModal = () => {
  const [items, setItems] = useState([]);
  const { gameId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      await getWithAuth(`/save/slot/add-items/${gameId}`)
        .then((response) => {
          setItems(response);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchItems();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="h-[500px] w-[905px] bg-[url('/src/assets/images/abilities-border.png')] bg-cover z-[51] font-pixelify flex flex-col justify-evenly items-center">
        <h1 className="text-4xl text-white font-bold mb-2 uppercase">
          Recompensas
        </h1>
        <div className="flex gap-10 m-5">
          {items.length === 0 ? (
            <Spinner />
          ) : (
            items.map((item, index) => (
              <div
                key={index}
                className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-20 flex justify-center items-center relative"
              >
                <img
                  src={`${BASE_URL}/img/${item.imageFilename}`}
                  alt=""
                  className={` image-cursor rounded ${
                    item.imageFilename.includes("sword") ||
                    item.imageFilename.includes("dagger") ||
                    item.imageFilename.includes("hammer") ||
                    item.imageFilename.includes("spear") ||
                    item.imageFilename.includes("axe")
                      ? "w-4 h-15 rotate-45"
                      : "size-10"
                  }`}
                />
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center gap-4">
          <button className="bg-[url('/src/assets/images/button.png')] bg-cover h-12 w-[15.3rem] flex justify-center items-center text-white font-bold py-2 px-4 rounded">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinStageModal;
