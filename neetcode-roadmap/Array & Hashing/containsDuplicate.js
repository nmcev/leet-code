/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    const numsSorted = nums.sort()
    for (let i = 0; i < numsSorted.length; i++) {
        if (numsSorted[i] === numsSorted[i + 1]) {
            return true;
        }
    }
    return false

};
