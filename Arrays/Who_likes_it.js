function likes(names) {
  
  let l = names.length;
 
  if(l == 0)
    return 'no one likes this';
    
  if(l == 1)
    return names[0] + ' likes this';
  
  if(l == 2)
    return names[0] + ' and ' + names[1] + ' like this';
  
  if(l == 3)
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; 
  
  if(l > 3)
    {
    let count = l - 2;
    return names[0] + ', ' + names[1] + ' and ' + count + ' others like this';
    }
  
}