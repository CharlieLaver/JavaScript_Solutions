const toCamelCase = (str) => {
  if(str.length == 0) return '';
  if(str.includes('_')) 
    return str.split('_').map((x,i) => {if(i != 0) {let curr = x.split(''); curr[0] = curr[0].toUpperCase(); return curr.join('');} else return x;}).join('');
   else 
    return str.split('-').map((x,i) => {if(i != 0) {let curr = x.split(''); curr[0] = curr[0].toUpperCase(); return curr.join('');} else return x;}).join('');
}