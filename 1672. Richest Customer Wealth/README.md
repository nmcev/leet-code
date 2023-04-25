# Description 

You are given an m x n intger grid accounts where accounts [i] [j] is the amount of money the `i​​​​​​​​​​​th`
customer has in the `j​​​​​​​​​​​th` bank .

* Return The **Wealth**  that the richest customer has 💰 .


## Example 

* `Input : accounts = [ [1,2,3],[3,2,1] ]`

* ` Output : 6 `

* **Explanation** : 

*1st* customer has wealth = ` 1 + 2 + 3 `<br>
*2nd* customer has wealth = ` 3 + 2 + 1 `<br>

Both customer are considered the richest with a wealth of 6 each , so it returns 6  .<br>
taht means it will returns the richest customer but in the case above they are havae same *wealth*  .


## constraints 

* `m == accounts.length`

* `n == accounts[i].length`

* `1 <=m , n<= 50`

* `1 <= accounts[i][j] <= 100`

### link 
[The link of problem](https://leetcode.com/problems/richest-customer-wealth/)