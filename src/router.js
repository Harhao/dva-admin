import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import IndexPage from "./routes/Index/IndexPage"
import Login from "./routes/Login/Login"
function RouterConfig({ history }) {
  const routers = [
    {
		path:'/dashboard',
		component: IndexPage
	},
	{
		path:'/login',
		component: Login
	}
  ];
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
