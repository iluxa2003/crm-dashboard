import React from 'react';
import style from './ListComponent.module.scss';
import chevron from '../../images/chevron-right.svg';

const ListComponent = ({ image, text }) => {
  return (
    <li className={style.root}>
      <span>
        <img src={image} alt="" />
      </span>
      <span>{text} </span>

      <img src={chevron} className={style.chevron} alt="" />
    </li>
  );
};

export default ListComponent;
