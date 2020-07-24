export const convertDate = (utcDate) => {
  const date = new Date(utcDate);
  let month = date.getUTCMonth()+1;
  const day = date.getDate();
  const year = date.getUTCFullYear();

  if(month.toString().length === 1) {
    month = '0' + month;
  }

  return `${month}/${day}/${year}`;
};

export const timeSince = (date) => {
  if (typeof date !== 'object') {
    date = new Date(date);
  }

  let seconds = Math.floor((new Date() - date) / 1000);
  let intervalType;

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'year';
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = 'month';
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = 'day';
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = "hour";
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = "minute";
          } else {
            interval = seconds;
            intervalType = "second";
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += 's';
  }

  return `${interval} ${intervalType} ago`;
};