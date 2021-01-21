function isIsogram(str)
{
  let lowerStr = str.toLowerCase();
  console.log(lowerStr);
  
  if(str == '')
    {
      return true;
    }
  
  for(let i = 0; i < lowerStr.length; i++)
    {
      console.log('first loop: ' + lowerStr[i]);
      for(let j = i+1; j < lowerStr.length; j++)
        {
          console.log('second loop: ' + lowerStr[j]);
          if(lowerStr[i] == lowerStr[j])
            {
              return false;
            }
          
        }
    }
  return true;
}