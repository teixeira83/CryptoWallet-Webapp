import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const BalanceContainer = styled('div')({
  height: '30vh',
  width: '80%',
  backgroundColor: '#323748',
  margin: '20px auto',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '20px',
  color: '#ffffff',
});

const BTCBalance = styled('span')({
  fontSize: '38px',
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
    <h3>Total Balance</h3>
    <BTCBalance>0.0014568 BTC</BTCBalance>
    <BRLBalance>R$100.000,00</BRLBalance>
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
