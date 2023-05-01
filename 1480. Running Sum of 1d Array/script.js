/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) 
{
    let sum = 0; // to contain the sum of index numbers
    let result = []; //the new array to hold the result of sum

    for(let i = 0 ; i < nums.length; i++) // looping through each element of the array until it reaches the end of the array 
    {
        sum = sum + nums[i]  // sum of elements in the array

        result.push(sum); // add the sum element to the result array after each iteration of sum 
    }
    return result;  // return the result array
};
