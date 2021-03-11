const isAValidMessage = (message) => {
  
  if(message.length === 0) return true;
  if(!isNaN(+message[message.length-1])) return false;
  
 let words = message.split(/\d/g).filter(x => {if(x.length > 0) return true});
 let nums = message.match(/\d+/g).map(x => +x);
  
  for(let i = 0; i < words.length; i++) {
    if(words[i].length !== nums[i]) 
      return false; 
  }
  
  return true;
}