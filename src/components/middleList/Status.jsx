import React from 'react';
import style from './Status.module.scss';

const Status = ({ status }) => {
  if (status) {
    return <td className={style.active}>Active</td>;
  } else if (!status) {
    return <td className={style.inactive}>Inactive</td>;
  } else {
    return <td>Status</td>;
  }
};

export default Status;
