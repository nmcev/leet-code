/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
  
    while (left < right) {
  
      let width = Math.abs(left - right);
      let height = Math.min(height[left], height[right]);
      let area = width * height;
  
      if (area > maxArea) {
        maxArea = area;
      }
  
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
  
    }
  
    return maxArea;
  };
  