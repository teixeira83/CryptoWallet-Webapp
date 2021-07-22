import IRoute from '../interfaces/route';
import { HomePage, LoginPage } from '../pages';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: '/login',
    name: 'Login Page',
    component: LoginPage,
    exact: true,
  },
];

export default routes;
