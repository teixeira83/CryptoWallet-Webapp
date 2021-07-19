import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { AccountBalanceWallet, AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
  },
});

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <header>
      <AppBar position="static" style={{ background: '#292D3B' }}>
        <Toolbar className={classes.toolbar}>
          <AccountCircle fontSize="large" />
          <AccountBalanceWallet fontSize="large" />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default NavBar;
