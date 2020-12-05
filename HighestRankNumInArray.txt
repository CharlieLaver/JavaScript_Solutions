
function largestNum(lc)
{
  let winner=lc;
  console.log(winner);
  for(let j = 0; j < arrCounters.length; j++)
    {
      let current = arrCounters[j];
      if(lc.cnt == current.cnt)
        {
          if (current.nbc > winner.nbc)  {
              winner = current;
              }
        }
      
    }
  
  console.log(winner);
  return winner;
  }

function biggestNumber()
{
  let  highlc = {nbc:0, cnt:0}
  
  for(let j = 0; j < arrCounters.length; j++)
    {
      let lc = arrCounters[j];
      if (lc.cnt > highlc.cnt)
        {
          highlc = lc;
        }
    }
  return highlc;
}

function haveIAlreadyCounted(numberToCount){
  
for(let f = 0; f < arrCounters.length; f++)
  {
    let current = arrCounters[f];
    
    if(current.nbc == numberToCount)
      {
        return true;
      }
  }
  return false;
  }

function getCounter(numberToCount){
  
  for (let j=0; j < arrCounters.length; j++){
    let currentCounter = arrCounters[j];
    
    if (currentCounter.nbc == numberToCount) {
      return currentCounter;
    }
  }
  
  let  newCounter = {nbc:numberToCount, cnt:0}
  arrCounters.push(newCounter);
  return newCounter;
}

function highestRank(arr){
console.log(arr);
  arrCounters = new Array();
  for(let j = 0; j < arr.length; j++)
    {
      
      if(haveIAlreadyCounted(arr[j]))
        {
          continue;
        }
      
      let lc = getCounter(arr[j]);
      for(let i = 0; i < arr.length; i++)
        {
          if(arr[j] == arr[i])
            {
              lc.cnt++;
            }
        }
      console.log("HR" + arr[j] + ":" +lc.cnt);
    }
  
  return largestNum(biggestNumber()).nbc;
}