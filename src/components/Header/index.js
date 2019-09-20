import React from "react";
import { Avatar, Badge,Icon,Menu,Dropdown} from 'antd';
import styles from './index.scss'
export default class Header extends React.Component{
    render(){
        const menu = (
            <Menu style={{marginTop:'8px',width:'100px'}}>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    cn 简体中文
                </a>
                </Menu.Item>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    us English
                </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className={styles.header}>
                <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} className={styles.fold} onClick={this.props.toggleCollapsed}/>
                <div className={styles.personSection}>
                    <Badge count={4}>
                        <Icon type="bell" style={{fontSize:'20px',marginTop:'5px'}}/>
                    </Badge>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <div>
                            <Avatar shape="circle" icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{marginLeft:'20px'}}/>
                            <span>admin</span>
                        </div>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Icon type="slack" style={{fontSize:'22px',marginLeft:'20px'}}/>
                    </Dropdown>
                </div>
            </div>
        );
    }
}