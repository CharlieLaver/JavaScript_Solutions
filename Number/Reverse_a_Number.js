const reverseNumber = (n) => {
  console.log(n);
  if(n.toString().split('')[0] === '-') {
    let x = n.toString().split('');
    x.shift();
    x.reverse();
    return parseInt('-' + x.join(''));
  }
  return +n.toString().split('').reverse().join('');
}