function findUniq(arr) 
{
  if(isFirstNumUnique(arr))
    {
      return arr[0];
    }
  else
    {
      for(let i = 0; i < arr.length; i++)
      {
        for(let j = 0; j < arr.length; j++)
        {
          if(arr[i] != arr[j])
            {
              return arr[j];
            }
        }
      }
    }
  

}   

function isFirstNumUnique(arr)
{
  let firstNum = arr[0];
  let firstNumCount = 0;
  for(let u = 1; u < arr.length; u++)
    {
      if(firstNum == arr[u])
        {
          firstNumCount++
        }  
    }

  if(firstNumCount == 0)
    {
      return true;
    }
  else
    {
      return false;
    }
}