function numObj(s)
{
  let resArr = [];
  
  for(let i = 0; i < s.length; i++)
    {
      let charCode = String.fromCharCode(s[i]);
      let str = s[i].toString();
      let obj = {
        [str]: charCode
      }
      resArr.push(obj);
    }
  return resArr;
}