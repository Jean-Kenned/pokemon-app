const getFormattedIdNumber = (idNumber: number): string => {
  if (idNumber < 10) {
    return `#00${idNumber}`;
  }
  if (idNumber < 100) {
    return `#0${idNumber}`;
  }
  return `#${idNumber}`;
};

export default getFormattedIdNumber;
