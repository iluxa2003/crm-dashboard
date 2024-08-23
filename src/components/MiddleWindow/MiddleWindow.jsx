import React from 'react';
import style from './MiddleWindow.module.scss';
import MiddleList from '../middleList/MiddleList';
import Pagination from './Pagination';
import MiddleHeader from './MiddleHeader';

const MiddleWindow = ({ list = [] }) => {
  return (
    <div className={style.root}>
      <MiddleHeader />
      <MiddleList list={list} />
      <Pagination />
    </div>
  );
};

export default MiddleWindow;
