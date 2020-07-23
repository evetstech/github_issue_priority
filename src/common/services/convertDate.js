export const convertDate = (utcDate) => {
  const date = new Date(utcDate);
  let month = date.getUTCMonth()+1;
  const day = date.getUTCDay();
  const year = date.getUTCFullYear();

  if(month.toString().length === 1) {
    month = '0' + month;
  }

  return `${month}/${day}/${year}`;
};