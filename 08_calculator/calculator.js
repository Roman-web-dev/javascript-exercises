const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((total, item) => total += item, 0)               
};

const multiply = function(array) {
  return array.reduce((total, item) => total *= item, 1)
};

const power = function(a, b) {
	let total = 1
  for (let i = b; i > 0; i--) {
    total *= a
  }
  return total
};

const factorial = function(num) {
  if (num !== 0) { 
  for (let i = num - 1; i > 0; i--) {
    num *= i
  }
  return num
} else return 1
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
