import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from "./routes/Index/IndexPage"
import Login from "./routes/Login/Login"
function RouterConfig({ history }) {
  const routers = [
    {
		path:'/',
		component: IndexPage
	},
	{
		path:'/login',
		component: Login
	}
  ];
  console.log(routers);
  return (
    <Router history={history}>
      <Switch>
		{
			routers.map((item,i) => (<Route key={i} path={item.path} component={item.component} exact/>))
		}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
