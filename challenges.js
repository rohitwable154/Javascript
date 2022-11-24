Function which returns a random number in the given range

    Create a function which returns a random number in the given range of values both inclusive

TEST CASES
TEST 	RESULT
randomNumberGeneratorInRange(10, 50) 	should return a number between 10-50 (inclusive)
randomNumberGeneratorInRange(100, 200) 	should return a number between 100-200 (inclusive)

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return ~~(Math.random() * (rangeEnd - rangeStart) + rangeStart);
}

// Instead of Math.floor() we can use double telda ~~ symbol for conversion

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);

***************************************************************
  
  Write a function to remove array element based on object property?
    const array = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

const filterField = "money";

function removeArrayElement(filterField) {
  return array.filter((val) => {
    return filterField !== val.field;
  });
}

console.log(`filtered array: ${removeArrayElement(filterField)}`);

Return the N-th value of the Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`);

Given a number from 0 to 999,999,999,999, spell out that number in English.


var NUMBER2TEXT = {
  ones: [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ],
  tens: [
    "",
    "",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ],
  sep: [
    "",
    " thousand ",
    " million ",
    " billion ",
    " trillion ",
    " quadrillion ",
    " quintillion ",
    " sextillion ",
  ],
};

const { ones, tens, sep } = NUMBER2TEXT;

const sayNumberInEnglish = (number) => {
  let arr = [],
    str = "",
    i = 0;
  if (number.length === 0) {
    return;
  }

  number = parseInt(number, 10);
  if (isNaN(number)) {
    return;
  }

  while (number) {
    arr.push(number % 1000);
    number = parseInt(number / 1000, 10);
  }

  while (arr.length) {
    str =
      (function (a) {
        var x = Math.floor(a / 100),
          y = Math.floor(a / 10) % 10,
          z = a % 10;

        return (
          (x > 0 ? ones[x] + " hundred " : "") +
          (y >= 2 ? tens[y] + "-" + ones[z] : ones[10 * y + z])
        );
      })(arr.shift()) +
      sep[i++] +
      str;
  }

  return str;
};

console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`);


Convert given seconds to space age on all planets of our solar system

const earthSeconds = 31556926;
const getAge = (planet, seconds) => {
  return Number((seconds / (earthSeconds * planet)).toFixed(2));
};

const spaceAge = (seconds) => {
  const yearsInAllPlanets = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  };

  yearsInAllPlanets["Mercury"] = getAge(yearsInAllPlanets.Mercury, seconds);
  yearsInAllPlanets["Venus"] = getAge(yearsInAllPlanets.Venus, seconds);
  yearsInAllPlanets["Earth"] = getAge(yearsInAllPlanets.Earth, seconds);
  yearsInAllPlanets["Mars"] = getAge(yearsInAllPlanets.Mars, seconds);
  yearsInAllPlanets["Jupiter"] = getAge(yearsInAllPlanets.Jupiter, seconds);
  yearsInAllPlanets["Saturn"] = getAge(yearsInAllPlanets.Saturn, seconds);
  yearsInAllPlanets["Uranus"] = getAge(yearsInAllPlanets.Uranus, seconds);
  yearsInAllPlanets["Neptune"] = getAge(yearsInAllPlanets.Neptune, seconds);

  return yearsInAllPlanets;
};

console.log(spaceAge(Math.round(26596272
)));


Determine if a sentence is a pangram

const isPangram = (input) => {
  input = input.toLowerCase();
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabets.every((x) => input.includes(x));
};

// 2nd Solution
// 	let strArr = input.toLowerCase();
// let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

//   for (let i = 0; i < alphabets.length; i++) {
//     if(strArr.indexOf(alphabets[i]) < 0){
//       return false;
//     }
//   }
//   return true;

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

Ask the Bob

