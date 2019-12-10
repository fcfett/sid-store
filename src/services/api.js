import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://www.mocky.io/v2/'
});

export const getClients = (userId) => {
  const route = `/5de67e9f370000540009242b`;
  return api.get(route);
};

export const getHistory = (userId) => {
  const route = `/5de687643700005f00092463`;
  return api.get(route);
};

export default api;
