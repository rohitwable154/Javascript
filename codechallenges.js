/*
Create a function that takes two input and returns the sum of two inputs as a string.
Examples

add("111", "111") -> "222"
add("10", "80") -> "90"
add("","20") -> "Invalid Operation"

Notes

If any input is "", Undefined, Null return "Invalid Operation" as result.
*/

const add = (...nums) => {
  let falsy = [null, undefined, ""];
  if (nums.some((num) => falsy.includes(num))) return "Operation not permitted";
  let result = String(Number(nums[0]) + Number(nums[1]));
  // console.log(typeof result);
  return result;
};

console.log(add("111", "111"));
console.log(add("10", "80"));
console.log(add("", "20"));


/*
Write a function that adds two numbers. The catch, however, is that the numbers will be strings.

Examples
addStrNums("4", "5") ➞ "9"

addStrNums("abcdefg", "3") ➞ "-1"

addStrNums("1", "") ➞ "1"
*/
const sum = (arr) => arr.reduce((total, num) => total + num, Number(0));

const addStrNums = (...strings) => {
  let strsum = strings.some((str) => /\D/.test(str));
  // console.log(`StrSum ${strsum}`);
  if (strsum) return "-1";
  return String(sum(strings.map(Number)));
};

console.log(addStrNums("4", "5"));
console.log(addStrNums("abcdefg", "3"));
console.log(addStrNums("abcdefg", "3"));

console.log(addStrNums("1", ""));
// console.log(`Test ${/\D/.test("qwe")}`);


/*
Create a function that alternates the case of the letters in a string.
Examples

alternatingCaps("Hello") ➞ "HeLlO"

alternatingCaps("How are you?") ➞ "HoW aRe YoU?"

alternatingCaps("OMG this website is awesome!") ➞ "OmG tHiS wEbSiTe Is AwEsOmE!"

Notes

    The first character should always be UPPERCASE.
    Ignore spaces.
*/

const alternatingCaps = (str) => {
  let counter = 0;
  return Array.from(str, (char) => {
    if (/\s/.test(char)) return char;
    counter += 1;
    // console.log(`counter ${counter}`);
    // console.log(`${counter % 2}`);
    return counter % 2 ? char.toUpperCase() : char.toLowerCase();
  }).join("");
};
// console.log(/\s/.test("acD"));
console.log(alternatingCaps("Hello"));
console.log(alternatingCaps("How are you?"));


/*
input = "I am the your boss"
output = "I Am The Your Boss"
*/

const capitalize1 = (str) => {
  const newStr = str.trim().toLowerCase().split(" ");
  console.log("New Str: =>", newStr);
  let final = newStr
    .map((word) => {
      let first = word.slice(0, 1).toUpperCase();
      console.log("first =>>", first);
      let rest = word.slice(1).toLowerCase();
      console.log("rest ==>", rest);
      return first + rest;
    })
    .join(" ");
  console.log("final =>", final);

  return final;
};

const capitalize2 = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
// console.log("capital:", capitalize2);
const makeTitle = (str) => str.split(" ").map(capitalize2).join(" ");

export default makeTitle;

console.log(capitalize1("  i am   the     your boss"));
console.log(makeTitle(" i am the     your   boss"));


const myFunction = (str1, str2) => {
  let num = 0;
  const lowerArr = Array.from(str2.toLowerCase());
  lowerArr.forEach((ele) => {
    if (ele === str1) {
      num += 1;
    }
  });
  return num;
};

console.log(
  myFunction("m", "How many times does the character occur in this sentence?")
);
console.log(
  myFunction("h", "How many times does the character occur in this sentence?")
);
console.log(
  myFunction("?", "How many times does the character occur in this sentence?")
);
console.log(
  myFunction("z", "How many times does the character occur in this sentence?")
);


/*
input => (1, 4)
output => 1 + 2 + 3 = 6

*/

const computeSum = (num1, num2) => {
  console.log(typeof num1);
  let arr = [];
  while (num2 > num1) {
    // console.log("num2 =>", num2);
    num2--;

    arr.push(num2);
  }
  console.log("arr", arr);
  let newArr = arr.reduce((cur, next) => {
    return cur + next;
  });
  return newArr;
};

console.log(computeSum(2, 4));
