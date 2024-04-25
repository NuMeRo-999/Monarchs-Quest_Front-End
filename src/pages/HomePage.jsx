import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-auto font-pixel size-screen bg-gradient ">
      <div className=" bg-[url('src/assets/images/background.png')] bg-[length:150px_150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
        <div className="bg-gradient-2"></div>
        <div className="bg-[url('src/assets/images/home.png')] bg-cover h-4/5 w-1/2 flex flex-col justify-center z-10">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-72"
              src="src/assets/images/MonarchQuest.png"
              alt=""
            />
            <button
              type="submit"
              className="rounded-full leading-4 text-2xl bg-red-800 h-8 mt-5 text-white w-52"
            >
              Jugar
            </button>
            <Link
              to={"/login"}
              className="rounded-full leading-4 text-2xl bg-red-800 h-8 mt-5 text-white w-52 text-center pt-2"
            >
              Salir
            </Link>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center mt-5">
              <h2 className="text-3xl font-bold ">Créditos</h2>
              <p className="text-lg">Desarrollado por Pedro Vílchez</p>
              <div className="flex gap-5 justify-center items-center">
                <a href="https://github.com/NuMeRo-999" target="_blank" rel="noopener noreferrer">
                  <img
                    className="size-10"
                    src="src/assets/images/github-icon.png"
                    alt=""
                  />
                </a>
                <a href="https://www.linkedin.com/in/pedro-vílchez-peña-4669292b0/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="size-10"
                    src="src/assets/images/linkedin-icon.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
