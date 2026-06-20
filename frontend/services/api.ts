import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export default api;

export const generateTwin = async (
  profile: any
) => {
  const response = await api.post(
    "/twin",
    profile
  );

  return response.data;
};