import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getItemGeneric } from "./../../core/services/storage/index.storage";
import useSensorDataList from "../../core/hooks/sensorDataList/sensorDataList";

export default function Home() {
  const token = getItemGeneric("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token, navigate]);

  return (
    <div>
      <div className="h-24 w-full bg-sky-500 text-white flex justify-center items-center">
        <h1 className="font-bold text-3xl">Sensor Data</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
