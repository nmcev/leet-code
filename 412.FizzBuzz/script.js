/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) 
{
  let result = []; //array to hold the result 
    
    for(let i = 1;i <= n;i++)
    {
      if( i % 3 == 0 && i % 5  == 0 ) 
      {
        result.push("FizzBuzz") //pushing "FizzBuzz" to the array(result) if The IF statement true
      }else if (i % 5  == 0)
      {
        result.push("Buzz");
      }
      else if (i  % 3 == 0 )
      {
        result.push("Fizz");
      }
      else{
        result.push(i.toString())// turn the intger into string ===> 1 => '1'
       }
    }

   return result;
};

