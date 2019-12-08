import React from 'react';
import './style.scss';

export default ({ nome, cpf }) => {
  return (
    <ul>
      <li>
        Nome: <strong>{nome}</strong>
      </li>
      <li>
        CPF: <strong>{cpf}</strong>
      </li>
    </ul>
  );
};
