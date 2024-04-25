
const Header = () => {
  return (
    <div className="flex items-center justify-around">
      <div className="p-2 pl-5 font-pixelify flex items-center justify-evenly gap-10">
        <div className="flex items-center gap-2">
          <img src="src/assets/images/coin_05d.png" alt="" />
          <p className="text-2xl">0</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="src/assets/images/skull_01a.png" alt="" />
          <p className="text-2xl">0</p>
        </div>
      </div>

      <div className="flex items-center gap-2 font-pixelify text-xl">
        <button className="leading-4 text-2xl bg-red-800 h-8 text-white w-52 text-center pt-2 font-bold py-2 px-4 rounded">
          Estadisticas
        </button>
        <button className="leading-4 text-2xl bg-blue-950 h-8 text-white w-52 text-center pt-2 font-bold py-2 px-4 rounded">
          Inventario
        </button>
        <button className="leading-4 text-2xl bg-red-800 h-8 text-white w-52 text-center font-bold rounded">
          Salir
        </button>
      </div>
    </div>
  )
}

export default Header