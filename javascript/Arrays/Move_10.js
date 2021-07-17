const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

function moveTen(s)
{
  let resArr = [];
  
   for(let i = 0; i < s.length; i++)
     {
       for(let j = 0; j < alph.length; j++)
         {
           if(s[i] == alph[j])
             {
               console.log(s[i] + ' moved 10 spaces ' + alph[j + 10]);
               
               if(alph[j + 10] == undefined)
                 {
                   let leftOver = 10 - (alph.length - j) ;
                   console.log(leftOver);
                   resArr.push(alph[leftOver]);
                 }
               else
                 {
                   resArr.push(alph[j + 10]);
                 }
               
             }
         }
     }
  
  console.log(resArr);
  let resStr = resArr.join('');
  return resStr;
}
