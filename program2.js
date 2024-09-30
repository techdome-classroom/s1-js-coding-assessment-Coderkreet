/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const sym = {                           // create a object for the assign a value of each character
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;                        // store a result in this variable 

    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];            // tack a integer value into sym object
        const next = sym[s[i + 1]];

        if (cur < next) {                   // ceck condition 
            result += next - cur;
            i++;
        } else {                                // add on result 
            result += cur;
        }
    }

    return result;                           // return result
};


module.exports={romanToInt}