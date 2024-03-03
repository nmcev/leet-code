class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # number = target - curr
        num_map = {}
        for i, num in enumerate(nums): 
            complement = target - num

            if complement in num_map: 
                return [num_map[complement], i] 

            num_map[num] =  i
            
        return []
