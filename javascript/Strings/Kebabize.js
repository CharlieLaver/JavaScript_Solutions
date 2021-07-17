function kebabize(str) {
  console.log(str);
 let arr = str.split("");
 let resultArr = [];
  let regex = RegExp(/\d/);
  for(let j = 0; j < arr.length; j++)
    {
      let current = arr[j];
      console.log(current + ';' + regex.test(current));
      if(regex.test(current))
      {
          console.log('Digit: ' + current);
      }
      else
      {
            console.log('NOT A Digit: ' + current);

            if(current == current.toUpperCase())
            {
              console.log('Uppercase: ' + current);
              let toLower = current.toLowerCase();
              if(resultArr.length > 0)
              {
                resultArr.push('-');
              }
          
              resultArr.push(toLower); 
          
            }
            else
            {
              console.log('Lowercase: ' + current);
              resultArr.push(current);
            }
      }  
      
    }
  console.log(resultArr);
  let result = resultArr.join('');
  console.log(result);
  return result;
  
}