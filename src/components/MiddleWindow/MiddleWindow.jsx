import React from 'react';
import style from './MiddleWindow.module.scss';
import MiddleList from '../middleList/MiddleList';
import Pagination from './Pagination';
import MiddleHeader from './MiddleHeader';

const MiddleWindow = () => {
  return (
    <div className={style.root}>
      <MiddleHeader />
      <MiddleList />
      <Pagination />
    </div>
  );
};

export default MiddleWindow;
