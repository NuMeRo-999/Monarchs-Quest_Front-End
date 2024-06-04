import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GamePage from "./pages/GamePage";
import SavesPage from "./pages/SavesPage";
import RankingPage from "./pages/RankingPage";
import { AudioProvider } from "./context/AudioContext";
import { AuthContextProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  document.body.style.cursor = "url('/src/assets/icons/sword_02b.png'), auto";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRouteWithAuth />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "/saves",
              element: <SavesPage />,
            },
            {
              path: "/ranking",
              element: <RankingPage />,
            },
            {
              path: "/game/:gameId",
              element: <GamePage />,
            },
          ],
        },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
      ],
    },
  ]);

  return (
    <AuthContextProvider>
      <AudioProvider>
        <RouterProvider router={router} />
      </AudioProvider>
    </AuthContextProvider>
  );
}

const ProtectedRouteWithAuth = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return <ProtectedRoute isActive={true} redirectPath="/login" />;
};

export default App;
