import React, { useState, createContext } from "react";
import { deepCopy } from "../../utils/helpers";

const INITIAL_STATE = {
  visible: false,
  title: "Atenção",
  message: null,
  content: null,
  confirm: {
    label: "Confirmar",
    action: null
  },
  cancel: {
    label: "Cancelar",
    action: null
  }
};

export const getInitialState = () => deepCopy(INITIAL_STATE);

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const updateState = payload => setState(state => ({ ...state, ...payload }));

  const providerValue = {
    state,
    setState: updateState
  };

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default {
  ModalContext,
  ModalProvider,
  getInitialState
};
