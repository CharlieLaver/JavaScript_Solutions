function getAverage(marks){
  let sum = 0;
  
  for(let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  
  let average = sum / marks.length;
  let res = Math.floor(average);
  
  return res;
}