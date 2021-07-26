import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from '@material-ui/core';
import IPage from '../../interfaces/page';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      marginTop: '45px',
      minWidth: 120,
      width: '85%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
      height: '100%',
    },
    btnSubmit: {
      marginTop: '15px',
    },
  })
);

const TransactionPage: React.FC<IPage> = () => {
  const classes = useStyles();
  const [purchaseCurrency, setPurchaseCurrency] = useState<string>('');
  const [saleCurrency, setSaleCurrency] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const handlePurchaseChange: any = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setPurchaseCurrency(event.target.value as string);
  };
  const handleSaleChange: any = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSaleCurrency(event.target.value as string);
  };
  const buyCoins: any = () => {
    const userBrl = sessionStorage.getItem('user_brl');
    const userBtc = sessionStorage.getItem('user_btc');
    const userBrita = sessionStorage.getItem('user_brita');
    // const dollarQuotation = sessionStorage.getItem('dollar_quotation');

    // if (purchaseCurrency === '11') {
    //   const btcQuotation = sessionStorage.getItem('btc_quotation');
    //   const BTCInBRL = btcQuotation * amount;
    // }

    if (saleCurrency === purchaseCurrency) {
      alert('Não é possível trocar pela mesma moeda');
    }

    if (saleCurrency === '11') {
      if (userBtc === '0') {
        alert('Você não tem BTC suficiente');
      }
    }
    if (saleCurrency === '12') {
      if (userBrita === '0') {
        alert('Você não tem BRITA suficiente');
      }
    }
    if (saleCurrency === '13') {
      if (userBrl === '0') {
        alert('Você não tem BRL suficiente');
      }
    }
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="purchase-label">Comprar</InputLabel>
        <Select
          id="purchase-select"
          value={purchaseCurrency}
          onChange={handlePurchaseChange}
          label="Comprar"
        >
          <MenuItem value={5}>
            <em>Escolher Moeda</em>
          </MenuItem>
          <MenuItem value={11}>BTC</MenuItem>
          <MenuItem value={12}>Brita</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="sale-label">Pagar com</InputLabel>
        <Select
          id="sale-label"
          value={saleCurrency}
          onChange={handleSaleChange}
          label="Pagar com"
        >
          <MenuItem value={20}>
            <em>Escolher Moeda</em>
          </MenuItem>
          <MenuItem value="11">BTC</MenuItem>
          <MenuItem value="12">Brita</MenuItem>
          <MenuItem value="13">BRL</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-basic"
          label="Quantia"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <Button
          variant="contained"
          className={classes.btnSubmit}
          onClick={() => buyCoins()}
        >
          Comprar
        </Button>
      </FormControl>
    </Container>
  );
};

export default TransactionPage;
