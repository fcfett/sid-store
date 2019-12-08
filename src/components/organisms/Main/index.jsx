import React, { useContext, createRef } from 'react';
import './style.scss';

import { StoreContext } from '../../../store/Store';
import { ModalContext } from '../../../store/Modal';
//import { sortByKey } from "../../../utils/helpers";
import Loader from '../../atoms/Loader';
import Dropdown from '../../molecules/Dropdown';
import Table from '../Table';
import ClientInfo from '../ClientInfo';
import Actions from '../../../utils/actions';

export default () => {
  const { state: store /*, setState: setStore*/ } = useContext(StoreContext);
  const { setState: setModal } = useContext(ModalContext);

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

  const dropdownRef = createRef();
  const dropdownOptions = [
    { key: 'Maior Valor Total', value: 'valorTotal' },
    { key: 'Maior Número de Compras em 2018', value: 'quantidadeCompras2018' },
    { key: 'Maior compra de 2019 (Valor)', value: 'maiorCompra2019Valor' },
    { key: 'Maior compra de 2019 (Número de Itens)', value: 'maiorCompra2019Volume' }
  ];
  const parksDropdownOptionModel = {
    key: 'key',
    value: {
      parkId: 'id'
    }
  };

  return (
    <main>
      <section className="card">
        <h1>Clientes</h1>
        {(!store.loaded && <Loader />) || (
          <>
            <Dropdown id="filters-dropdown" ref={dropdownRef} data={dropdownOptions} model={parksDropdownOptionModel} />
            <Table id="users-list" data={store.data} loaded={store.loaded} columns={columns} actions={actions} />
          </>
        )}
      </section>
    </main>
  );
};
