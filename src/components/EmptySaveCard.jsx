const EmptySaveCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2>Vacío</h2>
      <button className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover h-12 w-[15.3rem] flex justify-center items-center text-white font-bold py-2 px-4 rounded">
        Crear
      </button>
    </div>
  );
};

export default EmptySaveCard;
