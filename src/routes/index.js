import Home from 'views/Home';
import Dashboard from 'layouts/Dashboard/Dashboard';

var indexRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Dashboard
  }
];

export default indexRoutes;