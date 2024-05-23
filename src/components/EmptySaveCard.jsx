import { useState } from "react";
import { postWithAuth } from "../api/api";
import Spinner from "./Spinner";

const EmptySaveCard = ({ fetchSaves }) => {
  const [creating, setCreating] = useState(false);

  function createSaveSlot() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.token) {
      throw new Error("Token not found in localStorage");
    }

    setCreating(true);
    postWithAuth(`/save/slot/create/${user.user_id}`)
      .then(() => {
        fetchSaves();
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => setCreating(false));
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {creating ? (
        <Spinner />
      ) : (
        <>
          <h2>Vacío</h2>
          <button
            onClick={createSaveSlot}
            className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover h-12 w-[15.3rem] flex justify-center items-center text-white font-bold py-2 px-4 rounded"
          >
            Crear
          </button>
        </>
      )}
    </div>
  );
};

export default EmptySaveCard;
