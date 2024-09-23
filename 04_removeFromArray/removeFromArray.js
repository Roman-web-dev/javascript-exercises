const removeFromArray = function() {

    let arr = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        while (arr.includes(arguments[i])) {
           
            arr.splice(arr.indexOf(arguments[i]), 1)
           
        } 
    }
    console.log(arr)
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
