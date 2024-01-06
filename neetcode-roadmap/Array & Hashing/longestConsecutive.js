/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    const set = new Set(nums);
    let longest = 0;
    for (const num of set) {
    
        // check if the element has not previous value 
        if (!set.has(num - 1)) {
            let currentElement = num;
            let length = 1;

        // iterating when the next consecutive of the current is there 
            while (set.has(currentElement + 1)) {
                currentElement++;
                length++
            }
            longest = Math.max(longest, length);
        }

    }

    return longest;
};
  