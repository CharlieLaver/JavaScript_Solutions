function calc(x){

  let arr = x.split('');
  
  let total1 = arr.map(x => {return x.codePointAt()}).join('').split('');
  let clone = [...total1];
  
  for(let i = 0; i < total1.length; i++)
    {
      if(total1[i] == '7')
       clone.splice(i, 1, '1');
    }
  
   let total2 = clone.join('').split('');
   total1 = total1.map(x => {return parseInt(x)}).reduce((x , y) => {return x + y});
   total2 = total2.map(x => {return parseInt(x)}).reduce((x , y) => {return x + y});
   
  return total1 - total2;
}