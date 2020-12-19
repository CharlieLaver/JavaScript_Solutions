var uniqueInOrder=function(iterable){
  
  let arr;
  let lastChar;
  const resultArr = []; 
  
  if(typeof(iterable) == 'string')
    {
      arr = iterable.split('');
    }
  else
    {
      arr = iterable;
    }
  
  console.log(arr);
  
  for(let j = 0; j < arr.length; j++)
    {
      let current = arr[j];
      
      if(j == 0)
        {
          resultArr.push(current);
          lastChar = current;
        }
      
      else if(current !== lastChar)
        {
          resultArr.push(current);
          lastChar = current;
        }
     
    }
  console.log(resultArr);
  return resultArr;
}