import { api } from ".";

export type Simulation = Partial<{
  id: number;
  name: string;
  payment: string;
  time: string;
}>;

export const simulate = async (expression: object) => {
  const response = await api.post("/", { expression });
  return response.data;
};
