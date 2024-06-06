import { deleteWithAuth } from "../api/api";
import PlayAudio from "../utils/PlayAudio";

const ConfirmationModal = ({
  showModal,
  saveId,
  setShowModal,
  setDeleting,
  fetchSaves,
}) => {
  async function deleteSaveSlot(saveSlotId) {
    PlayAudio("/sounds/Select2.ogg");
    setDeleting(true);
    try {
      await deleteWithAuth(`/save/slot/${saveSlotId}`);
      fetchSaves();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setDeleting(false);
    }
  }

  return (
    showModal && (
      <>
        <div className="justify-center items-center flex overflow-x-hidden bg-cover overflow-y-auto fixed inset-0 z-[20] outline-none focus:outline-none">
          <div className="relative flex flex-col items-center justify-center bg-[url('/images/confirmation-modal.png')] bg-cover w-[40rem] h-[29.2rem] gap-5">
            <h2 className="text-4xl max-w-96 text-center">¿Estás seguro?</h2>
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex justify-between gap-8">
                <button
                  className="image-cursor leading-4 text-2xl bg-[url('/images/button.png')] bg-cover h-10 text-white w-52 text-center pt-2 font-bold py-2 px-4"
                  onClick={() => {
                    setShowModal(false);
                    deleteSaveSlot(saveId);
                    PlayAudio("/sounds/DeleteItem.ogg");
                  }}
                >
                  Sí
                </button>
                <button
                  className="image-cursor leading-4 text-2xl bg-[url('/images/button.png')] bg-cover h-10 text-white w-52 text-center pt-2 font-bold py-2 px-4"
                  onClick={() => {
                    setShowModal(false);
                    PlayAudio("/sounds/Select2.ogg");
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-10 bg-black"></div>
      </>
    )
  );
};

export default ConfirmationModal;
