import React from "react";
// import styles from './index.scss';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class Notice extends React.Component {
    callback(key) {
        console.log(key);
    }
  
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} tabBarStyle={{textAlign:'center',width:'250px'}}>
                <TabPane tab="通知" key="1">
                    消息提示
                </TabPane>
                <TabPane tab="消息" key="2">
                    消息提示
                </TabPane>
                <TabPane tab="待办" key="3">
                    消息提示
                </TabPane>
            </Tabs>
        );
    }

}
export default Notice;