function lifePathNumber(dateOfBirth) {
 
  let arr = dateOfBirth.split('-');
  let year = arr[0].split('').map(x => {return parseInt(x)}).reduce((x, y) => {return x + y}).toString().split('').map(x => {return parseInt(x)}).reduce((x, y) => {return x + y});
  let month = arr[1].split('').map(x => {return parseInt(x)}).reduce((x, y) => {return x + y}).toString().split('').map(x => {return parseInt(x)}).reduce((x, y) => {return x + y});
  let day = arr[2].split('').map(x => {return parseInt(x)}).reduce((x, y) => {return x + y}).toString().split('').map(x => {return parseInt(x)}).reduce((x, y) => {return x + y});
  return (year + month + day).toString().split('').map(x => {return parseInt(x)}).reduce((x, y) => {return x + y}).toString().split('').map(x => {return parseInt(x)}).reduce((x, y) => {return x + y});

}