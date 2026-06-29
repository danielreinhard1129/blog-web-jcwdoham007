import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://cozyberry-us.backendless.app/api",
});
