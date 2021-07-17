function iqTest(numbers){
  
  const arr = numbers.split(" ");
  let evenCount = 0;
  let oddCount = 0;
  let resultIndex;

  for(let j = 0; j < arr.length; j++)
    {
      let current = arr[j];
      
      if(isOdd(current))
      {
         console.log(current + "isOdd");
        oddCount++;
      }
      else if(isEven(current))
        {
          console.log(current + "isEven");
          evenCount++;
        }
    }
  
  for(let i = 0; i < arr.length; i++)
    {
      let current = arr[i];
      
      if(isOdd(current))
        {
          if(oddCount < evenCount)
            {
              resultIndex = arr.indexOf(current);
              console.log("resultIndexIsOdd" + resultIndex);
            }
        }
      else if(isEven(current))
        {
          if(evenCount < oddCount)
            {
              resultIndex = arr.indexOf(current);
              console.log("resultIndexIsEven" + resultIndex);
            }
        }
    }
  
  return resultIndex + 1;
  
}

function isOdd(num) {
  return (/^\d*[13579]$/).test(num);
}

function isEven(num) {
  return (/^\d*[02468]$/).test(num);
}