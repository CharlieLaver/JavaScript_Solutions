const longestRepetition = (s) => {
  if(s === '')
    return ['', 0]; 
  
  let resArr = [];
  let arr = [];
  
  for(let i=0; i < s.length; i++) {
    if(s[i] === s[i+1]) {
      arr.push(s[i]);
    } else {
      arr.push(s[i]);
      resArr.push(arr);
      arr = [];
    }
  }
 
  let max = 0;
  let maxChar;
  for(let j = 0; j < resArr.length; j++) {
    console.log(resArr[j].length);
    if(resArr[j].length > max) {
      max = resArr[j].length;
      maxChar = resArr[j][0];
    }
    
    if(j === resArr.length-1) {
      return [maxChar, max];
    }
  }
}