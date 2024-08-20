import React from 'react';
import style from './leftMenu.module.scss';
import evano from '../../images/Evano.svg';
import key from '../../images/key-square.svg';
import square from '../../images/3d-square.svg';
import user from '../../images/user-square.svg';
import money from '../../images/wallet-money.svg';
import discount from '../../images/discount.svg';
import question from '../../images/message-question.svg';
import logo from '../../images/setting.svg';
import ListComponent from './ListComponent';

const LeftMenu = () => {
  return (
    <div className={style.root}>
      <div className={style.top_container}>
        <h1 className={style.logo}>
          <img src={logo} alt="" />
          <span>
            Dashboard<span className={style.s_text}>v.01</span>
          </span>
        </h1>
        <ul className={style.root_list}>
          <ListComponent image={key} text={'Dashboard'} />
          <ListComponent image={square} text={'Product'} />
          <ListComponent image={user} text={'Customers'} />
          <ListComponent image={money} text={'Income'} />
          <ListComponent image={discount} text={'Promote'} />
          <ListComponent image={question} text={'Help'} />
        </ul>
      </div>

      <div className={style.bottom_text_wrap}>
        <div className="">
          <img src={evano} alt="" />
        </div>
        <div className={style.bottom_text}>
          <div className={style.m_text}>Evano</div>
          <div className={style.s_text}>Project Manager</div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
