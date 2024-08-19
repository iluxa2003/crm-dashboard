import React from 'react';
import style from './ListComponent.module.scss';
import Status from './Status';

const ListComponent = ({
  customerName,
  company,
  phone,
  email,
  country,
  status,
}) => {
  return (
    <div className={style.root}>
      <span>{customerName}</span>
      <span>{company}</span>
      <span>{phone}</span>
      <span>{email}</span>
      <span>{country}</span>
      <Status status={status} />
    </div>
  );
};

export default ListComponent;
