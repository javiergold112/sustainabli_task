import { Outlet } from "react-router-dom";
import background from "../../../assets/BG.svg";
const AuthLayout = () => {
  return (
    <div className=" h-screen  flex justify-center items-center flex-wrap content-center gap-5">
      <img
        src={background}
        alt="background"
        className="absolute top-0 w-full h-full object-cover -z-1 bg-[#2148C0]"
      />

      <Outlet />
    </div>
  );
};

export default AuthLayout;
