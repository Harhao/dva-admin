import React from 'react';
import { Menu, Icon } from 'antd';
function setting(){
    return (
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
                <span>退出登录</span>
            </Menu.Item>
        </Menu>
    );
}

export default setting;