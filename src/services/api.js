import axios from "axios";

export const api = axios.create({
  baseURL: "http://www.mocky.io/v2/"
});

export const getClients = async userId => {
  const route = `/5de67e9f370000540009242b`;
  return await api.get(route);
};

export const getHistory = async userId => {
  const route = `/5de687643700005f00092463`;
  return await api.get(route);
};

export default api;
