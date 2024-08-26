import React from 'react';
import style from './Search.module.scss';
import search from '../../images/search.svg';
const Search = () => {
  return (
    <div className={style.root}>
      <input className={style.search_input} placeholder="       Search"></input>
      <img className={style.search_img} src={search} alt="" />
    </div>
  );
};

export default Search;
