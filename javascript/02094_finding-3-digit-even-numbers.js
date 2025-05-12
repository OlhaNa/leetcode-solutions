/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  const n   = digits.length;
  const set = new Set();             

  for (let i = 0; i < n; i++) {       
    if (digits[i] === 0) continue;     

    for (let j = 0; j < n; j++) {     
      if (j === i) continue;

      for (let k = 0; k < n; k++) {   
        if (k === i || k === j) continue;

        const unit = digits[k];
        if (unit % 2) continue;       

        const num = digits[i] * 100 + digits[j] * 10 + unit;
        set.add(num);                 
      }
    }
  }
  return [...set].sort((a, b) => a - b);
};
