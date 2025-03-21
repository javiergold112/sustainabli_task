import { useMutation } from "@tanstack/react-query";
import newSensorDataApi from "../../services/api/newSensorData/newSensorData";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useNewSensorData = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data) => await newSensorDataApi(data),
    onSuccess: (input) => {
      toast.success(input.message);
      navigate("/");
    },
    onError: (error) => {
      console.error("Error creating sensor data:", error);
      toast.error(`Error creating sensor data`);
    },
  });
};
