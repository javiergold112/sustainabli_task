import api from "../../interceptor/index.interceptor.js";

const loginUserAPI = async (value) => {
  try {
    const response = await api.post("/auth/local/login", value);

    return response;
  } catch (error) {
    throw error;
  }
};
export default loginUserAPI;
