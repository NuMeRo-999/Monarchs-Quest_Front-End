import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const GamePage = () => {

  const {gameId} = useParams()

  return (
    <>
      <Header saveSlotId={gameId}/>
      <div className="bg-[url(/src/assets/images/game-background.png)] bg-cover h-[57.5vh]">
        {/* <img src="/src/assets/images/game-background.png" alt="" className="w-full h-auto"/> */}
      </div>
      <Footer saveSlotId={gameId}/>
    </>
  )
}

export default GamePage