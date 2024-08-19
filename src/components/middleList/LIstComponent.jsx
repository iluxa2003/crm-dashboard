import React from 'react';
import style from './ListComponent.module.scss';

const ListComponent = ({
  customerName,
  company,
  phone,
  email,
  country,
  status,
}) => {
  return <div className={style.root}></div>;
};

export default ListComponent;
