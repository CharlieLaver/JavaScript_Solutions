function highAndLow(numbers)
{
  
  let arr = numbers.split(' ');
  
    for(let i = 0; i < arr.length; i++)
    {
      arr[i] = parseInt(arr[i]);
    }
  
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let res = max + ' ' + min;
  return res;
  
  
  
}