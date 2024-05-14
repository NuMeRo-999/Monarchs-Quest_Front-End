import { useEffect, useState } from "react";
import { getWithAuth } from "../api/api";
import { BASE_URL } from "../api/apiRequest";
import Spinner from "./Spinner";
import CloseModalButton from "./CloseModalButton";

const ItemDetail = ({ inventory, index }) => {
  const [showModal, setShowModal] = useState(false);
  const [ItemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemDetails()
      .then((data) => {
        setItemDetail(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function getItemDetails() {
    try {
      return await getWithAuth(`/item/${inventory[index]?.id}`);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  return (
    <>
      <button
        className="image-cursor hover:bg-[#382f35] size-full border-b border-gray-400"
        id={inventory[index]?.id}
        onClick={() => setShowModal(true)}
      >
        Detalles
      </button>

      {showModal && ItemDetail && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[51] outline-none focus:outline-none">
            <div className="relative flex flex-col items-center justify-center bg-[url('/src/assets/images/ItemDetail.png')] bg-cover w-[30rem] h-[36.7rem] gap-5">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <CloseModalButton setShowModal={setShowModal} />
                  <h2 className="text-4xl max-w-96 text-center">
                    {ItemDetail?.name}
                  </h2>
                  <img src={`${BASE_URL}/img/${ItemDetail?.image}`} alt="" />
                  <p className="text-center max-w-72 text-xl">
                    {ItemDetail?.description}
                  </p>
                  <div className="text-2xl flex flex-col items-center justify-center gap-5">
                    <div className="flex gap-2">
                      <img
                        src="/src/assets/icons/attack-icon.png"
                        alt=""
                      />
                      <p>Daño: {ItemDetail?.attackPower}</p>
                    </div>
                    <div className="flex gap-2">
                      <img
                        src="/src/assets/icons/critick-icon-2.png"
                        alt=""
                      />
                      <p>
                        Crítico: {ItemDetail?.criticalStrikeChance}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <img src="/src/assets/icons/shield-icon.png" alt="" />
                      <p>Defensa: {ItemDetail?.defense}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
        </>
      )}
    </>
  );
};

export default ItemDetail;