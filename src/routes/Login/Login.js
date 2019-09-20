import React from "react";
import styles from './login.scss';

class Login extends React.Component {
    render(){
        return (
            <div className={styles.loginWrap}>
                <div className={styles.mask}></div>
                <div className={styles.loginForm}>
                    <div className={styles.title}>DvaJS - Admin</div>
                    
                </div>
            </div>
        );
    }
}
export default Login;