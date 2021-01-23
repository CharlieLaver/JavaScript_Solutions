function oddOrEven(array)
{
  console.log(array);
  let total = 0;
  
  for(let i = 0; i < array.length; i++)
    {
      total = total + array[i];
    }
  
  console.log(total);
  if(isOdd(total))
    {
      return 'odd';
    }
  else
    {
      return 'even';
    }
}

function isOdd(n) 
{
   return Math.abs(n % 2) == 1;
}