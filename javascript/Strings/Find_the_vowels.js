const vowelIndices = (word) => {
  console.log(word);
  const vowels = ['a','e','i','o','u','y'];
  let resArr = [];
   for(let i = 0; i < word.length; i++) {
     if(vowels.includes(word[i].toLowerCase())) {
       resArr.push(i+1);
     }
   } 
  
  return resArr;
}