function hey(message) {
  let bobResponse = "";
  switch (message) {
    case "How are you?":
      bobResponse = "Sure.";
      break;
    case "YELL":
      bobResponse = "Whoa, chill out!";
      break;
    case "YELL???":
      bobResponse = "Calm down, I know what I'm doing!";
      break;
    case "":
      bobResponse = "Fine. Be that way!";
      break;
    default:
      bobResponse = "Whatever.";
  }
  return bobResponse;
}

console.log(hey("YELL"));
console.log(hey("How are you?"));

Convert given array of digits of a base to another asked base


/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
  let digit = parseInt(digits.join(""), baseA);
  const numAtRequiredBase = digit.toString(baseB);
  let newArray = numAtRequiredBase.split("");

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "a") {
      newArray[i] = 10;
    } else if (newArray[i] === "b") {
      newArray[i] = 11;
    } else if (newArray[i] === "c") {
      newArray[i] = 12;
    } else if (newArray[i] === "d") {
      newArray[i] = 13;
    } else if (newArray[i] === "e") {
      newArray[i] = 14;
    } else if (newArray[i] === "f") {
      newArray[i] = 15;
    } else {
      newArray[i] = parseInt(newArray[i]);
    }
  }
  return newArray;
};

console.log(convertDigitsToAskedBase([5, 8], 10, 16));

Longest Consecutive Sequence

/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
  // Your code here
  if (inputArray.length === 0) return 0;
  let count = 1,
    max = 1;
  inputArray.sort((a, b) => a - b);
  for (let i = 0; i <= inputArray.length; i++) {
    if (inputArray[i] - inputArray[i - 1] === 1) {
      count = count + 1;
      max = Math.max(max, count);
    } else if (inputArray[i] === inputArray[i - 1]) continue;
    else {
      count = 1;
    }
  }
  return max;
};

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));

Calculate Grains on a given square on a chessboard

const totalGrains = () => {
  let ans = BigInt(0);
  for (let i = 0; i < 64; i++) {
    ans += BigInt(2 ** i);
  }
  return ans;
};

const grainsOn = (input) => {
  return BigInt(2 ** input - 1);
};

console.log(`Grains on 5th square: ${grainsOn(3)}`);
console.log(`Total grains upto 5th square: ${totalGrains(5)}`);

Resistor Color map

const colorCode = (color) => {
  const colors = {
    Black: 0,
    Brown: 1,
    Red: 2,
    Orange: 3,
    Yellow: 4,
    Green: 5,
    Blue: 6,
    Violet: 7,
    Grey: 8,
    White: 9,
  };
  for (let key in colors) {
    if (key.toLowerCase() === color) return colors[key];
  }
};

console.log(colorCode("blue"));

Write a program to reverse a string

const str = "JavaScript is awesome";

function reverseAString(str) {
  let reversedString = "";
  for (let char of str) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

// 2nd SOlution
// return str.split('').reverse().join('');

console.log(`Reversed string is: ${reverseAString(str)}`);

Add Two Numbers

const Sum = (num1, num2) => {
  return num1 + num2;
};

console.log(Sum(15, 7));

Union of Two Arrays

const unionOfArrays = (arr1, arr2) => {
  const union = [...new Set([...arr1, ...arr2])];
  return union;
};

// Solution # 2
const unionOfArrays = (arr1, arr2) => {
  const arr = arr1.concat(arr2);
  return arr.filter((elem, index) => {
    return arr.indexOf(elem) === index;
  });
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);

Unique In Order

let uniqueInOrder = (iterable) => {
  let arr = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) arr.push(iterable[i]);
  }
  return arr;
};

// Solution # 2
let uniqueInOrder = (iterable) => {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

Equal Sides Of An Array

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) leftSum += arr[j];
    for (let j = i + 1; j < arr.length; j++) rightSum += arr[j];

    if (leftSum === rightSum) return i;
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

Write Number in Expanded Form


