export const splitArrayInPairs = (array: any[]): any[] => {
  return array.reduce((resultArray: any, item: any, index: number) => {
    const pairIndex = Math.floor(index / 2);

    if (!resultArray[pairIndex]) {
      resultArray[pairIndex] = [];
    }
    resultArray[pairIndex].push(item);
    return resultArray;
  }, []);
};
