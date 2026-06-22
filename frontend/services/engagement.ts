import api from "./api";

export const generateEngagement =
  async (profile: any) => {
    const response =
      await api.post(
        "/engagement",
        profile
      );

    return response.data;
  };