/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    const ans = Array(nums.length).fill(1);

    let leftProduct = 1;
    for (let i = 1; i < nums.length; i++) {
        leftProduct *= nums[i - 1];
        ans[i] *= leftProduct;
    }

    let rightProduct = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        ans[i] *= rightProduct;
    }

    return ans;

};
