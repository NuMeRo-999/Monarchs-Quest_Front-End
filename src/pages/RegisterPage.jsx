import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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

        // console.log(JSON.stringify({ username, password }))
        try {
            const response = await fetch('http://127.0.0.1:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            // Almacenamos el token JWT en localStorage
            localStorage.setItem('token', data.token);

            navigate("/");
            console.log('Login successful');
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    const toggleShowPassword2 = () => {
      setShowPassword2(!showPassword2)
    }
    
    return (
        <div className="bg-auto font-pixel size-screen bg-gradient">
            <div className=" bg-[url('src/assets/images/background.png')] bg-[length:150px_150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
                <div className="bg-gradient-2"></div>
                <div className="bg-[url('src/assets/images/hoja4.png')] bg-cover shadow-2xl h-3/5 flex flex-col items-center justify-center p-20 py-80">
                <img className="size-96" src="src/assets/images/MonarchQuest.png" alt="" />
                    {error ?(<div>{error}</div>):('')}
                    <form className="max-w-sm mx-auto w-full z-10" onSubmit={handleSubmit}>
                        <div className="flex flex-col pt-10">
                            <label htmlFor="username" className="text-3xl">Usuario</label>
                            <input type="text"  className="mb-3 rounded-md p-2" onChange={e => setUser(e.target.value)} value={username}/>
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
                            <button type="submit" className="rounded-full leading-4 text-2xl bg-red-800 h-8 mt-5 text-white" onClick={handleSubmit}>Confirmar</button>
                            <Link to={'/login'} className="text-center pt-2 rounded-full leading-4 text-2xl bg-red-800 h-8 mt-5 text-white" >Inicia Sesión</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage