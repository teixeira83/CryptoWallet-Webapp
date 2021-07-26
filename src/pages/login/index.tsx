import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AuthContainer } from '../../components';
import IPage from '../../interfaces/page';
import { auth } from '../../config/firebase';
import { User } from '../../models/User';

const useStyles = makeStyles({
  formInput: {
    margin: '10px 0',
  },
  formBtn: {
    display: 'block',
    margin: '20px auto',
  },
});

const saveUserInSessionStorage = (user: User): any => {
  sessionStorage.setItem('user_id', user.getUserId());
  sessionStorage.setItem('user_brl', String(user.getBRLBalance()));
  sessionStorage.setItem('user_btc', String(user.getBTCBalance()));
  sessionStorage.setItem('user_brita', String(user.getBritaBalance()));
  sessionStorage.setItem('user_email', user.getEmail());
};

const LoginPage: React.FC<IPage> = () => {
  const classes = useStyles();
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const history = useHistory();

  const signUpWithEmailAndPassword: any = () => {
    if (error !== '') setError('');

    setAuthenticating(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const userResponse = response.user;
        const userID = String(userResponse?.uid);

        const user = new User(userID, email);
        saveUserInSessionStorage(user);
        history.push('/');
        setAuthenticating(!authenticating);
      })
      .catch((err) => {
        console.log(err);
        setAuthenticating(false);
        setError('Não foi possível realizar o login.');
      });
  };

  return (
    <AuthContainer header="Logar">
      <FormGroup className={classes.formInput}>
        <TextField
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          value={email}
          variant="outlined"
        />
      </FormGroup>
      <FormGroup className={classes.formInput}>
        <TextField
          type="password"
          id="password"
          name="password"
          placeholder="Digite aqui sua senha"
          onChange={(event) => setPassword(event.target.value)}
          label="Senha"
          value={password}
          variant="outlined"
        />
      </FormGroup>
      <Button
        variant="contained"
        color="primary"
        className={classes.formBtn}
        onClick={() => signUpWithEmailAndPassword()}
      >
        Login
      </Button>
      <span className="m-1 text-center">
        Não tem uma conta? Faça o registro <Link to="/register">aqui.</Link>
      </span>
    </AuthContainer>
  );
};

export default LoginPage;
