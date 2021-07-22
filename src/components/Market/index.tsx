import React from 'react';
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

const createData: any = (pair: string, price: number, variation: number) => ({
  pair,
  price,
  variation,
});

const rows = [
  createData('BTC/BRL', 200, 6.0),
  createData('ETH/BRL', 237, 9.0),
  createData('ETC/BRL', 262, 16.0),
  createData('XMR/BRL', 305, 3.7),
  createData('DOGE/BRL', 356, 16.0),
];

const useStyles = makeStyles({
  table: {
    width: '95%',
    margin: '10px auto',
  },
  tableContainer: {
    marginBottom: '80px',
  },
});

const MarketContainer = styled('div')({
  width: '80%',
  margin: '50px auto',
});

const Market: React.FC = () => {
  const classes = useStyles();
  return (
    <MarketContainer>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Par</StyledTableCell>
              <StyledTableCell align="right">Último Preço</StyledTableCell>
              <StyledTableCell align="right">Var% em 24h</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.pair}>
                <StyledTableCell component="th" scope="row">
                  {row.pair}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.variation}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MarketContainer>
  );
};

export default Market;
