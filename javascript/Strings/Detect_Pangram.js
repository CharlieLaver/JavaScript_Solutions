function isPangram(string){
  
  const arr = [];
  
    for(let j = 0; j < string.length; j++)
      {
        let current = string[j].toLowerCase();
        
       
      if(isCharacterALetter(current))
        {
          if(arr.includes(current))
         {
           console.log("Already includes " + current);
         }
        else
          {
            arr.push(current);
            console.log("Pushed " + current);
          }
        }
       
        
      }
  
  console.log(arr);
  if(arr.length == 26)
    {
      return true;
    }
  else
    {
      return false;
    }
}

function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char);
}
