import PlayAudio from "../utils/PlayAudio";

const CloseModalButton = ({ setShowModal }) => {
  return (
    <button className="image-cursor">
      <span
        onClick={() => {
          setShowModal(false);
          PlayAudio("/sounds/PopupClose.ogg");
        }}
        className="text-3xl top-10 right-10 absolute z-[41]"
      >
        <img
          src="/icons/close-icon.png"
          alt=""
          className="size-10"
        />
      </span>
    </button>
  );
};

export default CloseModalButton;
