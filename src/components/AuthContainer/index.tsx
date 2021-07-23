import React from 'react';
import { Container, Card, CardHeader, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export interface IAuthContainerProps {
  header: any;
}

const useStyles = makeStyles({
  authContainer: {
    marginTop: '10vh',
    textAlign: 'center',
  },
});

const AuthContainer: React.FunctionComponent<IAuthContainerProps> = (props) => {
  const classes = useStyles();
  const { children, header } = props;

  return (
    <Container maxWidth="sm" className={classes.authContainer}>
      <Card>
        <CardHeader title={header} />
        <CardContent>{children}</CardContent>
      </Card>
    </Container>
  );
};

export default AuthContainer;
