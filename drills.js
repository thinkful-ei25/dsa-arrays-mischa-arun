'use strict';

// Merge Arrays
// Imagine you have two arrays which have already been sorted. Write an algorithm to merge the two arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// iterate through each array simultaneously check which one is smaller,
//push  that one into output first, then other
//increment index repeat until reach end of both arrays

//arrA = [5] arrB = [3,4,5,6]
function mergeArrays(arrA, arrB) {
  let indexA = 0;
  let indexB = 0;
  let output = [];
  while (indexA < arrA.length || indexB < arrB.length) {
    //check if arrA[indexA] < arrB [indexB]

    //make sure we have items in each ---- check if items in both arrays
    if (indexA < arrA.length && indexB < arrB.length) {
      if (arrA[indexA] < arrB[indexB]) {
        output.push(arrA[indexA]);
        indexA += 1;
      } else {
        output.push(arrB[indexB]);
        indexB += 1;
      }
    } else if (indexA < arrA.length) {
      output = output.concat(arrA.slice(indexA));
      indexA = arrA.length;
    } else {
      output = output.concat(arrB.slice(indexB));
      indexB = arrB.length;
    }
  }
  return output;
}

function testMergeArrays() {
  console.log(mergeArrays([5], [2, 3, 4, 5, 6]));
  console.log(mergeArrays([2, 3, 4, 5, 6], [5]));
  console.log(mergeArrays([1, 2, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
}

//runtime ==> O(a+b) == O(n)

// Filtering an array
// Imagine you have an array of numbers.
//Write an algorithm to remove all numbers less than five from the array.
//Don't use array's built-in .filter method here; write the algorithm from scratch.
function filter(arr) {
  const result = [];
  //iterate through arr if num > = 5 result.push(num) return result
  arr.forEach((item) => {
    if (item >= 5) {
      result.push(item);
    }
  });
  return result;
}

// O(n)

function testFilter() {
  console.log(filter([-4, 20, 32, 2, 0, 5])); //== 20,32,5
  console.log(filter([1, 2, 3, 4])); // == empty
}
// testFilter();

// URLifify
// A common mistake users make when they type in an URL is to put spaces between
// words or letters. One solution that developers can use to solve this problem
// is to replace any spaces with a '%20'. Write a method that takes in a string
// and replaces all its empty spaces with a '%20'. Your algorithm can only make
// 1 pass through the string. Examples of input and output for this problem can
// be
// Input: tauhida parveen
// Output: tauhida%20parveen
// input: www.thinkful.com /tauh ida parv een
// output: www.thinkful.com%20/tauh%20ida%20parv%20een

// Ways to build strings:
// Template strings?
// Concatenating? '+' operator?
// Slices / Substring

// Input: tauhida parveen
// Output: tauhida%20parveen

function urlify(url) {
  let urlified = '';
  for (let i = 0; i < url.length; i += 1) {
    // Check if url[i] is " "
    if (url[i] === ' ') {
      urlified += '%20';
    } else {
      urlified += url[i];
    }
  }

  return urlified;
}

// O(n)

function testUrlify() {
  console.log(urlify('tauhida parveen'));
  console.log(urlify('www.thinkful.com /tauh ida parv een'));
}

// Max sum in the array
// ------------------------
// You are given an array containing positive and negative integers. Write an
// algorithm which will find the largest sum in a continuous sequence.

// Input: [4,6,-3,5,-2,1]
// Output: 12
// Sum: 4 10 7 12 10
// Max: 4 10 12

// Input: [-4, 4, 6, -3, 5, -2, 1]
// Output: 12
// Sum: -4 0 6 3 8 6 7
// Max: -4 0 6 8
// Sum: -4 4 10 7 12 10 11
// Max: -4 4 10 12

// Input: [-4, 4, 6, -8, 5, 5, -2, 1]
// Output: 12
// Sum: -4 4 10 2 7 12 10 11
// Max: -4 4 10 12

function maxSum(arr) {
  let sum = 0;
  let maxSum = 0;

  arr.forEach((item) => {
    sum += item;

    if (sum < item) {
      sum = item;
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
  });

  return maxSum;
}

// Runtime: O(n)

function testMaxSum() {
  console.log(maxSum([4, 6, -3, 5, -2, 1]) === 12);
  console.log(maxSum([-4, 4, 6, -3, 5, -2, 1]) === 12);
  console.log(maxSum([-4, 4, 6, -8, 5, 5, -2, 1]) === 12);
}

/*
Remove Characters
------------------
Write an algorithm that deletes given characters from a string. For example,
given a string of "Battle of the Vowels: Hawaii vs. Grozny" and characters to
be removed are "aeiou", the algorithm should transform the original string to
"Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or
join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'
*/

function removeCharacters(string, filterString) {
  let output = '';

  //Loop through string, check if string[i] is included in the filter string
  //   If yes: continue
  //   If no: add character to output string

  // To check against filter:
  //   (1) inner loop over filter string
  //   (2) .indexOf but that is also O(F) where F = | filter |
  //   (3) .includes " " " " " " "
  // We could store the filter in an object, which should have O(1) lookup time
  // `in`

  const filter = {};
  for (let i = 0; i < filterString.length; i += 1) {
    filter[filterString[i]] = true;
  }

  for (let i = 0; i < string.length; i += 1) {
    if (!filter[string[i]]) {
      output += string[i];
    }
  }
  return output;
}

// Runtime: O(S + F) => O(n)

function testRemoveCharacters() {
  console.log(
    removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou') ===
      'Bttl f th Vwls: Hw vs. Grzny'
  );
  console.log(
    removeCharacters('The quick brown fox jumped over the lazy dog', ' T') ===
      'hequickbrownfoxjumpedoverthelazydog'
  );
  console.log(
    removeCharacters('The quick brown fox jumped over the lazy dog', '') ===
      'The quick brown fox jumped over the lazy dog'
  );
}
testRemoveCharacters();
