/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) 
{
    const map = new Map(); //create a new map
    for (let i = 0; i < nums.length; i++) // ^ loop through the array 
    { 
        // cur + x = target 
        // x = target - cur  
        const x = target - nums[i];

        if(map.has(x)){
            return [map.get(x), i]; 
        }
        // ~ map.has(x) it means is the target in the map or not in the map
             // ~ getting the value from the key (x)
  
        map.set(nums[i], i);// ! adding (key , value) 
    }
    return null;
};
