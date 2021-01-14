let oddArr = [];
let resArr = [];

function sortArray(array) 
{
  console.log(array);
  oddArr = [];
  //store length of arr
  let arrLength = array.length;
  resArr.length = arrLength;
  fillResArr(resArr);
  pushOdd(array);
  storeEvenValues(array);
  spliceOddResArr(resArr, oddArr);
  
  console.log(resArr);
  
  return resArr;
}

function pushOdd(array)
{
  //push odd to new array 
  for(let i = 0; i < array.length; i++)
    {
      if(isOdd(array[i]))
        {
          //push the odd to new arr and sort
          oddArr.push(array[i]);
        }
    }
 
  oddArr.sort(myCompare);

}

function myCompare(a, b)
{
  return a-b;
}

function storeEvenValues(array)
{
  //store the even index with the value
  for(let j = 0; j < array.length; j++)
    {
      if(isEven(array[j]))
        {
          //splice in the even to the new arr
          resArr.splice(j, 1, array[j]);
        }
    }
  
  console.log("a="+resArr);
}

function fillResArr(resArr)
{
  //filling ResArr with a unique value
  for(let y = 0; y < resArr.length; y++)
    {
      resArr[y] = '/';
    }
}

function spliceOddResArr(resArr, oddArr)
{
  //splice odd into new arr at positions that are empty
  for(let r = 0; r < resArr.length; r++)
    {
      for(let e = 0; e < oddArr.length; e++)
        {
          if(resArr[r] == '/')
            {
              resArr.splice(r, 1, oddArr[e]);
              oddArr.splice(e, 1);
            }
        }
    }
}


function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}