function expandedForm(num) {
  num = num.toString();
  const equation = [];
  let multiplier = 1;
  for (let i = 1; i <= num.length; i++) {
    const digit = num[num.length - i];
    digit > 0 && equation.unshift(digit * multiplier);
    multiplier *= 10;
  }
  return equation.join("+");
}

// 2nd Solution
const expandedForm = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join("+");

// 3rd Solution
function expandedForm(num) {
  var multiple = 10;
  var result = [];
  while (num > 1) {
    var remainder = num % multiple;
    if (remainder > 0) {
      result.unshift(remainder);
    }
    num -= remainder;
    multiple = multiple * 10;
  }
  return result.join(" + ");
}

// 4th Solution
const expandedForm = (num) => {
  const numStr = String(num);
  let res = "";
  for (let i = 0; i < numStr.length; i++) {
    const placeValue = +numStr[i] * Math.pow(10, numStr.length - 1 - i);
    if (numStr.length - i > 1) {
      res += `${placeValue}+`;
    } else {
      res += placeValue;
    }
  }
  return res;
};

console.log(expandedForm(734));

Stop gninnipS My sdroW!
  
  function spinWords(string) {
  string = string.split(" ");
  string = string.map((str) => {
    return str.length > 4 ? str.split("").reverse().join("") : str;
  });
  return string.join(" ");
}

console.log(spinWords("Hey fellow warriors"));

Find the odd int

function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter((value) => value === arr[i]).length;
    if (count % 2 == 1) {
      return arr[i];
    }
  }
  return -1;
}

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));

Vowel Count

