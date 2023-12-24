/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {

            map.set(nums[i], 0);
        }

        map.set(nums[i], map.get(nums[i]) + 1);
    }

    const sortedValues = Array.from(map.values()).sort((a, b) => b - a);
    const result = [];


    for (const [key, value] of map) {
        if (sortedValues.indexOf(value) < k) {
            result.push(key)
        }        
    }

    return result;
};
