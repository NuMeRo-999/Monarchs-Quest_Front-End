const CloseModalButton = ({ setShowModal }) => {
  return (
    <button className="image-cursor">
      <span
        onClick={() => setShowModal(false)}
        className="text-3xl top-10 right-10 absolute z-[41]"
      >
        <img
          src="/src/assets/icons/close-icon.png"
          alt=""
          className="size-10"
        />
      </span>
    </button>
  );
};

export default CloseModalButton;
