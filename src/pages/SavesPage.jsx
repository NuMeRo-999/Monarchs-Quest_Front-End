import { Link } from "react-router-dom"

const SavesPage = () => {
  return (
    <div className="bg-auto font-pixelify size-screen bg-gradient ">
      <div className=" bg-[url('src/assets/images/background.png')] bg-[length:150px_150px] bg-animation h-screen w-screen flex justify-center items-center gap-10">
        <div className="bg-gradient-2"></div>
        <div className="bg-[url('src/assets/images/save-slot.png')] bg-cover w-96 h-[33rem] flex flex-col justify-center z-10 p-20 text-3xl">
          <div className="flex flex-col justify-center items-center gap-5">
            <div>
              <h2>STAGE: </h2>
              <h2>0</h2>
            </div>
            <div>
              <h2>KILLS: </h2>
              <h2 className="flex gap-5">
                0
                <img src="src/assets/images/skull_01a.png" alt="" />
              </h2>
            </div>
            <div>
              <h2>MONEY: </h2>
              <h2 className="flex gap-5">
                0
                <img src="src/assets/images/coin_05d.png" alt="" />
              </h2>
            </div>
            <div>
              <h2>30/04/2024</h2>
            </div>
            <Link
              to={"/game"}
              type="submit"
              className="rounded-full leading-4 text-2xl bg-red-800 h-8 mt-5 text-white w-52 text-center pt-2"
            >
              Jugar
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default SavesPage