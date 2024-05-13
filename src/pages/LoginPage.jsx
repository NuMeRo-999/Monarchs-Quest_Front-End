import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../api/apiRequest"
import ErrorModal from "../components/ErrorModal"
import Spinner from "../components/Spinner"

const LoginPage = () => {
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    // const { login } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await login('/api/login', { username, password });
            setLoading(false);

            if (response.code === 200) {
                navigate("/");
            } else {
                setError('Usuario o contraseña incorrectos')
            }
            
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }


    return (
        <div className="bg-auto font-pixel size-screen bg-gradient">
            <div className=" bg-[url('src/assets/images/background.png')] bg-[length:150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
                <div className="bg-gradient-2"></div>
                <div className="bg-[url('src/assets/images/home.png')] bg-cover h-[90%] w-[56%] flex flex-col justify-center items-center z-10">
            <ErrorModal/>
                <img className="w-96" src="src/assets/images/MonarchQuest.png" alt="" />
                    {error ?(<div className=" text-center text-2xl text-red-700">{error}</div>):('')}
                    <form className="max-w-sm mx-auto w-full z-10" onSubmit={handleSubmit}>
                        <div className="flex flex-col pt-5">
                            <label htmlFor="username" className="text-3xl">Usuario</label>
                            <input type="text"  className="mb-3 rounded-md p-2" onChange={e => setUser(e.target.value)} value={username}/>
                            <label htmlFor="password" className="text-3xl">Contraseña</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"}  className="rounded-md w-full p-2" onChange={e => setPassword(e.target.value)} value={password}/>
                                <button type="button" className="absolute inset-y-0 right-0 pr-2 flex items-center" onClick={toggleShowPassword}> {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>} </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-5 mt-5">
                                {loading ? (
                                    <Spinner/>
                                ) : (
                                    <>
                                        <button type="submit" className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover leading-4 text-2xl w-52 h-10 text-white flex justify-center items-center" onClick={handleSubmit}>Inicia Sesión</button>
                                        <Link to={'/register'} className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover text-center leading-4 text-2xl w-52 h-10 text-white flex justify-center items-center" >Registrate</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage