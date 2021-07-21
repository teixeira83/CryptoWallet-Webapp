import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Home,
  Assessment,
  MonetizationOn,
  AccountBalanceWallet,
} from '@material-ui/icons';

const useStyles = makeStyles({
  footerStyle: {
    background: '#292D3B',
  },
  iconStyle: {
    color: 'white',
  },
});

const MobileFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.footerStyle}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<Home />}
        showLabel
        className={classes.iconStyle}
      />
      <BottomNavigationAction
        label="Market"
        value="market"
        icon={<Assessment />}
        showLabel
        className={classes.iconStyle}
      />
      <BottomNavigationAction
        label="Transaction"
        value="transaction"
        icon={<MonetizationOn />}
        showLabel
        className={classes.iconStyle}
      />
      <BottomNavigationAction
        label="Wallet"
        value="wallet"
        icon={<AccountBalanceWallet />}
        showLabel
        className={classes.iconStyle}
      />
    </BottomNavigation>
  );
};

export default MobileFooter;
