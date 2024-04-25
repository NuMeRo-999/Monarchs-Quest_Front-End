import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import RegisterPage from "./pages/RegisterPage";

function App() {

  const [logged, setLogged] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute isActive={true} redirectPath="/login" />,
          children: [
            {
              index: true,
              element: <HomePage />,
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