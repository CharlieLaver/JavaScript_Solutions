const vowelChange = (str, vow) => {
  const vowels = ['a', 'e', 'o', 'u', 'i'];
  return  str.split('').map(x => {if(vowels.includes(x)) x = vow; return x}).join('');  
}