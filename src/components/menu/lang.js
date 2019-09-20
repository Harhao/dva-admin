import React from 'react';
import { Menu } from 'antd';
function menu(){
    return (
        <Menu style={{marginTop:'15px',width:'150px'}}>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    CN 简体中文
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer">
                    US English
                </a>
            </Menu.Item>
        </Menu>
    );
}

export default menu;