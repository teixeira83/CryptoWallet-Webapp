import IRoute from '../interfaces/route';
import { HomePage, LoginPage, MarketPage, WalletPage } from '../pages';
import RegisterPage from '../pages/register';

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
  {
    path: '/register',
    name: 'Register Page',
    component: RegisterPage,
    exact: true,
  },
  {
    path: '/market',
    name: 'Market Page',
    component: MarketPage,
    exact: true,
  },
  {
    path: '/wallet',
    name: 'Wallet Page',
    component: WalletPage,
    exact: true,
  },
];

export default routes;
