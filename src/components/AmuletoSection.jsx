import { useEffect, useState } from "react";
import { BASE_URL, getAmuletEquiped } from "../api/apiRequest";

const AmuletoSection = () => {
  const [amulet, setAmulet] = useState([]);

  useEffect(() => {
    getAmuletEquiped()
      .then((data) => {
        setAmulet(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <div>
        {[...Array(1)].map((_, index) => {
          return (
            <div
              key={index}
              className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-20 flex justify-center items-center"
            >
              {amulet[index] ? (
                <img
                  src={`${BASE_URL}/img/${amulet[index]?.image}`}
                  alt=""
                  className="size-10 image-cursor rounded"
                />
              ) : (
                <div className="bg-[url('/src/assets/images/inventory-slot-10.png')] size-20 bg-cover p-6"></div>
              )}
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default AmuletoSection;
