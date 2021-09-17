import React from 'react';
import {Header} from "antd/es/layout/layout";
import style from "./MyHeader.module.css"
import {Input} from "antd";

const MyHeader = (props) => {
    return (
        <Header className={style.header}>
            <div className={style.wrp}>
                <div className={style.logo}/>
                <h1 className={style.title}>STATISTIC</h1>
            </div>
            <Input {...props} className={style.input}/>
        </Header>
    );
};

export default MyHeader;