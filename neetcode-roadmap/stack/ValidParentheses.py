class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        dic = {"(": ")", "{": "}", "[": "]"}
        for i in s: 
            if i in dic: 
                stack.append(dic[i])
            else: 
                if not stack: 
                    return False
                top= stack.pop()
                if i != top: 
                    return False
    
        return len(stack) == 0 
