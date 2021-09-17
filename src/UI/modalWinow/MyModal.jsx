import React from 'react';
import {Modal} from "antd";
import style from './MyModal.module.css'
import TC from '../../Assets/TC.png'
import TD from '../../Assets/TD.png'
import TR from '../../Assets/TR.png'

const MyModal = ({getElement, title, visible, setVisible}) => {
    return (
        <Modal visible={visible}
               onOk={() => setVisible(false)}
               closable={false}
        >

            {getElement && (
                <>
                    <div className={style.title}>{getElement.Country}</div>
                    <table className={style.table}>
                        <tbody>
                        <tr>
                            <td className={style.tdImg}><img src={TC} alt="TotalConfirmed" className={style.icon}/></td>
                            <td className={style.tdText}>Total Confirmed:</td>
                            <td className={`${style.tdText} ${style.textAlignEnd}`}> {getElement.TotalConfirmed}</td>
                        </tr>
                        <tr>
                            <td className={style.tdImg}><img src={TD} alt="TotalConfirmed" className={style.icon}/></td>
                            <td className={style.tdText}>Total Deaths:</td>
                            <td className={`${style.tdText} ${style.textAlignEnd}`}>{getElement.TotalDeaths}</td>
                        </tr>
                        <tr>
                            <td className={style.tdImg}><img src={TR} alt="TotalConfirmed" className={style.icon}/></td>
                            <td className={style.tdText}>Total Recovered:</td>
                            <td className={`${style.tdText} ${style.textAlignEnd}`}>{getElement.TotalRecovered}</td>
                        </tr>
                        </tbody>
                    </table>
                </>)}
        </Modal>
    );
};

export default MyModal;