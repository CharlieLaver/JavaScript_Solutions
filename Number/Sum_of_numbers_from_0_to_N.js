var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) 
  {
    if(count == 0)
      {
        return '0=0';
      }
    
    if(count < 0)
      {
        return count + '<' + '0';
      }
    
    let arr = [];
    let total = 0;
    
    for(let i = 0; i < count + 1; i++)
      {
        total = total + i;
        arr.push(i);
      }
    let str = arr.join('+');
    let res = str + ' = ' + total;
    return res;
  };

  return SequenceSum;

})();
