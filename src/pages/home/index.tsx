import React from 'react';
import { BalanceAccountContainer, Market } from '../../components';
import IPage from '../../interfaces/page';

const HomePage: React.FC<IPage> = () => (
  <>
    <BalanceAccountContainer />
    <Market />
  </>
);

export default HomePage;
