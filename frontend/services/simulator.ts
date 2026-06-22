import api from "./api";

export const simulateHomePurchase = async (
  data: any
) => {
  const response = await api.post(
    "/simulate/home-purchase",
    data
  );

  return response.data;
};