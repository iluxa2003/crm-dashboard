import React from 'react';
import style from './Pagination.module.scss';

const Pagination = () => {
  return (
    <div className={style.root}>
      <span className={style.left_text}>
        Showing data 1 to 8 of 256k entries
      </span>
      <span className={style.right_pages}>
        <label className={style.pagination_buttons}>{'<'}</label>
        <label className={style.pagination_buttons + ' ' + style.active}>
          1
        </label>
        <label className={style.pagination_buttons}>2</label>
        <label className={style.pagination_buttons}>3</label>
        <label className={style.pagination_buttons}>4</label>
        <span>...</span>
        <label className={style.pagination_buttons}>40</label>
        <label className={style.pagination_buttons}>{'>'}</label>
      </span>
    </div>
  );
};

export default Pagination;
