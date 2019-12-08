import React from "react";

import { ModalProvider } from "./Modal";
import { StoreProvider } from "./Store";
import { ClientsProvider } from "./Clients";
import { HistoryProvider } from "./History";

export default ({ children }) => (
  <ClientsProvider>
    <HistoryProvider>
      <StoreProvider>
        <ModalProvider>{children}</ModalProvider>
      </StoreProvider>
    </HistoryProvider>
  </ClientsProvider>
);
