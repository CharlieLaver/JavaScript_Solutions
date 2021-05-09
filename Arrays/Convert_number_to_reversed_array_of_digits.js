
const digitize = (n) => {
  console.log(n);
  return n.toString().split('').reverse().map(x => +x);
}