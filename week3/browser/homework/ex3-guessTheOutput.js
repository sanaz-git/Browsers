// ** Exercise 3: Guess the output **
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// the output is 12, because, "a = 12" declares a block-scoped local variable, and local variables gain priority over global variables.
