function solve(a,b){
return a.split('').filter(x => !b.includes(x)).join('') + b.split('').filter(x => !a.includes(x)).join('');
};