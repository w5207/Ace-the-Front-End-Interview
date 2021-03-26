// Using Object
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const myObj = {};
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (myObj.hasOwnProperty(complement)) {
          return [myObj[complement], i];
      }
      myObj[nums[i]] = i;
  }
};

// Using Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const myArray = [];
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (myArray.includes(complement)) {
          return [myArray.indexOf(complement), i];
      }
      myArray[i] = nums[i];
  }
};