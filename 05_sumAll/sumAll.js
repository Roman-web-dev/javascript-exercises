const sumAll = function(firstNum, secondNum) {

    if(firstNum < 0 || secondNum < 0 ||
        !Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR"
    }
    
    let largest, smallest

    if (firstNum < secondNum) {
         largest = secondNum
         smallest = firstNum
    } else {
         largest = firstNum
         smallest = secondNum
    }

    let n = largest - smallest + 1;
    let sum = (n * (smallest + largest)) / 2;
    
    return sum

};

// Do not edit below this line
module.exports = sumAll;
