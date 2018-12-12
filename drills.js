'use strict';

// Filtering an array
// Imagine you have an array of numbers. 
//Write an algorithm to remove all numbers less than five from the array. 
//Don't use array's built-in .filter method here; write the algorithm from scratch.
function filter(arr){
  const result = [];
  //iterate through arr if num > = 5 result.push(num) return result
  arr.forEach((item) => {
    if(item >= 5){
      result.push(item);
    }
  });
  return result;
}

function testFilter(){
  console.log(filter([-4, 20, 32, 2, 0, 5])); //== 20,32,5
  console.log(filter([1,2,3,4])); // == empty
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

function testUrlify() {
  console.log(urlify('tauhida parveen'));
  console.log(urlify('www.thinkful.com /tauh ida parv een'));
}
