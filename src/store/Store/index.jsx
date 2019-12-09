import React, { useState, useEffect, createContext, useContext } from 'react';
import { getMaxValue, getHigherOccurrence, getLocalStorageObject, setLocalStorageObject } from '../../utils/helpers';
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

  const setGreaterValues = (data) => {
    const clienteMaiorValor = data.reduce((prev, current) =>
      prev.maiorCompra2019Valor > current.maiorCompra2019Valor ? prev : current
    );
    const clienteMaiorVolume = data.reduce((prev, current) =>
      prev.maiorCompra2019Volume > current.maiorCompra2019Volume ? prev : current
    );

    data.forEach((client) => {
      if (client.id === clienteMaiorValor.id) client.maiorValor = true;
      if (client.id === clienteMaiorVolume.id) client.maiorVolume = true;
    });

    return data;
  };

  const getRefinedData = (clients, history) => {
    const data = [];
    for (const client of clients.data) {
      const historico = history.data.filter((h) => +h.cliente.replace(/\./g, '') === client.id);
      const valorTotal = historico.reduce((acc, compra) => acc + compra.valorTotal, 0);
      const compras2018 = historico.filter((compra) => compra.data.includes('2018'));
      const compras2019 = historico.filter((compra) => compra.data.includes('2019'));
      const quantidadeCompras2018 = compras2018.length;
      const maiorCompra2019Valor = getMaxValue(compras2019.map((compra) => compra.valorTotal));
      const maiorCompra2019Volume = getMaxValue(compras2019.map((compra) => compra.itens.length));
      const recomendacao = getHigherOccurrence(historico.flatMap((compra) => compra.itens.map((item) => item.produto)));
      data.push({
        ...client,
        historico,
        valorTotal,
        quantidadeCompras2018,
        maiorCompra2019Valor,
        maiorCompra2019Volume,
        recomendacao
      });
    }
    return data;
  };

  useEffect(() => {
    if (!hasStore && hasClients && hasHistory) {
      const data = setGreaterValues(getRefinedData(clients, history));
      updateState({ loaded: true, data });
    }
  }, [clients, history]); // eslint-disable-line

  return <StoreContext.Provider value={providerValue}>{children}</StoreContext.Provider>;
};

export default {
  StoreContext,
  StoreProvider
};
