const repeatString = function(text, num) {
    let output
   
    num >= 1 ? output = text : 
    num < 0 ? output = "ERROR" : output = "";

    for (i = 1; i < num; i++) {
        output += text
    }
    
    return output

};

// Do not edit below this line
module.exports = repeatString;
