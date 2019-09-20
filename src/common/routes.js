import {Switch,Route} from "dva/router";
import Count from '../routes/Count';
export const boardRoutes = [
    {
        key:'count',
        path:'/dashboard/count',
        component: Count
    },
];