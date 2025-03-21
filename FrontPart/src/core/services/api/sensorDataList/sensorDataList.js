import api from "../../interceptor/index.interceptor.js";

const sensorDataListApi = async (value) => {
  try {
    const response = await api.get("/sensor-data", {
      params: value,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export default sensorDataListApi;
