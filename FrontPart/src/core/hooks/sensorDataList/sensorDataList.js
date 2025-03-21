import { useQuery } from "@tanstack/react-query";
import sensorDataListApi from "../../services/api/sensorDataList/sensorDataList";

const useSensorDataList = (params) => {
  return useQuery({
    queryKey: ["sensorDataList", params],
    queryFn: () => sensorDataListApi(params),
  });
};

export default useSensorDataList;
