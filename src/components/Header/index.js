import React from "react";
import { connect } from "dva";
import { Avatar, Badge, Icon, Dropdown, Popover } from 'antd';
import menu from '../menu/lang.js';
import settings from '../menu/settings.js';
import Notice from '../Notice';
import styles from './index.scss'
class Header extends React.Component {
    render() {
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
                    <Dropdown overlay={settings} placement="bottomCenter">
                        <div>
                            <Avatar shape="circle" icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ marginLeft: '20px' }} />
                            <span>{this.props.userInfo.name}</span>
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
function mapStateToProps(state) {
    return {
        userInfo: state.global.userInfo
    }
}
export default connect(mapStateToProps)(Header)