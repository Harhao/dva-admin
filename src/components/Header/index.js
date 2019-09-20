import React from "react";
import { connect } from "dva";
import { Avatar, Badge, Icon, Dropdown, Popover,Menu } from 'antd';
import menu from '../menu/lang.js';
// import Settings from '../menu/settings.js';
import Notice from '../Notice';
import styles from './index.scss'
class Header extends React.Component {
    render() {
        console.log("##",this.props)
        const { dispatch } = this.props;
        const Settings = (
            <Menu style={{marginTop:'5px',width:'150px'}}>
                <Menu.Item>
                    <Icon type="setting" />
                    <span>系统设置</span>
                </Menu.Item>
                <Menu.Item>
                    <Icon type="user" />
                    <span>个人中心</span>
                </Menu.Item>
                <Menu.Item>
                    <Icon type="logout" />
                    <span onClick={() => dispatch({type:'global/setAuth'})}>退出登录</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className={styles.header}>
                <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} className={styles.fold} onClick={this.props.toggleCollapsed} />
                <div className={styles.personSection}>
                    <Icon type="fullscreen" style={{ fontSize: '20px', marginTop: '5px', marginRight: '20px' }} />
                    <Popover content={<Notice />} placement="top">
                        <Badge count={4}>
                            <Icon type="bell" style={{ fontSize: '20px', marginTop: '5px' }} />
                        </Badge>
                    </Popover>
                    <Dropdown overlay={Settings} placement="bottomCenter">
                        <div>
                            <Avatar shape="circle" icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ marginLeft: '20px' }} />
                            <span>{this.props.global.userInfo.name}</span>
                        </div>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Icon type="slack" style={{ fontSize: '22px', marginLeft: '20px' }} />
                    </Dropdown>
                </div>
            </div>
        );
    }
}
export default connect(({global}) => ({global}))(Header)