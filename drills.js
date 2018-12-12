'use strict';

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
