/**
 * @param {Function[]} functions  
 * @return {Function}              
 */
var compose = function (functions) {
  return function (x) {            // closure captures `functions`
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);         // feed output into the next function
    }
    return x;                      // identity if the array was empty
  };
};
