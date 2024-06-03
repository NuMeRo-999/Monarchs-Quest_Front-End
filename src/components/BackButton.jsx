import { Link } from "react-router-dom";
import PlayAudio from "../utils/PlayAudio";

const BackButton = ({ link }) => {
  return (
    <Link
      to={`${link}`}
      className={`bg-[url('/src/assets/icons/back-arrow.png')] bg-[length:68px] size-[68px] absolute top-5 left-5 z-10 shadow-xl`}
      onMouseEnter={() => PlayAudio("/src/assets/sounds/Cursor1.ogg")}
      onClick={() => PlayAudio("/src/assets/sounds/Select2.ogg")}
    ></Link>
  );
};

export default BackButton;
