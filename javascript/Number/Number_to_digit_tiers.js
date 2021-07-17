function createArrayOfTiers(num) {
   let arr = num.toString().split('');
   let x = '';
   let resArr = [];
  for(let i = 0; i < arr.length; i++)
    {
      x = x + arr[i];
      console.log(x);
      resArr.push(x);
    }
  return resArr;
}