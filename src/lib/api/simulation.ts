import { api } from ".";

export type Simulation = Partial<{
  id: number;
  name: string;
  payment: string;
  time: string;
}>;

/**
 * @param expression object with values of the simulation
 * @returns an object with values of the simulation
 */
interface ExpressionProps {
  payment: number;
  time: number;
}

export const simulate = async ({ payment, time }: ExpressionProps) => {
  const response = await api.post(
    "/",
    {
      expr: `${payment} * (((1 + 0.00517) ^ ${time} - 1) / 0.00517)`,
      precision: 6,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
