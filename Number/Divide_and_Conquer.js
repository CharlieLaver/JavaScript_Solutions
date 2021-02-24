function divCon(x){
  let strArr = [];
  let numArr = [];
 for(let i = 0; i < x.length; i++)
   {
     if(typeof x[i] == 'string')
      strArr.push(x[i]);
    else if(typeof x[i] == 'number')
       numArr.push(x[i]);
   }
  if(strArr.length == 0)
    return numArr.reduce((x, y)=> {return x + y});
  
  if(numArr.length == 0)
    return 0 - strArr.map(j => parseInt(j)).reduce((x, y)=> {return x + y});

  return numArr.reduce((x, y)=> {return x + y}) - strArr.map(j => parseInt(j)).reduce((x, y)=> {return x + y});
}