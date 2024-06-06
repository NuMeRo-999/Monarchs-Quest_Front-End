import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as apiLogin } from "../api/apiRequest";
import Spinner from "../components/Spinner";
import PlayAudio from "../utils/PlayAudio";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    PlayAudio("/sounds/Select2.ogg");
    try {
      setLoading(true);
      const response = await apiLogin("/api/login", { username, password });
      setLoading(false);

      if (response.code === 200) {
        login();
        navigate("/");
      } else {
        PlayAudio("/sounds/Error1.ogg");
        setError("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      setLoading(false);
      setError("Ocurrió un error al intentar iniciar sesión");
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-auto font-pixelify size-screen bg-gradient">
      <div className="bg-[url('/images/background.png')] bg-[length:150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
        <div className="bg-gradient-2"></div>
        <div className="bg-[url('/images/home.png')] bg-cover h-[90%] w-[56%] flex flex-col justify-center items-center z-10">
          <img className="w-96" src="/images/MonarchQuest.png" alt="" />
          {error ? (
            <div className="text-center text-2xl text-red-700">{error}</div>
          ) : (
            ""
          )}
          <form
            className="max-w-sm mx-auto w-full z-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col pt-5">
              <label htmlFor="username" className="text-3xl">
                Usuario
              </label>
              <input
                type="text"
                className="mb-3 rounded-md p-2"
                onChange={(e) => setUser(e.target.value)}
                value={username}
              />
              <label htmlFor="password" className="text-3xl">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="rounded-md w-full p-2"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-2 flex items-center"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <i className="fas fa-eye-slash"></i>
                  ) : (
                    <i className="fas fa-eye"></i>
                  )}
                </button>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 mt-5">
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    <button
                      type="submit"
                      className="image-cursor bg-[url('/images/button.png')] bg-cover leading-4 text-2xl w-52 h-10 text-white flex justify-center items-center"
                      onClick={handleSubmit}
                      onMouseEnter={() => PlayAudio("/sounds/Cursor1.ogg")}
                    >
                      Inicia Sesión
                    </button>
                    <Link
                      to={"/register"}
                      className="image-cursor bg-[url('/images/button.png')] bg-cover text-center leading-4 text-2xl w-52 h-10 text-white flex justify-center items-center"
                      onMouseEnter={() => PlayAudio("/sounds/Cursor1.ogg")}
                      onClick={() => PlayAudio("/sounds/Select2.ogg")}
                    >
                      Registrate
                    </Link>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
