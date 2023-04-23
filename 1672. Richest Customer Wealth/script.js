/* 
* @param {number[][] } accounts 
* @return {number}
*/ 

var maximumWealth = function(accounts) {

/* 
1. Creat richest[maxwealth] variable to hold the highest value 
2. Loop through accounts array [accounts array]
  a. Creat Variables to hold the current wealth 
  b. Loop through the inner array .
    i. add the value for each index to current wealth  
  c.  If current wealth > richest , set them equal to each other .
3. return richest  
    */

let richest = 0; //to hold the maxWealth 
for(let i = 0 ; i < accounts.length; i++) {
    let currenWealth = 0;
    for (let j = 0 ; j < accounts[i].length ; j++){
        currenWealth += accounts[i][j]; 
    }
    if(currenWealth > richest){
        richest = currenWealth;
    }
};
return ` The richest : ${richest}`;

};

console.log(maximumWealth([[1,2,4],[3,5,6,5]]))