import api from "../../interceptor/index.interceptor.js";

const sensorDataListApi = async (data) => {
  try {
    const response = await api.post("/sensor-data", data);

    return response;
  } catch (error) {
    throw error;
  }
};
export default sensorDataListApi;
