import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../api/apiRequest"
import PlayAudio from "../utils/PlayAudio"

const RegisterPage = () => {
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState(null)
    // const { login } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        PlayAudio("/src/assets/sounds/Select2.ogg")
        checkPasswordsMatch();

        if (error === null) {
            try {
                const response = await login('/register', { username, password });
    
                if (response.code === 200) {
                    navigate("/login");
                }
            } catch (error) {
                console.error('Login failed:', error);
            }
        }
    }

    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    const toggleShowPassword2 = () => {
      setShowPassword2(!showPassword2)
    }

    const checkPasswordsMatch = () => {
        if (password !== password2) {
            setError("Las contraseñas no coinciden");
        } else {
            setError(null);
        }
    };
    
    return (
        <div className="bg-auto font-pixelify size-screen bg-gradient">
            <div className=" bg-[url('/src/assets/images/background.png')] bg-[length:150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
                <div className="bg-gradient-2"></div>
                <div className="bg-[url('/src/assets/images/home.png')] bg-cover h-[90%] w-[56%] flex flex-col justify-center items-center z-10">
                <img className="w-96" src="/src/assets/images/MonarchQuest.png" alt="" />
                    {error ?(<div>{error}</div>):('')}
                    <form className="max-w-sm mx-auto w-full z-10" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="username" className="text-3xl">Usuario</label>
                            <input type="text"  className="rounded-md p-2" onChange={e => setUser(e.target.value)} value={username}/>
                            <label htmlFor="password" className="text-3xl">Contraseña</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"}  className="rounded-md w-full p-2" onChange={e => setPassword(e.target.value)} value={password}/>
                                <button type="button" className="absolute inset-y-0 right-0 pr-2 flex items-center" onClick={toggleShowPassword}> {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>} </button>
                            </div>
                            <label htmlFor="password" className="text-3xl">Repite la Contraseña</label>
                            <div className="relative">
                                <input type={showPassword2 ? "text" : "password"}  className="rounded-md w-full p-2" onChange={e => setPassword2(e.target.value)} value={password2}/>
                                <button type="button" className="absolute inset-y-0 right-0 pr-2 flex items-center" onClick={toggleShowPassword2}> {showPassword2 ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>} </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-3 mt-2">
                                <button type="submit" className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover leading-4 text-2xl w-52 h-10 text-white flex justify-center items-center" onClick={handleSubmit} onMouseEnter={() => PlayAudio("/src/assets/sounds/Cursor1.ogg")}>Confirmar</button>
                                <Link to={'/login'} className="image-cursor bg-[url('/src/assets/images/button.png')] bg-cover text-center leading-4 text-2xl w-52 h-10 text-white flex justify-center items-center" onMouseEnter={() => PlayAudio("/src/assets/sounds/Cursor1.ogg")} onClick={() => PlayAudio("/src/assets/sounds/Select2.ogg")}>Inicia Sesión</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage