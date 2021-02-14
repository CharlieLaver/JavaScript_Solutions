function getCharacters(obj, key, val) 
{
  console.log(characters);
  var foundCharacters = [];
  console.log(key + ":" + val);
  
  for(let i = 0; i < obj.characters.length; i++) 
    {
      let current = obj.characters[i];
      
      let keyvalue = current[key];
      console.log(current[key]);
      console.log(keyvalue);
      
      if(keyvalue==undefined)
        {
console.log("its undefined");
        }
      else
        {
          console.log("it's noit undefined");
          if (current[key].toUpperCase() == val.toUpperCase()) 
          {
            
            console.log('res: ' + current[key]);
            foundCharacters.push(current);
          }
        }
    }
  
  
  return foundCharacters;
}