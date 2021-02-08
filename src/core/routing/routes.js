import Home from 'Pages/Homepage';
import Info from 'Pages/Info';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/info',
        exact: true,
        component: Info
    }
];
