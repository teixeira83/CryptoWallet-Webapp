import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const BalanceContainer = styled('div')({
  height: '45vh',
  width: '85%',
  backgroundColor: '#323748',
  margin: '20px auto',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '20px',
  color: '#ffffff',
});

const CryptoBalance = styled('span')({
  fontSize: '28px',
});

const BRLBalance = styled('span')({
  fontSize: '14px',
});

const TransferButtonsContainer = styled('div')({
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-around',
});

const BalanceAccountContainer: React.FC = () => (
  <BalanceContainer>
    <h4>{sessionStorage.getItem('user_email')}</h4>
    <h3>Total Balance</h3>
    <CryptoBalance>BTC: {sessionStorage.getItem('user_btc')}</CryptoBalance>
    <CryptoBalance>Brita: {sessionStorage.getItem('user_brita')}</CryptoBalance>
    <BRLBalance>R${sessionStorage.getItem('user_brl')}</BRLBalance>
    <TransferButtonsContainer>
      <Button
        variant="contained"
        style={{ background: '#4B5166', color: '#FFFFFF' }}
        startIcon={<AddIcon />}
      >
        Deposit
      </Button>
      <Button style={{ color: '#FFFFFF' }}>Withdraw</Button>
    </TransferButtonsContainer>
  </BalanceContainer>
);

export default BalanceAccountContainer;
