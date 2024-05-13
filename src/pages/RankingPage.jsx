import RankingTable from "../components/RankingTable";

const RankingPage = () => {

  return (
    <div className="bg-auto font-pixelify size-screen bg-gradient ">
      <div className=" bg-[url('src/assets/images/background.png')] bg-[length:150px_150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
        <div className="bg-gradient-2"></div>
        <div className="bg-[url('src/assets/images/home.png')] bg-cover w-4/5 h-screen flex flex-col justify-center items-center z-10 gap-10">
          <img
            className="w-72"
            src="src/assets/images/MonarchQuest.png"
            alt=""
          />
          <h1 className="text-7xl">RANKING</h1>
          <RankingTable/>          
        </div>
      </div>
    </div>
  );
};

export default RankingPage;
