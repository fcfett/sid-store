import React, { useState, useEffect, createContext, useContext } from 'react';
import { getMaxValue, getLocalStorageObject, setLocalStorageObject } from '../../utils/helpers';
import { ClientsContext } from '../Clients';
import { HistoryContext } from '../History';

const LOCAL_STORAGE_ID = 'sid-store-data';
const INITIAL_STATE = {
  data: [],
  loaded: true
};

const getLocalStorageState = () => {
  const lsState = getLocalStorageObject(LOCAL_STORAGE_ID);
  return !lsState ? INITIAL_STATE : lsState;
};

const setLocalStorageState = (state) => setLocalStorageObject(LOCAL_STORAGE_ID, state);

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [state, setState] = useState(getLocalStorageState());
  const updateState = (payload) => setState((state) => ({ ...state, ...payload }));

  const providerValue = {
    state,
    setState: updateState
  };

  useEffect(() => {
    setLocalStorageState(state);
  }, [state]);

  const { state: clients } = useContext(ClientsContext);
  const { state: history } = useContext(HistoryContext);

  const hasStore = state.loaded && state.data.length > 0;
  const hasClients = clients.loaded && clients.data.length > 0;
  const hasHistory = history.loaded && history.data.length > 0;

  useEffect(() => {
    if (!hasStore) updateState({ loaded: false });
  }, []); // eslint-disable-line

  const getRefinedData = (clients, history) => {
    const data = [];
    for (const client of clients.data) {
      const historico = history.data.filter((h) => +h.cliente.replace(/\./g, '') === client.id);
      const valorTotal = historico.reduce((acc, compra) => acc + compra.valorTotal, 0);
      const compras = {
        2018: historico.filter((compra) => compra.data.includes('2018')),
        2019: historico.filter((compra) => compra.data.includes('2019')),
        valorTotal
      };
      compras.quantidadeCompras2018 = compras['2018'].length;
      compras.maiorCompra2019 = {
        valor: getMaxValue(compras['2019'].map((compra) => compra.valorTotal)),
        volume: getMaxValue(compras['2019'].map((compra) => compra.itens.length))
      };

      const recomendacao = '';
      data.push({ ...client, compras, recomendacao });
    }
    return data;
  };

  useEffect(() => {
    if (!hasStore && hasClients && hasHistory) {
      const data = getRefinedData(clients, history);
      updateState({ loaded: true, data });
    }
  }, [clients, history]); // eslint-disable-line

  return <StoreContext.Provider value={providerValue}>{children}</StoreContext.Provider>;
};

export default {
  StoreContext,
  StoreProvider
};
