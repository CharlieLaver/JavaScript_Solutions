function removeDuplication(arr){
  
  let resArr = [];
  
  for(let i = 0; i < arr.length; i++) {
    let count = 0;
    if(Number.isInteger(arr[i])) {
        for(let j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]) 
          count++;        
      }    
    }
  
    if(count === 1)
      resArr.push(arr[i]);
  }
  
  return resArr;
}