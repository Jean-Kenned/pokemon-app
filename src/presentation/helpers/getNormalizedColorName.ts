const getNormalizedColorName = (colorName: string): string => {
  switch (colorName) {
    case 'white':
      return 'gray';
    case 'yellow':
      return 'gold';
    default:
      return colorName;
  }
};

export default getNormalizedColorName;
