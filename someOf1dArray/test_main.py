import unittest
from main import Solution

class TestMain(unittest.TestCase):
    def setUp(self):
        self.sol = Solution()

    def test_runningSum(self):
        self.assertEqual(self.sol.runningSum([1,2,3,4]), [1,3,6,10])
        self.assertEqual(self.sol.runningSum([1,1,1,1,1]), [1,2,3,4,5])
        self.assertEqual(self.sol.runningSum([3,1,2,10,1]), [3,4,6,16,17])
        self.assertEqual(self.sol.runningSum([1,1,1,1,1]), [1,2,3,4,5])
        self.assertEqual(self.sol.runningSum([1]), [1])
        self.assertEqual(self.sol.runningSum([1,2]), [1,3])

if __name__ == '__main__':
    unittest.main()