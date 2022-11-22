/************************************************************ 

PROBLEM: Longest word
INPUT: "Hi there find the long word0"
OUTPUT:  ["there", "word0"]
*/
(function (str) {
  console.log(arguments.length);
  //create filtered array
  let strArr = str.toLowerCase().match(/[a-z0-9]+/g);
  //sort by element length
  let sorted = strArr.sort((a, b) => {
    return b.length - a.length;
  });
  //get the single longest word
  console.log("Single Longest Word: " + sorted[0]);
  //get the multiple longest word
  let longestArr = sorted.filter((el) => {
    return el.length === sorted[0].length;
  });
  console.log("Multiple Longest Word:", longestArr);
  console.log(strArr);
  console.log(sorted);
})("Hi there find the long word0");
/************************************************************ 

PROBLEM: Chunk array
INPUT: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
OUTPUT: [[1,2],[3,4],[5,6],[7,8][9]]
*/
(function (arr, len) {
  //initialize empty chunk array
  let chunkArr = [];
  //initialize the initial index
  let i = 0;
  //iterate array while index is less than array
  while (i < arr.length) {
    chunkArr.push(arr.slice(i, i + len));
    i = i + len;
  }
  console.log(chunkArr);
})([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/
/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

/************************************************************ 

PROBLEM: String Reverse
INPUT: hello
OUTPUT: olleh
*/

//SOLUTION- 1 reverse function
const revStr = (str) => str.split("").reverse().join("");
console.log(revStr("hello"));

//SOLUTION- 2 for loop

const revStr1 = (str) => {
  let newStr = "";
  for (let i = 0; i <= str.length - 1; i++) {
    newStr = str[i] + newStr;
  }
  return newStr;
};
console.log(revStr1("hello"));

//SOLUTION- 3  for loop reverse

const revStr2 = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
};
console.log(revStr2("hello"));

//SOLUTION- 4  forEach loop

const revStr3 = (str) => {
  let newStr = "";
  str.split("").forEach((el) => {
    newStr = el + newStr;
  });
  return newStr;
};
console.log(revStr3("hello"));

//SOLUTION- 5 for of loop
const revStr4 = (str) => {
  let newStr = "";
  for (let el of str) {
    newStr = el + newStr;
  }
  return newStr;
};
console.log(revStr4("hello"));

//SOLUTION- 6 reduce()
const revStr5 = (str) => {
  return str.split("").reduce((acc, el) => el + acc, "");
};
console.log(revStr5("hello"));

/************************************************************ 

PROBLEM: String Palindrome
INPUT: madam
OUTPUT: true
SOLUTION -1 reverse()
*/
(function (str) {
  const revStr = str.split("").reverse().join("");
  console.log(revStr === str);
})("madam");

/******************************************************* 
PROBLEM: Reverse Integer
INPUT: 12345
OUTPUT: 54321
SOLUTION -1 reverse() integer
*/
(function (str) {
  const revStr = str.toString().split("").reverse().join("");
  // let numValue = parseInt(revStr);
  // let numValue = +revStr;
  let numValue = Number(revStr);
  console.log("Output:", numValue);
})(12345);

/********************************************************* 
PROBLEM: Return length of max character in string
INPUT: hellooo
OUTPUT: 3    / o: 3
SOLUTION -1
*/

(function (str) {
  let tempObj = {};
  let max = 0;
  let maxKey = "";
  for (let char of str) {
    if (tempObj[char]) {
      tempObj[char]++;
    } else {
      tempObj[char] = 1;
    }
  }
  console.log("tempObj", tempObj);
  for (let key in tempObj) {
    if (tempObj[key] > max) {
      max = tempObj[key];
      maxKey = key;
    }
  }
  console.log(`${maxKey}: ${max}`);
  console.log("max", max);

  let maxKeys = Object.keys(tempObj).reduce((a, b) => {
    return tempObj[a] > tempObj[b] ? a : b;
  });
  console.log("maxKeys", maxKeys);
})("hellllllooooooo");

/***************************************************************** */
/*
PROBLEM: Return length of max character in string
INPUT: hellooo
OUTPUT: 3    / o: 3
SOLUTION -1
input : hi there i am new string
output: Hi There I Am New String
*/
(function (str) {
  let strArray = str.toLowerCase().split(" ");
  console.log("strArray", strArray);
  //for loop
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] =
      strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
  }
  console.log(strArray.join(" "));
})("hello i am the new string");

