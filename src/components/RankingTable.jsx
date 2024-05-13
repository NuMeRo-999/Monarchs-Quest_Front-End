import { useEffect, useState } from "react";
import { getWithAuth } from "../api/api";

const RankingTable = () => {

  const [saves, setSaves] = useState([]);
  const [userTotals, setUserTotals] = useState({});

  useEffect(() => {
    try {
      getSaves().then((data) => {
        setSaves(data.sort((a, b) => b.kills - a.kills));

        const totals = {};
        data.forEach((save) => {
          const username = save.user[0].username;
          if (!totals[username]) {
            totals[username] = { kills: 0, money: 0 };
          }
          totals[username].kills += save.kills;
          totals[username].money += save.money;
        });
        
        setUserTotals(totals);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  async function getSaves() {
    try {
      return await getWithAuth(`/save/slot/`);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  return (
    <table className="w-4/5 bg-white border border-yellow-700 mb-10">
            <thead className="bg-yellow-800 text-white">
              <tr>
                <th className="py-2 px-4">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <img
                      src="/src/assets/icons/trophy-icon.png"
                      className="size-8"
                      alt=""
                    />
                    <span>Posición</span>
                  </div>
                </th>
                <th className="py-2 px-4">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <img
                      src="/src/assets/icons/head-icon.png"
                      className="size-8"
                      alt=""
                    />
                    <span>Usuario</span>
                  </div>
                </th>
                <th className="py-2 px-4">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <img
                      src="/src/assets/icons/door-icon.png"
                      className="size-8"
                      alt=""
                    />
                    <span>Stage</span>
                  </div>
                </th>
                <th className="py-2 px-4">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <img
                      src="/src/assets/images/skull_01a.png"
                      className="size-8"
                      alt=""
                    />
                    <span>Kills</span>
                  </div>
                </th>
                <th className="py-2 px-4">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <img
                      src="/src/assets/images/coin_05d.png"
                      className="size-8"
                      alt=""
                    />
                    <span>Money</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {saves.map((save, index) => (
                <tr className="text-center" key={save?.id}>
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{save?.user[0].username}</td>
                  <td className="py-2 px-4">{save?.stage[0].stage}</td>
                  {userTotals[save?.user[0].username] && (
                    <>
                      <td className="py-2 px-4">{userTotals[save?.user[0].username].kills}</td>
                      <td className="py-2 px-4">{userTotals[save?.user[0].username].money}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
  )
}

export default RankingTable