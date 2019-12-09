import React from 'react';
import './style.scss';

import Mutations from '../../../utils/mutations';

export default (props) => {
  const { nome, cpf, quantidadeCompras2018, maiorCompra2019Valor, maiorCompra2019Volume, recomendacao } = props;

  return (
    <ul className="client-info">
      <li>
        Nome <strong>{nome}</strong>
      </li>
      <li>
        CPF <strong>{cpf}</strong>
      </li>
      <li>
        Quantidade de compras em 2018 <strong>{quantidadeCompras2018}</strong>
      </li>
      <li>
        Maior total único em 2019 <strong>{Mutations.FormatMoney(maiorCompra2019Valor)}</strong>
      </li>
      <li>
        Maior volume único em 2019 <strong>{maiorCompra2019Volume}</strong>
      </li>
      <li>
        Produto recomendado <strong>{recomendacao}</strong>
      </li>
    </ul>
  );
};
