import RankingTable from "../components/RankingTable";
import BackButon from "../components/BackButton";

const RankingPage = () => {

  return (
    <div className="bg-auto font-pixelify size-screen bg-gradient ">
      <div className=" bg-[url('/images/background.png')] bg-[length:150px_150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
        <div className="bg-gradient-2"></div>
        <BackButon link={'/'}/>
        <div className="bg-[url('/images/home.png')] bg-cover w-4/5 h-screen flex flex-col justify-center items-center z-10 gap-10">
          <img
            className="w-96"
            src="/images/MonarchQuest.png"
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
