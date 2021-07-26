import axios from 'axios';

const getDollarQuotation: any = async () => {
  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() - 1);

  if (todayDate.getDay() === 0) {
    todayDate.setDate(todayDate.getDate() - 2);
  }
  if (todayDate.getDay() === 7) {
    todayDate.setDate(todayDate.getDate() - 1);
  }
  const formattedTodayDate = `${
    todayDate.getMonth() + 1
  }-${todayDate.getDate()}-${todayDate.getFullYear()}`;
  const url = `${process.env.REACT_APP_BC_API_URL}'${formattedTodayDate}'`;
  const dollarQuotation = await axios
    .get(url)
    .then((response) => response.data.value[0].cotacaoVenda)
    .catch((error) => {
      console.log(error);
    });
  return dollarQuotation;
};

export default getDollarQuotation;
