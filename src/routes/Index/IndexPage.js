import React from 'react';
import { connect } from 'dva';
import NavMenu from "../../components/NavMenu";
import styles from './IndexPage.scss';
import Header from '../../components/Header';
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
				</div>
			</div>
		);
	}
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);
