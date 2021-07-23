import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AuthContainer } from '../../components';
import IPage from '../../interfaces/page';
import { auth } from '../../config/firebase';

const useStyles = makeStyles({
  formInput: {
    margin: '10px 0',
  },
  formBtn: {
    display: 'block',
    margin: '20px auto',
  },
});

const RegisterPage: React.FC<IPage> = () => {
  const classes = useStyles();
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');

  const history = useHistory();

  const signUpWithEmailAndPassword: any = () => {
    if (password !== confirm) {
      setError('As senhas digitadas são diferentes.');
      return;
    }

    if (error !== '') setError('');

    setRegistering(true);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        history.push('/login');
      })
      .catch((err) => {
        setError(err.message);
        setRegistering(true);
      });
  };

  return (
    <AuthContainer header="Registrar">
      <FormGroup className={classes.formInput}>
        <TextField
          type="email"
          id="emnail"
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

      <FormGroup className={classes.formInput}>
        <TextField
          type="password"
          id="confirm"
          name="confirm"
          placeholder="Confrme sua senha"
          onChange={(event) => setConfirm(event.target.value)}
          label="Confirmar Senha"
          value={confirm}
          variant="outlined"
        />
      </FormGroup>
      {registering ? <span style={{ color: 'red' }}>{error}</span> : null}
      <Button
        variant="contained"
        color="primary"
        className={classes.formBtn}
        onClick={() => signUpWithEmailAndPassword()}
      >
        Registrar
      </Button>
      <span className="m-1 text-center">
        Já tem uma conta? Faça login <Link to="/login">aqui.</Link>
      </span>
    </AuthContainer>
  );
};

export default RegisterPage;
