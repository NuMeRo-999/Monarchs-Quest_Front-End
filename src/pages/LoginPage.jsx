import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    // const { login } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();

        // console.log(JSON.stringify({ username, password }))
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
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

    return (
        <div className="bg-auto font-pixel size-screen bg-gradient">
            <div className=" bg-[url('src/assets/images/background.png')] bg-[length:150px_150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
                <div className="bg-gradient-2"></div>
                <div className="bg-[url('src/assets/images/home.png')] bg-cover h-4/5 w-1/2 flex flex-col justify-center z-10 p-48">
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
                            <button type="submit" className="rounded-full leading-4 text-2xl bg-red-800 h-8 mt-5 text-white" onClick={handleSubmit}>Inicia Sesión</button>
                            <Link to={'/register'} className="text-center rounded-full leading-4 text-2xl bg-red-800 h-8 mt-5 text-white pt-2" >Registrate</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage