import { useEffect, useState } from "react";
import { getUserSaveSlots } from "../api/apiRequest";
import BackButton from "../components/BackButton";
import SaveCard from "../components/SaveCard";
import EmptySaveCard from "../components/EmptySaveCard";
import Loading from "../components/Loading";

const SavesPage = () => {
  const [saves, setSaves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserSaveSlots()
      .then((data) => {
        setSaves(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="bg-auto font-pixelify size-screen bg-gradient ">
      <BackButton link={'/'}/>
      <div className=" bg-[url('/src/assets/images/background.png')] bg-[length:150px] bg-animation h-screen w-screen flex flex-wrap justify-center items-center gap-10">
        <div className="bg-gradient-2"></div>
          { loading ? (
            <Loading/>
          ) : (
            [...Array(3)].map((_, index) => {
              const save = (saves && saves[index]);
              return (
                <div key={save?.id} className="bg-[url('/src/assets/images/save-slot.png')] bg-cover w-96 h-[33rem] flex flex-col justify-center z-10 p-20 text-3xl">
                  <div className="flex flex-col justify-center items-center gap-2">
                    {save ? (
                      <SaveCard save={save} saveId={save?.id} index={index}/>
                    ) : (
                      <EmptySaveCard/>
                    )}
                  </div>
                </div>
              );
            })
          )}
      </div>
    </div>
  );
};

export default SavesPage;
