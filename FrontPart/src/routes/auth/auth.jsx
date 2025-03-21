import AuthLayout from "../../components/layout/auth/Auth";
import Login from "../../pages/auth/Login/Login";
import RegisterStep1 from "../../pages/auth/Register/RegisterStep1";
import RegisterStep2 from "../../pages/auth/Register/RegisterStep2";
import RegisterStep3 from "../../pages/auth/Register/RegisterStep3";

const authRoutes = [
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup-1", element: <RegisterStep1 /> },
      { path: "signup-2", element: <RegisterStep2 /> },
      { path: "signup-3", element: <RegisterStep3 /> },
    ],
  },
];

export default authRoutes;
