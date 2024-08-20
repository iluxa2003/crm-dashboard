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
    <tr className={style.root}>
      <td>{customerName}</td>
      <td>{company}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{country}</td>
      {status === 'default' ? <td>Status</td> : <Status status={status} />}
    </tr>
  );
};

export default ListComponent;
