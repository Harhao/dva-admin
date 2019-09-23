import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from "./routes/Index/IndexPage";
import Login from "./routes/Login/Login"
import NoMatch from "./components/NoMatch";
function RouterConfig({ history }) {
	return (
		<Router history={history}>
			<Switch>
				<Route path = "/login" component={Login} key="login"/>
				<Route path = '/' component = {IndexPage} key="dashborad"/>
				<Route component={NoMatch} key="noMatch"/>
			</Switch>
		</Router>
	);
}

export default RouterConfig;
