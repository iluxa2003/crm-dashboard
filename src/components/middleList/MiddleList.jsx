import React from 'react';
import style from './MiddleList.module.scss';
import ListComponent from './LIstComponent';

const MiddleList = ({ list = [] }) => {
  return (
    <div className={style.root}>
      <table className={style.root_table}>
        <thead>
          <th className={style.root_tableHead}>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </th>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <ListComponent
                key={Math.random()}
                customerName={item.customerName}
                company={item.company}
                phone={item.phone}
                email={item.email}
                country={item.country}
                status={item.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MiddleList;
