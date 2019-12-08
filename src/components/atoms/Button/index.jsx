import React from 'react';
import './style.scss';

export default (props) => {
  const { renderOn, children, ...attributes } = props;
  return <button {...attributes}>{children}</button>;
};
