/**
 *
 *  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const charMap = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    function findPartner(array, char) {
        return array.filter((item) => item === charMap[char]) ? true : false
    }

    var strArray = Array.from(s)
    if (strArray.length > 0) {
        var compareArray = Array.from(s).shift()
        compareArray.forEach((item, index) => {

        })
    }

    return false
};

console.log(isValid('()[]{}'))
