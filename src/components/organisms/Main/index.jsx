import React, { useContext, createRef } from 'react';
import './style.scss';

import { StoreContext } from '../../../store/Store';
import { ModalContext } from '../../../store/Modal';
import { sortByKey, areEqualObjects } from '../../../utils/helpers';
import Mutations from '../../../utils/mutations';

import Loader from '../../atoms/Loader';
import Dropdown from '../../molecules/Dropdown';
import Table from '../Table';
import ClientInfo from '../ClientInfo';
import Actions from '../../../utils/actions';

export default () => {
  const { state: store, setState: setStore } = useContext(StoreContext);
  const { setState: setModal } = useContext(ModalContext);
  const { data, loaded } = store;

  const detail = (client) => {
    const title = 'Dados do Cliente';
    const content = <ClientInfo {...client} />;
    setModal({ visible: true, content, title });
  };

  const columns = {
    nome: 'Cliente',
    cpf: 'CPF',
    valorTotal: 'Total em Compras'
  };

  const dataClasses = {
    'maior-valor': (item) => item.hasOwnProperty('maiorValor'),
    'maior-volume': (item) => item.hasOwnProperty('maiorVolume')
  };

  const mutations = {
    valorTotal: { handler: Mutations.FormatMoney }
  };

  const totalizers = {
    valorTotal: Mutations.TotalizerType.SUM
  };

  const actions = [
    {
      action: Actions.detail,
      handler: detail
    }
  ];

  const dropdownRef = createRef();
  const dropdownOptions = [
    { name: 'Menor valor total', value: { key: 'valorTotal', order: 'ASC' } },
    { name: 'Maior número de compras em 2018', value: { key: 'quantidadeCompras2018', order: 'DESC' } }
  ];

  const parksDropdownOptionModel = {
    key: 'name',
    value: 'value'
  };

  const sortData = () => {
    const dropdown = dropdownRef.current;
    if (dropdown) {
      const { selected } = dropdown.state;
      const {
        value: { key, order }
      } = selected[0] || {};
      const sortedData = sortByKey(data.slice(), key, order === 'ASC');
      if (!areEqualObjects(data, sortData)) {
        setStore({ data: [] });
        setTimeout(() => {
          setStore({ data: sortedData });
        });
      }
    }
  };

  return (
    <main>
      <section className="card">
        <header>
          <h1>Clientes</h1>
          {store.loaded && (
            <aside>
              <Dropdown
                id="filters-dropdown"
                ref={dropdownRef}
                data={dropdownOptions}
                model={parksDropdownOptionModel}
                selected={dropdownOptions[0]}
                onChange={sortData}
              />
            </aside>
          )}
        </header>
        {(!store.loaded && <Loader />) || (
          <Table
            id="client-list"
            data={data}
            dataClasses={dataClasses}
            loaded={loaded}
            columns={columns}
            mutations={mutations}
            actions={actions}
            totalizers={totalizers}
          />
        )}
      </section>
    </main>
  );
};
