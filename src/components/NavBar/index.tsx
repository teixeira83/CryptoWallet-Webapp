import React, { useState } from 'react';
import { AppBar, Toolbar, SwipeableDrawer, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { styled, makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import cryptoLogo from '../../assets/imgs/logo.png';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
  },
  drawerBtn: {
    width: '100%',
  },
  linkStyle: {
    width: '80%',
    margin: '10px auto',
    textDecoration: 'none',
  },
  imgStyle: {
    width: '120px',
    height: '50px',
  },
});

const DrawerContainer = styled('div')({
  width: '90vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px 0',
});

const NavBar: React.FC = () => {
  const classes = useStyles();
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const handleClick: any = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <header>
      <AppBar position="static" style={{ background: '#292D3B' }}>
        <Toolbar className={classes.toolbar}>
          <img
            src={cryptoLogo}
            alt="Logo da Crypto Wallet"
            className={classes.imgStyle}
          />
          <AccountCircle fontSize="large" onClick={handleClick} />
        </Toolbar>
      </AppBar>
      {drawerIsOpen ? (
        <SwipeableDrawer
          anchor="right"
          open={drawerIsOpen}
          onClose={handleClick}
          onOpen={handleClick}
        >
          <DrawerContainer>
            <Link
              to="/login"
              className={classes.linkStyle}
              onClick={() => setDrawerIsOpen(!drawerIsOpen)}
            >
              <Button variant="contained" className={classes.drawerBtn}>
                Entrar
              </Button>
            </Link>
            <Link
              to="/register"
              className={classes.linkStyle}
              onClick={() => setDrawerIsOpen(!drawerIsOpen)}
            >
              <Button variant="contained" className={classes.drawerBtn}>
                Registrar
              </Button>
            </Link>
          </DrawerContainer>
        </SwipeableDrawer>
      ) : null}
    </header>
  );
};

export default withRouter(NavBar);
