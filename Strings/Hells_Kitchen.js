function gordon(a){
  
  console.log(a);
  let arr = [];
  let vowels = ['E', 'I', 'O', 'U'];
  
  let str = a.toUpperCase();
  console.log(str);
  
  for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
    arr.push(str[i]);
    
    if(vowels.includes(str[i])){
     arr.splice(i, 1, '*');
    }
    
    if(str[i] == 'A'){
     arr.splice(i, 1, '@');
    }
    
    if(str[i] == ' '){
    console.log('space: ' + str[i]);
      arr.splice(i, 1, '!!!! ');
    }
    
  }
  
  console.log('last: '+ arr[arr.length-1]);
  arr.push('!!!!');
  
  let resStr = arr.join('');
  return resStr;
}