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
const isValid = (s) => {
  if (s.length === 1) return false;
  let stack = [];
  let dict = {
    '(': ')',
    ')': '(',
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
  };

  for (let char of s) {
    // 最近的一个待匹配项
    const latestChar = stack[stack.length - 1];

    // 是否找到相匹配的项
    if (dict[char] === latestChar) {
      // 两相匹配， 消除
      stack.pop();
    } else {
      // 进入待匹配区
      stack.push(char);
    }
  }

  // 是否已没有待匹配的项
  return stack.length===0;
};


console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true

