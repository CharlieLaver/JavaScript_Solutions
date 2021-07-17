function countSmileys(arr)
{
  
  let counter = 0;
  
  for(let j = 0; j < arr.length; j++)
    {
      let currentSmile = arr[j];
      console.log(currentSmile);
      
    if(smileLength(currentSmile))
      {
        if(hasEyes(currentSmile))
        {
          console.log('has eyes: ' + currentSmile);
          if(hasNose(currentSmile))
          {
              console.log('has nose: ' + currentSmile);
                if(hasSmile(currentSmile))
                {
                  console.log('has smile: ' + currentSmile);
                  counter++;
                }
            }
        }
      }
      
 
    }
  
  return counter;

}

function smileLength(currentSmile)
{
  if(currentSmile.length == 2)
    {
      return true;
    }
  if(currentSmile.length == 3)
    {
      return true;
    }
  
  return false;
}

function hasEyes(currentSmile)
{
  if(currentSmile.includes(':'))
   {
      return true;
   }
  
  if(currentSmile.includes(';'))
    {
      return true;
    }
  
  return false;
}

function hasSmile(currentSmile)
{
  if(currentSmile.includes(')'))
    {
      return true;
    }
  
  if(currentSmile.includes('D'))
    {
      return true;
    }
  
  return false;
}

function hasNose(currentSmile)
{
  if(currentSmile.length == 3)
    {
      if(currentSmile.includes('-'))
    {
      return true;
    }
  if(currentSmile.includes('~'))
    {
      return true;
    }
      return false;
    }
  else if(currentSmile.length == 2)
    {
      return true;
    }
}