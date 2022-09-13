const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getTime = (dateTime: Date): string => {
  const hours = dateTime.getHours();
  const minutes = `${dateTime.getMinutes()}`.padStart(2, '0');
  const hoursP12 = `${hours + 12}`.padStart(2, '0');
  const hoursM12 = `${hours - 12}`.padStart(2, '0');
  const hoursS = `${hours}`.padStart(2, '0');

  if (hours === 0) return `${hoursP12}.${minutes} AM`;

  if (hours > 0 && hours < 12) return `${hoursS}.${minutes} AM`;

  return `${hoursM12}.${minutes} AM`;
};

const getDate = (dateString: string): { date: string; time: string } => {
  const dateTime = new Date(dateString);
  const month = months[dateTime.getMonth()];
  const year = dateTime.getFullYear();
  const day = `${dateTime.getDate()}`.padStart(2, '0');

  const date = `${month} ${day}, ${year}`;
  const time = getTime(dateTime);

  return { date, time };
};

export default getDate;
