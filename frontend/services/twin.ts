import api from "./api";

export const generateTwin = async (
  profile: any
) => {
  const response = await api.post(
    "/twin",
    profile
  );

  return response.data;
};