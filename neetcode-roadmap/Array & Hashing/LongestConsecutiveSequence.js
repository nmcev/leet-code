/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums); 
    let longest = 0;

    for (let num of set) {
        
        if (!set.has(num - 1)) {
            let currentElement = num;
            let length = 1;

            while (set.has(currentElement + 1)) {
                currentElement++;
                length++
            }
            longest = Math.max(length, longest)
        }
    }

    return longest;
};
  