import React, { useState, useEffect, createContext } from "react";
import {
  fetchStoreRequest,
  getLocalStorageObject,
  setLocalStorageObject
} from "../../utils/helpers";
import { getHistory } from "../../services/api";

const LOCAL_STORAGE_ID = "sid-store-history";
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

export const HistoryContext = createContext();
export const HistoryProvider = ({ children }) => {
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
    if (state.data.length === 0) fetchStoreRequest(getHistory, updateState);
  }, []); // eslint-disable-line

  return (
    <HistoryContext.Provider value={providerValue}>
      {children}
    </HistoryContext.Provider>
  );
};

export default {
  HistoryContext,
  HistoryProvider
};
