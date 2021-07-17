var maxRedigit = function(num) {
 
  if(num.toString().length != 3)
    return null

  return +num.toString().split('').sort((a, b) => b - a).join('');
};