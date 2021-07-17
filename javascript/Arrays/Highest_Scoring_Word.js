let score = 0;
let resultArr = [];

function high(x)
{
  resultArr = [];

 console.log(x);
  
  for(let i = 0; i < x.length; i++)
    {
      if(x[i] == ' ')
        {
          console.log('space pushing ' + score);
          resultArr.push(score);
          console.log(resultArr);
          score = 0;
        }
      
          if(i == x.length-1)
            {
              giveScore(x[i]);
              console.log('last letter pushing score ' + score);
              resultArr.push(score);
              console.log(resultArr);
              score = 0; 
            }
          else
            {
              giveScore(x[i]);

            }
        
    }
  console.log('final score: ' + resultArr);
  let res = Math.max(...resultArr);
  let resIndex = resultArr.indexOf(res);
  console.log('max: ' + res + ' at index ' + resIndex);
  let arr = x.split(' ');
  console.log(arr);
  return arr[resIndex];
  
  
}

function giveScore(current)
{
  const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  let k = alph.indexOf(current) + 1;
  console.log(current + " is worth " +k + " points");
  score = score + k; 
}
