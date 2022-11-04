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
