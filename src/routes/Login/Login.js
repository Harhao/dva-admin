import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from "dva";
import styles from './login.scss';
class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.dispatch({type:'login/loginSystem',payload:values});
          }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.loginWrap}>
                <div className={styles.mask}></div>
                <div className={styles.loginForm}>
                    <div className={styles.title}>DvaJS-Admin</div>
                    <Form onSubmit={this.handleSubmit} className={styles.loginInput}>
                        <Form.Item>
                            {
                                getFieldDecorator('username', {rules: [{ required: true, message: '请输入你的账号!' }],})(
                                <Input
                                    size="large"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="账号"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入你的密码!' }],
                            })(
                                <Input
                                    size="large"
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className={styles.loginForgot} href="">
                                忘记密码
                            </a>
                            <Button type="primary" htmlType="submit" className={styles.loginButton} size="large">
                                登录
                            </Button>
                            或 <a href="">注册账号</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
const wrappLogin = Form.create({ name:'login' })(Login);
export default connect(({login}) => ({login}))(wrappLogin);