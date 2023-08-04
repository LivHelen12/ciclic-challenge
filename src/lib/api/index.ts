import axios from "axios";

export type Response<T> = {
  data: T;
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});
