class Solution:
    def isHappy(self, n: int) -> bool:
        def calculate(n):
            return sum([int(i) ** 2 for i in str(n)])
        
        def isHappyRecursive(n, seen):
         if n == 1:
            return True
         
         if n < 0 or n in seen:
            return False 

         seen.add(n) 
         sum_of_squares = calculate(n)
         return isHappyRecursive(sum_of_squares, seen)
    
        seen = set()
        return isHappyRecursive(n, seen)
        


#Space Complexity: O(n)
# Time Complexity: O(n * log n)

sol = Solution()
happy = 2
print(sol.isHappy(happy))  # Output: False
