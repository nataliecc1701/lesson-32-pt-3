/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case
  if (nums.length === 0) {
    return 1
  }
  // normal case
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // base case
  if (words.length === 0) {
    return 0
  }
  // normal case
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // base case
  if (str.length === 0) {
    return ""
  }
  // normal case
  return str[0] + everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // base case
  if (str.length <= 1) {
    return true
  }
  // normal case
  return ((str[0] == str[str.length-1]) && isPalindrome(str.slice(1, str.length-1)))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // base cases
  if (arr.length === 0) {
    return -1
  }
  if (arr[0] === val) {
    return 0
  }
  // normal case
  return 1 + findIndex(arr.slice(1), val)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case
  if (str.length < 2) {
    return str
  }
  // normal case
  return revString(str.slice(1)) + str[0]
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // base case
  if (Object.values(obj).length === 0) {
    return []
  }
  // normal case
  const allStrs = []
  for (const val of Object.values(obj)) {
    if (typeof(val) === 'string') {
      allStrs.push(val)
    }
    else if (typeof(val) === 'object') {
      for (const str of gatherStrings(val)) {
        allStrs.push(str)
      }
    }
  }
  return allStrs
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
