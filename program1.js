/**
 * @param {string} s
 * @return {boolean}
 */
//  I am using comments for the clear understanding

var isValid = function(s) {
    const stack = [];             // stack for Store the un-pair of brackets

    for (let i = 0; i < s.length; i++) {
        const cur = s[i];          // tack one character from input string 
        if (stack.length) {         
            const last = stack[stack.length - 1];
            if (isPair(last, cur)) {           // check both brackets same or not like (),[],{}
                stack.pop();                   // if both are same then we pop 
                continue;
            }
        }
        stack.push(cur);
    }

    return stack.length === 0;                  // if stack is empty then we can say it is valid else unvalid brackets pair
};

var isPair = function(last, cur) {        // isPair is a function that returns true of false based on its arguments
    return (
        (last === '(' && cur === ')') ||
        (last === '{' && cur === '}') ||
        (last === '[' && cur === ']')
    );
};

module.exports = { isValid };


