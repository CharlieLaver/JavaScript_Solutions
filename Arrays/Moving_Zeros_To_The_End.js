const moveZeros = (arr) => {
  let zeros = arr.join('').match(/(0)/g).map(x => +x);
  return arr.filter(x => {
    if(typeof x == 'boolean') return true;
    if(typeof x == 'object') return true;
    if(x != 0) return true;
  }).concat(zeros);
};