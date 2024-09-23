const reverseString = function(text) {
    
    let reversed =[]

    for (i = text.length; i >= 0; i--) {
        reversed.push(text[i])
    }

    reversed.shift()

    return reversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
