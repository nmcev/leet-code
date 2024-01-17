/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    
    let left = 0;
    let right = height.length - 1;
  
    let leftMax = height[left];
    let rightMax = height[right];
  
    let trappedWater = 0;
    // trapped water = right and left max - the current height 
    while (left < right) {

        if (height[left] <= height[right]) {
            leftMax = Math.max(leftMax, height[left])
            trappedWater += leftMax - height[left];

            left++;
        } else {
            rightMax = Math.max(rightMax, height[right])
            trappedWater += rightMax - height[right];

            right--;
        }
    }
    return trappedWater;
  }
  
  