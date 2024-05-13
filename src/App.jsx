import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import RegisterPage from "./pages/RegisterPage";
import GamePage from "./pages/GamePage";
import SavesPage from "./pages/SavesPage";
import RankingPage from "./pages/RankingPage";

function App() {
  document.body.style.cursor = "url('/src/assets/icons/sword_02b.png'), auto";
  
  const [logged, setLogged] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute isActive={true} redirectPath="/login" />,
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
    // <AuthProvider>
      <RouterProvider router={router} />
    // </AuthProvider>
  );
}

export default App