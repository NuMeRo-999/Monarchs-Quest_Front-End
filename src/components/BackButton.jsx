import { Link } from "react-router-dom"

const BackButton = ({size} = 68) => {
  return (
    <Link to={-1} className={`bg-[url('src/assets/icons/back-arrow.png')] bg-[length:${size}px] size-[${size}px] absolute top-5 left-5 z-10 shadow-xl`}></Link>
  )
}

export default BackButton