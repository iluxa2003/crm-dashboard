import React from 'react';
import style from './MiddleList.module.scss';
import ListComponent from './LIstComponent';

const MiddleList = ({ list = [] }) => {
  return (
    <div className={style.root}>
      <table>
        <tbody>
          <ListComponent
            customerName={'Customer Name'}
            company={'Company'}
            phone={'Phone Number'}
            email={'Email'}
            country={'Country'}
            status={'default'}
          />
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
        </tbody>
      </table>
    </div>
  );
};

export default MiddleList;
