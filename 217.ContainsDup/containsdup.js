/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    const map = new Map()

    for (let i = 0; i <= nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 0)
        }
        map.set(nums[i], map.get(nums[i]) + 1)
    }

    for (let key of map.keys()) { 
        if (map.get(key) > 1) return true
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 1])) // true