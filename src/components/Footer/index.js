import React from "react";
import styles from './index.scss';
import {Icon} from "antd"
export default class Footer extends React.Component{
    render(){
        return(
            <div className={styles.footer}>
                <Icon type="github" style={{fontSize:'24px',marginTop:'10px'}}/>
                <div className={styles.info}>
                    <span className={styles.project}>dva-admin</span>
                </div>
                <div className={styles.copyRight}>
                    Copyright © {new Date().getFullYear()} Harhao
                </div>
            </div>
        );
    }
}