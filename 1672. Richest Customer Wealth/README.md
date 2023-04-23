# Description 

You are given an m x n intger grid accounts where accounts [i] [j] is the amount of money the i^th 
customer has in the j^fth bank .

* Return The **Wealth**  that the richest customer has 💰 .


## Example 

* `Input : **accounts** = [ [1,2,3],[3,2,1] ]`

* ` Output : 6 `

* **Explanation** : 

*1st* customer has wealth = ` 1 + 2 + 3 `
*2nd* customer has wealth = ` 3 + 2 + 1 `

Both customer are considered the richest with a wealth of 6 each , so return 6 

so taht means it will return the richest customer but in the case above they are havae same *wealth* 


## constraints 

* `m == accounts.length`

* `n == accounts[i].length`

* `1 <=m , n<= 50`

* `1 <= accounts[i][j] <= 100`
