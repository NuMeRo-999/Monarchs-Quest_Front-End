import { Link } from "react-router-dom"

const BackButton = ({link}) => {
  return (
    <Link to={`${link}`} className={`bg-[url('/src/assets/icons/back-arrow.png')] bg-[length:68px] size-[68px] absolute top-5 left-5 z-10 shadow-xl`}></Link>
  )
}

export default BackButton