function getCount(str) {
  str = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (let letter of str) {
    if (vowels.includes(letter)) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

// 2nd Solution
function getCount(str) {
  const vowelsCount = str.match(/[aeiou]/gi).length;
  return vowelsCount;
}
console.log(getCount("abracadabra"));

WeIrD StRiNg CaSe

function toWeirdCase(string) {
  let newStr = [];
  // Your code goes here
  for (let i = 0; i < string.length; i++) {
    newStr.push(
      i % 2 === 0 ? string[i].toUpperCase() : string[i].toLowerCase()
    );
  }
  return newStr.join("");
}

//   if(i%2 === 0) {
//       newStr.push(string[i].toUpperCase())
//   }
//   else {
//       newStr.push(string[i].toLowerCase())
//   }

console.log(
  `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);

Mumbling

function accum(s) {
  s = s.toLowerCase();
  let newStr = [];
  for (let i = 0; i < s.length; i++) {
    let newCh = s[i].repeat(i + 1);
    newCh = newCh.charAt(0).toUpperCase() + newCh.slice(1);
    newStr.push(newCh);
    newStr.push("-");
  }
  newStr.pop();
  return newStr.join("");
}

console.log(accum("ZpglnRxqenU"));

Write a program to reverse a given integer number

const num = 3849;

function reverseGivenInteger(num) {
  let reversedNumber = 0,
    remainder = 0;
  while (num > 0) {
    remainder = num % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return reversedNumber;
}

// 2nd Solution
// return num.toString().split("").reverse().join("");

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);

Write a program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(a, b) {
  // Everything divides 0
  if (a == 0) return b;
  if (b == 0) return a;

  // base case
  if (a == b) return a;

  // a is greater
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}

const a = 2154;
const b = 458;

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));

Write a Program to Find the Factorial of a Number

function factorial(n) {
  let fact = 1;
  while (n >= 1) {
    fact *= n;
    n--;
  }
  return fact;
}

console.log("The factorial of " + n + " is " + factorial(5));

Mexican Wave

function wave(str) {
  let waveArray = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === " ") {
      continue;
    } else {
      waveArray.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
    }
  }
  return waveArray;
}

console.log(wave("hello"));

Write a program to print unique values from an array

function set(arrOfNum) {
  return [...new Set([...arrOfNum])];
}

// Solution # 2
return arrOfNum.filter((val, idx) => idx === arrOfNum.indexOf(val));

// Solution # 3
if (arrOfNum.length > 0) {
  var result = [];

  arrOfNum.forEach((elem) => {
    if (result.indexOf(elem) === -1) {
      result.push(elem);
    }
  });

  return result;
}
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));

Write a program to find the most frequent item of an array

function mostFreq(arr) {
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) m++;
      if (mf < m) {
        mf = m;
        item = arr[i];
      }
    }
    m = 0;
  }
  return [item, mf].join(" ").toString();
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

console.log(mostFreq(arr));

Write a JavaScript function to get nth largest element from an unsorted array.

function nthlargest(arr, highest) {
  var sorted = arr.sort((a, b) => {
    return a - b;
  });
  return sorted[sorted.length - highest];
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));

Rna Transcription


const transcription = (dna) => {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "G") {
      rna += dna[i].replace("G", "C");
    } else if (dna[i] === "C") {
      rna += dna[i].replace("C", "G");
    } else if (dna[i] === "T") {
      rna += dna[i].replace("T", "A");
    } else {
      rna += dna[i].replace("A", "U");
    }
  }
  return rna;
};

// Solution # 2
const transcription = (dna) => {
  return dna
    .split("")
    .map((dna_strand) => {
      switch (dna_strand) {
        case "G":
          return "C";
        case "C":
          return "G";
        case "T":
          return "A";
        case "A":
          return "U";
        default:
          throw new Error("Invalid input DNA.");
      }
    })
    .join("");
};

console.log(transcription("GCT"));

Tell if its a leap year

const isLeap = (year) => {
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    return true;
  }
  return false;
};

console.log(isLeap(2022));

Luhn algorithm

const valid = (string) => {
  if (string.length <= 1) return false;
  string = string.split(" ").join("");
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (i % 2 == 0) {
      let temp = +string[i] + +string[i];
      if (temp > 9) temp - 9;
      sum += temp;
    }
  }
  return sum % 10 === 0 ? true : false;
};

console.log(valid("4539 3195 0343 6467"));

Mixed Juices

const flavours = {
  "Pure Strawberry Joy": 0.5,
  Energizer: 1.5,
  "Green Garden": 1.5,
  "Tropical Island": 3,
  "All or Nothing": 5,
  Others: 2.5,
};

"str".slice

const Limes = {
  small: 6,
  medium: 8,
  large: 10,
};

const timeToMixJuice = (name) => {
  if (flavours[name]) return flavours[name];
  else return flavours["Others"];
};

const limesToCut = (wedgesNeeded, limes) => {
  let cuts = 0;
  while (wedgesNeeded > 0 && limes.length > 0) {
    const lime = limes.shift();
    switch (lime) {
      case "large":
        wedgesNeeded -= 10;
        break;
      case "medium":
        wedgesNeeded -= 8;
        break;
      default:
        wedgesNeeded -= 6;
        break;
    }
    cuts++;
  }
  return cuts;
};

const remainingOrders = (timeLeft, orders) => {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
};

console.log(timeToMixJuice("Tropical Island"));
console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));
console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
);

Write a function which can convert the time input given in 12 hours format to 24 hours format

const time = "11:8AM";

function convertTo24HrsFormat(time) {
  let [hours, rest] = time.split(":");
  let modifier = "",
    minutes = "";
  rest.endsWith("PM") ? (modifier = "PM") : (modifier = "AM");
  rest = rest.split("");
  rest.length < 4 ? rest.unshift(0) : rest;
  minutes = rest[0] + rest[1];

  minutes.length === 1 ? (minutes = "0" + minutes) : minutes;

  hours.toString().length === 1 ? (hours = "0" + hours) : hours;

  hours === "12" ? (hours = "00") : hours;

  modifier === "PM" ? (hours = parseInt(hours, 10) + 12) : hours;

  return `${hours}:${minutes}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);

Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  let min = numbers[0];
  let secondMin = numbers[1];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      secondMin = min;
      min = numbers[i];
    } else if (numbers[i] < secondMin) {
      secondMin = numbers[i];
    }
  }
  return min + secondMin;
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

