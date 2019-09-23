import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import IndexPage from "./routes/Index/IndexPage";
// import Login from "./routes/Login/Login"
import NoMatch from "./components/NoMatch";

function RouterConfig({ history, app }) {
	const Login = dynamic({
		app,
		models: () => [
		  import('./models/login'),
		],
		component: () => import('./routes/Login/Login'),
	});
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
