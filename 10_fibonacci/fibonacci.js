const fibonacci = function(input) {
    let index = Number(input) + 1
    let fibArray = [0, 1]
    if (input < 0) {
        return "OOPS"
    }
    if (index !== 0) {
        for (i = 2; i < index; i++) {
            let newNumber = fibArray[i-2] + fibArray[i-1]
            fibArray.push(newNumber)
        }
        console.table(fibArray)
    return fibArray[index-1]
    } else return 0
};

// Do not edit below this line
module.exports = fibonacci;
