function solve(s){
    
  let upperCount = 0;
  let lowerCount = 0;
  let result;
  
  for(let j = 0; j < s.length; j++)
    {
      let current = s[j];
      console.log(current);
      
      if(current == current.toUpperCase())
        {
          upperCount++;
        }
      if(current == current.toLowerCase())
        {
          lowerCount++;
        }
    }
  console.log(lowerCount);
  console.log(upperCount);
  
  if(upperCount == lowerCount)
    {
      result = s.toLowerCase();
    }
  
  if (upperCount > lowerCount)
    {
      result = s.toUpperCase();
    }
  else if (lowerCount > upperCount)
    {
      result = s.toLowerCase();
    }
  return result;
}