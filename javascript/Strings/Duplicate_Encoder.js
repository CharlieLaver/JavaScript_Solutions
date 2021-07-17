
function duplicateEncode(word)
{
  let arr = [];
  let str = word.toLowerCase();
  
  for(let i = 0; i < str.length; i++)
    {
      let firstIndex = str.indexOf(str[i]);
      let lastIndex =  str.lastIndexOf(str[i]);
      
      if(firstIndex == lastIndex)
        {
          arr.push('(');
        }
      else
        {
          arr.push(')');
        }
        
    }
  console.log(arr);
  let res = arr.join('')
  return res;
  
}