(function (str) {
  let capitliz = str
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(" ");
  console.log(capitliz);
})("hi there i am new string");

/********************************************************* */
/*
input: 15
output : 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
*/

function fizzBuzz(num) {
  let x = 0;
  while (++x < num)
    console.log((x % 3 ? "" : "Fizz") + (x % 5 ? "" : "Buzz") || x);
}
fizzBuzz(16);

let toArray = Array.from({ length: 100 }, (_, i) => i + 1);
const fizzBuzz1 = (i) => {
  if (Number.isInteger(i / 15)) return "FizzBuzz";
  if (Number.isInteger(i / 3)) return "Fizz";
  if (Number.isInteger(i / 5)) return "Buzz";
  return i;
};
console.log(toArray.map((i) => fizzBuzz1(i)).join("\n"));

/********************************************************************** */
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]

const twoSum = (nums, target) => {
  let tempObj = {};
  console.log("nums:", nums.entries());
  for (let [index, num] of nums.entries()) {
    console.log("num:", num);
    if (tempObj[num] !== undefined) return [tempObj[num], index];

    tempObj[target - num] = index;

    console.log("tempObj[target- num]", tempObj[target - num]);
    console.log("index", index);

    console.log("tempObj", tempObj);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
/********************************************************** */

/*
Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/

const reverseInt = (num) => {
  if (num < 0) {
    return -1 * reverseInt(-num);
  }
  const strNum = String(num);
  console.log("strNum", strNum);
  const reversed = strNum.split("").reverse().join("");
  console.log("reversed", reversed);
  return reversed;
};

console.log(reverseInt(120));
/********************************************************** */

/*
Given any two numbers ( Multiply numbers ) without multiplication 
 Input => (3, 5)
 Output => 15 

*/

function multiply(num1, num2) {
  // 3 * 5 = 3+3 3+3+3
  let arr = [];
  if (num2 > 0) {
    while (num2 > 0) {
      arr.push(num1);
      num2--;
    }
    return arr.reduce((cur, next) => {
      return cur + next;
    }, 0);
  }
  if (num2 < 0) {
    console.log("num2", num2);
    num2 = Math.abs(num2);
    console.log("num2--", num2);
    while (num2 > 0) {
      arr.push(num1);
      num2--;
    }
    let sum = arr.reduce((cur, next) => {
      return cur + next;
    }, 0);
    return -sum;
  }
  console.log("Arr =>", arr);
}

console.log(multiply(3, -5));
/********************************************************** */
/*

input = [2,4,6,8]
output = aithmatic

input = [3,9,27]
output = geomatric

*/

const mathCalc = (arr) => {
  let arith = new Set();
  let geoM = new Set();
  for (let i = 1; i < arr.length; i++) {
    // console.log('arr[i] =>', arr[i]);
    let num1 = arr[i] - arr[i - 1];
    arith.add(num1);
    let num2 = arr[i] / arr[i - 1];
    geoM.add(num2);
  }
  return arith.size == 1
    ? "arithmatic"
    : geoM.size == 1
    ? "Geometric"
    : "No Sequence";
};

console.log(mathCalc([2, 4, 6, 8]));
console.log(mathCalc([6, 4, 6, 8]));
console.log(mathCalc([3, 9, 27]));
/********************************************************** */

/*
input = "I am the your boss"
output = ["your","boss"]
*/

const longestWords = (list) => {
  let size = 0;
  let maxArray = [""];
  let newList = list.split(" ");
  for (let word of newList) {
    if (word.length >= size) {
      if (maxArray[maxArray.length - 1].length < word.length) {
        maxArray = [];
        console.log(
          "maxArray[maxArray.length - 1]",
          maxArray[maxArray.length - 1]
        );
        maxArray.push(word);
      } else {
        maxArray = [...maxArray, word];
      }
    }
  }
  return maxArray;
};

console.log(longestWords("Immm am trea boss"));
/********************************************************** */

/*
input = "I am the boss"
output = "boss"
*/

const longWord = (inputstr) => {
  let words = inputstr.split(" ");
  let longestword = "";
  for (let word of words) {
    console.log(" word =>", word);
    if (longestword.length < word.length) {
      longestword = word;
    }
  }
  console.log("longword =>", longestword);
  return inputstr;
};

console.log(longWord("I am the boss"));
/********************************************************** */
/*
Given a number Check number is even or not
Notes: 
1. Without modulo % operator
2. It should work with negative and zero
input => 8
output => true
*/

function isEven(num) {
  num = Math.abs(num);
  console.log("num =>", num);
  var f = Math.floor(num / 2);
  console.log("F =>", f);
  const mod = num - 2 * f;
  console.log("Mod =>", mod);
  return mod === 0 ? true : false;
}

console.log(isEven(-6));
/********************************************************** */

/*
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

*/

const generateParam = (n) => {
  let solution = [];
  const generateCombo = (leftPcount, rightPCount, partial) => {
    if (leftPcount > rightPCount) {
      console.log("left p count is greater than right");
      return;
    }

    if (!leftPcount && !rightPCount) {
      console.log("left p count is not equal to right");
      return solution.push(partial);
    }
    if (leftPcount > 0) {
      generateCombo(leftPcount - 1, rightPCount, partial + "(");
    }

    if (rightPCount > 0) {
      generateCombo(leftPcount, rightPCount - 1, partial + ")");
    }
  };
  generateCombo(n, n, "");
  return solution;
};

console.log("Generate Param", generateParam(2));
/********************************************************** */

/*
getSequence(1, 5) ➞ [1, 2, 3, 4, 5]
getSequence(98, 100) ➞ [98, 99, 100]
getSequence(1000, 1000) ➞ [1000]
*/

const getSequence = (low, high) =>
  Array.from({ length: high - low + 1 }, (_, i) => low + i);

console.log(getSequence(1, 5));
console.log(getSequence(98, 100));
console.log(getSequence(1000, 1000));

/********************************************************** */
/*
getSequence(1, 5) ➞ [1, 2, 3, 4, 5]
getSequence(98, 100) ➞ [98, 99, 100]
getSequence(1000, 1000) ➞ [1000]
*/

const getSequence2 = (low, high) =>
  Array.from({ length: high - low + 1 }, (_, i) => low + i);

console.log(getSequence2(1, 5));
console.log(getSequence2(98, 100));
console.log(getSequence2(1000, 1000));

/********************************************************** */

/*
input => (1, 4)
output => 1 + 2 + 3 = 6

*/

const computeSum = (num1, num2) => {
  console.log(typeof num1);
  let arr = [];
  while (num2 > num1) {
    num2--;

    arr.push(num2);
  }
  // console.log("arr", arr);
  let newArr = arr.reduce((cur, next) => {
    return cur + next;
  });
  return newArr;
};

console.log("----", computeSum(1, 4));

/************************************************************ */
/*
input => (m)
output => 4

*/

//Char repeating
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

/*********************************************************** */

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
console.log("capital:", capitalize2);
const makeTitle = (str) => str.split(" ").map(capitalize2).join(" ");
console.log(capitalize1("  i am   the     your boss"));
console.log(makeTitle(" i am the     your   boss"));

/******************************************************** */

/*
alternatingCaps("Hello") ➞ "HeLlO"
alternatingCaps("How are you?") ➞ "HoW aRe YoU?"
alternatingCaps("OMG this website is awesome!") ➞ "OmG tHiS wEbSiTe Is AwEsOmE!"
The first character should always be UPPERCASE.
    Ignore spaces.
*/

const alternatingCaps = (str) => {
  let counter = 0;
  return Array.from(str, (char) => {
    if (/\s/.test(char)) return char;
    counter += 1;
    console.log(`counter ${counter}`);
    console.log(`${counter % 2}`);
    return counter % 2 ? char.toUpperCase() : char.toLowerCase();
  }).join("");
};
console.log(/\s/.test("acD"));
console.log(alternatingCaps("Hello"));
console.log(alternatingCaps("How are you?"));

/*********************************************************** */

/*
//SOLUTION- 1
addStrNums("4", "5") ➞ "9"
addStrNums("abcdefg", "3") ➞ "-1"
addStrNums("1", "") ➞ "1"
*/
const sum = (arr) => arr.reduce((total, num) => total + num, Number(0));

const addStrNums = (...strings) => {
  let strsum = strings.some((str) => /\D/.test(str));
  console.log(`StrSum ${strsum}`);
  if (strsum) return "-1";
  return String(sum(strings.map(Number)));
};

console.log(addStrNums("4", "5"));
console.log(addStrNums("abcdefg", "3"));
console.log(addStrNums("1", ""));
console.log(`Test ${/\D/.test("qwe")}`);

/************************************************************** */

//INPUT: hellooo
//OUTPUT: helo
// add("111", "111") -> "222"
// add("10", "80") -> "90"
// add("","20") -> "Invalid Operation"
// If any input is "", Undefined, Null return "Invalid Operation" as result.
//SOLUTION- 1

const add = (...nums) => {
  let falsy = [null, undefined, ""];
  if (nums.some((num) => falsy.includes(num))) return "Operation not permitted";
  let result = String(Number(nums[0]) + Number(nums[1]));
  console.log(typeof result);
  return result;
};

console.log(add("111", "111"));
console.log(add("10", "80"));
console.log(add("", "20"));

/************************************************************ */

//PROBLEM: Remove the repeating characters [ duplicates] from the string
//INPUT: hellooo
//OUTPUT: helo
//SOLUTION- 1

(function (str) {
  let tempObj = {};
  for (let char of str) {
    if (!tempObj[char]) {
      tempObj[char] = true;
    }
  }
  console.log("tempObj", Object.keys(tempObj).join(""));
})("hellllllooooooo");

/************************************************************ */

//PROBLEM: Remove the repeating integers [ duplicates] from the numbers
//INPUT: 123456555
//OUTPUT: 123456
//SOLUTION- 1

(function (str) {
  let tempObj = {};
  let charFromNum = str.toString();
  for (let char of charFromNum) {
    if (!tempObj[char]) {
      tempObj[char] = true;
    }
  }
  console.log("tempObj", Number(Object.keys(tempObj).join("")));
})(123456555);

/********************************************************** */

//PROBLEM: Remove the all repeating characters [ duplicates] from the string
//INPUT: hellooo
//OUTPUT: he
//SOLUTION- 1

(function (str) {
  let tempObj = {};
  for (let char of str) {
    if (tempObj[char]) {
      tempObj[char]++;
    } else {
      tempObj[char] = 1;
    }
  }
  for (let key in tempObj) {
    if (tempObj[key] > 1) {
      delete tempObj[key];
    }
  }
  console.log("tempObj", Object.keys(tempObj).join(""));
})("hellllllooooooo");

/*************************************************************** */
//PROBLEM: Remove the all repeating characters [ duplicates] from the string
//INPUT: hellooo
//OUTPUT: he
//SOLUTION- 2
const charRepet = (str) => {
  let tempObj = {};
  for (let char of str) {
    if (!tempObj[char]) {
      tempObj[char] = 1;
    } else {
      tempObj[char] += 1;
    }
  }
  for (let [key, value] of Object.entries(tempObj)) {
    console.log(key, value);
    if (value > 1) {
      delete tempObj[key];
    }
  }
  return Object.keys(tempObj).join("");
};

console.log(charRepet("hello"));
