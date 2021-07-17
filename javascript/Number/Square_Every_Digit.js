function squareDigits(num)
{
  let str = num.toString();
  let arr = str.split('');
  let resArr = [];
  
  for(let i = 0; i < str.length; i++)
    {
      let number = parseInt(str[i]);
      let resNum = number * number;
      resArr.push(resNum);
    }
  let res = resArr.join('');
  let resNum = parseInt(res);
  return resNum;
}