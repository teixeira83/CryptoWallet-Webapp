import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Home,
  Assessment,
  MonetizationOn,
  AccountBalanceWallet,
} from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  footerStyle: {
    background: '#292D3B',
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  iconStyle: {
    color: 'white',
  },
});

const MobileFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.footerStyle}>
      <Link to="/">
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<Home />}
          showLabel
          className={classes.iconStyle}
        />
      </Link>
      <Link to="/market">
        <BottomNavigationAction
          label="Market"
          value="market"
          icon={<Assessment />}
          showLabel
          className={classes.iconStyle}
        />
      </Link>
      <Link to="/transaction">
        <BottomNavigationAction
          label="Transaction"
          value="transaction"
          icon={<MonetizationOn />}
          showLabel
          className={classes.iconStyle}
        />
      </Link>
      <Link to="/wallet">
        <BottomNavigationAction
          label="Wallet"
          value="wallet"
          icon={<AccountBalanceWallet />}
          showLabel
          className={classes.iconStyle}
        />
      </Link>
    </BottomNavigation>
  );
};

export default withRouter(MobileFooter);
