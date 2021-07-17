function repeatStr (n, s) 
{
  let resArr = [];
  
  for(let i = 0; i < n; i++)
    {
      resArr.push(s);
    }
  let resStr = resArr.join('')
  return resStr;
}