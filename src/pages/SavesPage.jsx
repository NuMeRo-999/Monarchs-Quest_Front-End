import { useEffect, useState } from "react";
import { getUserSaveSlots } from "../api/apiRequest";
import BackButton from "../components/BackButton";
import SaveCard from "../components/SaveCard";
import EmptySaveCard from "../components/EmptySaveCard";
import Loading from "../components/Loading";
import { useAudio } from "../context/AudioContext";
import ConfirmationModal from "../components/ConfirmationModal";

const SavesPage = () => {
  const [saves, setSaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isPlaying, audioRef } = useAudio();
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [saveToDelete, setSaveToDelete] = useState(null);

  function fetchSaves() {
    getUserSaveSlots()
      .then((data) => {
        setSaves(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchSaves();
    if (!isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error:", error);
      });
    }
  }, [isPlaying, audioRef]);

  const handleDeleteClick = (saveId) => {
    setSaveToDelete(saveId);
    setShowModal(true);
  };

  return (
    <div className="bg-auto font-pixelify bg-gradient ">
      <BackButton link="/" />
      <div className="bg-[url('/images/background.png')] bg-[length:150px] bg-animation h-full w-screen flex flex-wrap justify-center items-center gap-10 xl:h-screen">
        <div className="bg-gradient-2 h-full"></div>
        {loading ? (
          <Loading />
        ) : (
          [...Array(3)].map((_, index) => {
            const save = saves && saves[index];
            return (
              <div
                key={index}
                className="bg-[url('/images/save-slot.png')] bg-cover w-96 h-[33rem] flex flex-col justify-center z-10 p-20 text-3xl"
              >
                <div className="flex flex-col justify-center items-center gap-2">
                  {save ? (
                    <SaveCard
                      key={save.id}
                      save={save}
                      saveId={save.id}
                      loading={loading}
                      deleting={deleting}
                      onDelete={() => handleDeleteClick(save.id)}
                    />
                  ) : (
                    <EmptySaveCard
                      key={index}
                      loading={loading}
                      fetchSaves={fetchSaves}
                    />
                  )}
                </div>
              </div>
            );
          })
        )}
        <ConfirmationModal
          showModal={showModal}
          setShowModal={setShowModal}
          setDeleting={setDeleting}
          fetchSaves={fetchSaves}
          saveId={saveToDelete}
        />
      </div>
    </div>
  );
};

export default SavesPage;