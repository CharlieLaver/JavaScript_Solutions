const adjacentElementsProduct = (array) => {
  const temp = [];
  for(let i = 0; i < array.length; i++) {
    if(i !== 0) {
      temp.push(array[i-1] * array[i]);
    }
  }
  return Math.max(...temp);
}