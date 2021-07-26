import axios from 'axios';

const getCryptoQuotation: any = (coins: string[]) => {
  const coinArray = coins.map((coin) => {
    const url = `${process.env.REACT_APP_MERCADOBTC_API_URL}${coin}/ticker`;
    return axios.get(url).then((response) => {
      const price = response.data.ticker.last;

      return {
        coin,
        price,
      };
    });
  });
  return coinArray;
};

export default getCryptoQuotation;
