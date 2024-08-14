import React from "react";
import style from "./leftMenu.module.scss"
import evano from "../../images/Evano.svg"

const LeftMenu = () =>{
    return(<div className={style.leftMenu}>
        <h1>Dahboard</h1>
        <ul className={style.leftMenu_list}>
            <li>Dashboard</li>
            <li>Product</li>
            <li>Customers</li>
            <li>Income</li>
            <li>Promote</li>
            <li>Help </li>
        </ul>
        <div>
            <div><img src={evano} alt=""/></div>
            <div>Evano</div>
            <div>Project Menager</div>
        </div>
    </div>);
};

export default LeftMenu;