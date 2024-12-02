import axios from "axios";
import Keychain from "react-native-keychain";

const api = axios.create({
  baseURL: "https://example.com/api",
});

api.interceptors.request.use(
  async (config) => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      config.headers.Authorization = `Bearer ${credentials.password}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
