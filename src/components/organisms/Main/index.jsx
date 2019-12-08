import React, { useContext } from 'react';
import './style.scss';

import { StoreContext } from '../../../store/Store';
import { ModalContext } from '../../../store/Modal';
//import { sortByKey } from "../../../utils/helpers";
import Loader from '../../atoms/Loader';
import Table from '../Table';
import ClientInfo from '../ClientInfo';
import Actions from '../../../utils/actions';

export default () => {
  const { state: store /*, setState: setStore*/ } = useContext(StoreContext);
  const { /*state: modal,*/ setState: setModal } = useContext(ModalContext);

  const detail = (client) => {
    console.log(client);
    const title = 'Dados do Cliente';
    const content = <ClientInfo {...client} />;
    setModal({ visible: true, content, title });
  };

  const columns = {
    nome: 'Cliente',
    cpf: 'CPF'
  };

  const actions = [
    {
      action: Actions.detail,
      handler: detail
    }
  ];

  return (
    <main>
      <section className="card">
        <h1>Clientes</h1>
        {(!store.loaded && <Loader />) || (
          <Table id="users-list" data={store.data} loaded={store.loaded} columns={columns} actions={actions} />
        )}
      </section>
    </main>
  );
};
