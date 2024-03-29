import React from 'react';
import { connect } from 'dva';
import { Route, Switch, Redirect} from 'dva/router';
import { TransitionGroup,CSSTransition } from "react-transition-group";
import NavMenu from "../../components/NavMenu";
import styles from './IndexPage.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { boardRoutes } from '../../common/routes';
class IndexPage extends React.Component{
	state = {
		collapsed: false,
	};

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	render(){
		return (
			<div className={styles.wrap}>
				<NavMenu collapsed={this.state.collapsed}/>
				<div className={styles.contentWrap}>
					<Header toggleCollapsed={this.toggleCollapsed.bind(this)} collapsed={this.state.collapsed}/>
					<div className={styles.main}>
						<TransitionGroup>
							<CSSTransition
								classNames="fade"
								timeout={1000}
							>
								<Switch>
									{
										boardRoutes.map((item,index) => {
											return (
												this.props.isAuth?<Route path={item.path} component={item.component} key={item.key} exact/>:<Redirect to="/login" key={index}/>
											);
										})
									}
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					</div>
					<Footer/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		isAuth : state.global.isAuth
	}
}

export default connect(mapStateToProps)(IndexPage);
