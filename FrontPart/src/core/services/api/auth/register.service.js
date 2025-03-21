import api from "../../interceptor/index.interceptor.js";

export const registerStep1 = async (value) => {
  try {
    const response = await api.post("/auth/local/signup/step1", value);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerStep2 = async (value) => {
  try {
    const response = await api.post("/auth/local/signup/step2", value);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerStep3 = async (value) => {
  try {
    const response = await api.post("/auth/local/signup/step3", value);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const registerUserAPI = async (value) => {
  try {
    const response = await api.post("/auth/local/register", value);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const registerAdminAPI = async (value) => {
  try {
    const response = await api.post("/auth/local/register/admin", value);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const registerSuperAdminAPI = async (value) => {
  try {
    const response = await api.post("/auth/local/register/super-admin", value);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { registerUserAPI, registerAdminAPI, registerSuperAdminAPI };