Highest Scoring Word

const letterScores = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function high(x) {
  const wordList = x.split(" ");
  const getScore = (word) => {
    return word
      .split("")
      .reduce(
        (prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96,
        0
      );
  };
  const scoreList = wordList.map((word) => getScore(word));
  let highestIndex = 0;
  let highestScore = 0;
  scoreList.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });
  return wordList[highestIndex];
}

console.log(high("man i need a taxi up to ubud"));

Count the divisors of a number


function getDivisorsCnt(num) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      // If divisors are equal,
      // count only one
      if (num / i == i) cnt++;
      // Otherwise count both
      else cnt = cnt + 2;
    }
  }
  return cnt;
}

console.log(getDivisorsCnt(10));

Find The Parity Outlier

function findOutlier(integers) {
  let evens = [],
    odds = [];
  for (let num of integers) {
    if (num % 2 != 0) {
      odds.push(num);
    } else {
      evens.push(num);
    }
  }
  return evens.length === 1 ? evens[0] : odds[0];
}

console.log(findOutlier([2, 6, 8, 10, 3]));

A Needle in the Haystack

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

Isograms

function isIsogram(str) {
  var hash = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    }
    hash[str[i]] = true;
  }
  return true;
}

// Solution # 2
return new Set(str.toLowerCase()).size === str.length;

// Solution # 3
return str
  .toLowerCase()
  .split("")
  .every((val, idx) => str.indexOf(val) === idx);

console.log(isIsogram("moOse"));

Human readable duration format

function formatDuration(seconds) {
  let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = [];

  if (seconds === 0) return "now";

  for (let key in time) {
    if (seconds >= time[key]) {
      let val = ~~(seconds / time[key]);
      res.push((val += val > 1 ? " " + key + "s" : " " + key));
      seconds = seconds % time[key];
    }
  }
  return res.length > 1
    ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
    : res[0];
}

console.log(formatDuration(3662));

Is this a triangle?
  
  function isTriangle(a, b, c) {
  if (a + b > c) {
    if (b + c > a) {
      if (a + c > b) return true;
    }
  }
  return false;
}

console.log(isTriangle(1, 2, 2));

Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = "F(X) !== G(X) !== F(X)";

function getTheGapX(str) {
  let firstXPosition = str.indexOf("X");
  let lastXPosition = str.lastIndexOf("X");
  let count = 0;
  for (let i = firstXPosition; i < lastXPosition; i++) {
    count++;
  }
  if (!str.includes("X")) {
    count = -1;
  }
  return count;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);

Get the Middle Character

function getMiddle(s) {
  let mid = 0;
  if (s.length % 2 !== 0) {
    mid = ~~(s.length / 2);
    return s[mid];
  } else {
    mid = s.length / 2;
    return s[mid - 1] + s[mid];
  }
}

console.log(getMiddle("middle"));

Write a function to truncate a string to a certain number of words

const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  return str.split(" ").slice(0, wordLimit).join(" ");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);

Write a function which accepts two valid dates and returns the difference between them as number of days

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function parseDate(str) {
  var mdy = str.split("/");
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function getDaysBetweenDates(dateText1, dateText2) {
  return Math.round(
    (parseDate(dateText2) - parseDate(dateText1)) / (1000 * 60 * 60 * 24)
  );
}

console.log(
  `Days difference: ${getDaysBetweenDates("11/10/2021", "11/12/2021")}`
);

Write a function to check if an object is empty or not in javaScript?
  
  const obj = { key: 1 };

function isEmpty(obj) {
  for (var x in obj) {
    return false;
  }
  return true;
}

// 2nd Solution
// return Object.keys(obj).length === 0;

console.log(`is empty object: ${isEmpty(obj)}`);

