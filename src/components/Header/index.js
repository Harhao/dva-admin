import React from "react";
import {Icon} from "antd"
import styles from './index.scss'
export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={styles.header}>
                <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} className={styles.fold} onClick={this.props.toggleCollapsed}/>
            </div>
        );
    }
}