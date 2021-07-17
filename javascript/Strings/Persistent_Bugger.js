let arr = [];
let res = 0;
let str = "";
let counter = 0;
let isLooping = false;

function persistence(num) 
{
  counter = 0;
  arr = [];
  res = 0;
  str = num.toString();
  
  if(str.length == 1)
    {
      return 0;
    }
  else
    {
      whileDoubleDigit();
      
      if(isLooping)
        {
          return counter;
        }
    }
  
}

function whileDoubleDigit()
{
  
  while(str.length > 1)
    {
      arr = [];
      res = 0;
      makeArr();
      findTotal();
      counter++;
      console.log('still double digit: ' + str);
    }
  isLooping = true;
  console.log('is single digit: ' + str);
}



function findTotal()
{
  for(let y = 0; y < arr.length; y++)
    {
      if(y == 0)
        {
          res = arr[y];
        }
        else
          {
            res = res * arr[y];  
          }
    }
 console.log('res= ' + res);
  str = res.toString();
}

function makeArr()
{
   for(let i = 0; i < str.length; i++)
     {
       let number = parseInt(str[i]);
       arr.push(number);
      }
  console.log('arr= ' + arr);
}