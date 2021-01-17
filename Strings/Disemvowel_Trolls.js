function disemvowel(str) 
{
  let arr = str.split('');
 
  for(let i = 0; i < arr.length; i++)
    {
      if(isVowel(arr[i]))
        {
          arr.splice(i, 1);
          i--;
        }
    }
  
  let res = arr.join('');
  return res;
}

function isVowel(char) 
{
  return (/([aeiou])/gi).test(char);

}