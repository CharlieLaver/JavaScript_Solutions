function naughtyOrNice(data)
{
  
  let naughtyCount = 0;
  let niceCount = 0;

  let keys = Object.keys(data);
  
  for(let i = 0; i < keys.length; i++) 
  {
    
    let monthKey = keys[i];
    let monthVal = data[keys[i]];
    
    console.log(monthKey);
    
    let monthValKeys = Object.keys(monthVal);
  
      for(let j = 0; j < monthValKeys.length; j++) 
      {
        
          let x = monthValKeys[j];
          let r = monthVal[monthValKeys[j]];
          console.log(r);
          if(r == 'Naughty') 
          {
           naughtyCount++;
          } 
          else if( r == 'Nice') 
          {
          niceCount++;
          }
      }
             
    
  }
  
  console.log('naughty count: ' + naughtyCount);
  console.log('nice count: ' + niceCount);
  
  if(naughtyCount < niceCount)
    {
      return "Nice!";
    }
  
  if(niceCount < naughtyCount)
    {
      return "Naughty!";
    }
  
  if(niceCount == naughtyCount)
    {
      return "Nice!";
    }
  
}