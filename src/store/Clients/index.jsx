import React, { useState, useEffect, createContext } from "react";
import {
  fetchStoreRequest,
  getLocalStorageObject,
  setLocalStorageObject
} from "../../utils/helpers";
import { getClients } from "../../services/api";

const LOCAL_STORAGE_ID = "sid-store-clients";
const INITIAL_STATE = {
  data: [],
  loaded: true
};

const getLocalStorageState = () => {
  const lsState = getLocalStorageObject(LOCAL_STORAGE_ID);
  return !lsState ? INITIAL_STATE : lsState;
};

const setLocalStorageState = state =>
  setLocalStorageObject(LOCAL_STORAGE_ID, state);

export const ClientsContext = createContext();
export const ClientsProvider = ({ children }) => {
  const [state, setState] = useState(getLocalStorageState());
  const updateState = payload => setState(state => ({ ...state, ...payload }));

  const providerValue = {
    state,
    setState: updateState
  };

  useEffect(() => {
    setLocalStorageState(state);
  }, [state]);

  useEffect(() => {
    if (state.data.length === 0) fetchStoreRequest(getClients, updateState);
  }, []); // eslint-disable-line

  return (
    <ClientsContext.Provider value={providerValue}>
      {children}
    </ClientsContext.Provider>
  );
};

export default {
  ClientsContext,
  ClientsProvider
};
