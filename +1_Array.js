function upArray(arr)
{
  console.log(arr);
  
  if(!findValidInput(arr))
    {
      return null;
    }
  
  let lastNonNineNum = lastNonNine(arr);
  
  if(lastNonNineNum == -1)
    {
      allNines(arr);
      return arr;
    }
  else
    {
      if(lastNonNineNum == arr.length -1)
        {
          noNines(arr, lastNonNineNum);
          return arr;
        }
        else
        {
          someNines(arr, lastNonNineNum); 
          return arr;
        }
    } 
  
}

function findValidInput(arr)
{
  for(let i = 0; i < arr.length; i++)
  {
    let current = arr[i].toString();
    if(current.length == 2)
      {
        console.log('Double Digit: ' + current);
        return false;
      }
  }
  
  if(arr.length == 0)
    {
      return false;
    }
  
  return true;
}


function lastNonNine(arr)
{
  
  for(let i = arr.length-1; i >=0; i--)
  {
    let current = arr[i];
    if (current != 9)
      {
        return i;
      }
  }

  return -1;
}


function allNines(arr)
{
  console.log('allNines');
  for(let s = 0; s < arr.length; s++)
    {
      arr[s] = 0;
    }
  arr.splice(0, 0, 1);
  return arr;
  
}

function noNines(arr, lastNonNineIndex)
{
  console.log('noNines');
  let num = arr[lastNonNineIndex];
  let res = num + 1;
  arr.splice(lastNonNineIndex, 1, res)
  return arr;
}

function someNines(arr, lastNonNineIndex)
{
 console.log('someNines');
 let num = arr[lastNonNineIndex];
 let res = num + 1;
 arr.splice(lastNonNineIndex, 1, res);
 
  for(let x = lastNonNineIndex +1; x < arr.length; x++)
    {
      arr[x] = 0;
    }
 return arr;

}