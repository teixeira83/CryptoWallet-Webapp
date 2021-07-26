import React, { useState, useEffect } from 'react';
import {
  styled,
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import getDollarQuotation from '../../api/bancoCentral';
import getCryptoQuotation from '../../api/mercadoBitcoin';

const StyledTableCell = withStyles(() =>
  createStyles({
    head: {
      backgroundColor: 'transparent',
      color: '#000000',
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const coins = ['BTC', 'ETH', 'CHZ', 'JUVFT', 'BAT'];

const useStyles = makeStyles({
  table: {
    width: '95%',
    margin: '10px auto',
  },
});

const MarketContainer = styled('div')({
  width: '80%',
  margin: '50px auto',
  display: 'flex',
});

const Wrapper = styled('div')({
  height: '2em',
});

const Market: React.FC = () => {
  const [dollarQuotation, setDollarQuotation] = useState<number>(0.0);
  const [coinsQuotation, setCoinsQuotations] = useState<any[]>([]);
  const classes = useStyles();
  useEffect(() => {
    const responsedDollarQuotation = getDollarQuotation();
    responsedDollarQuotation.then((quotation: number) => {
      setDollarQuotation(quotation);
      sessionStorage.setItem('dollar_quotation', String(quotation));
    });
  }, []);

  useEffect(() => {
    (async () => {
      const cryptoResponse = await getCryptoQuotation(coins);
      Promise.all(cryptoResponse).then((values: any) => {
        setCoinsQuotations(values);
        sessionStorage.setItem('btc_quotation', String(values[0].price));
      });
    })();
  }, []);

  return (
    <>
      <MarketContainer>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Par</StyledTableCell>
                <StyledTableCell align="right">Último Preço</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  USD/BRL
                </StyledTableCell>
                <StyledTableCell align="right">
                  {`R$${parseFloat(dollarQuotation.toFixed(2))}`}
                </StyledTableCell>
              </StyledTableRow>
              {coinsQuotation.map((c: any) => (
                <StyledTableRow key={c.coin}>
                  <StyledTableCell component="th" scope="coins">
                    {`${c.coin}/BRL`}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {`R$${parseFloat(c.price).toFixed(2)}`}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MarketContainer>
      <Wrapper />
    </>
  );
};

export default Market;
