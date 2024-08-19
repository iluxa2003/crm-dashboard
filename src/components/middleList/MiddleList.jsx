import React from 'react';
import style from './MiddleList.module.scss';
import ListComponent from './LIstComponent';

const MiddleList = ({ list = [] }) => {
  return (
    <div className={style.root}>
      <ListComponent
        customerName={'Kevin Libovski'}
        company={'Microsoft'}
        phone={'(208) 555-0121'}
        email={'kevinLibovski@gmail.com'}
        country={'Brazil'}
        status={true}
      />
      <ListComponent
        customerName={'Kevin Libovski'}
        company={'Microsoft'}
        phone={'(208) 555-0121'}
        email={'kevinLibovski@gmail.com'}
        country={'Brazil'}
        status={false}
      />
    </div>
  );
};

export default MiddleList;
