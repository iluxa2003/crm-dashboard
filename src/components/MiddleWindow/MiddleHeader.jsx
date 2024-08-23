import React from 'react';
import style from './MiddleHeader.module.scss';
import Search from './Search';

const MiddleHeader = () => {
  return (
    <div className={style.root}>
      <div>
        <h2 className={style.header_text}>All Customers</h2>
        <span className={style.green_text}>Active members</span>
      </div>
      <Search />
    </div>
  );
};

export default MiddleHeader;
