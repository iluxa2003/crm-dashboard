import React from 'react';
import style from './Status.module.scss';

const Status = ({ status = true }) => {
  if (status) {
    return <div className={style.active}>Active</div>;
  } else {
    return <div className={style.inactive}>Inactive</div>;
  }
};

export default Status;
