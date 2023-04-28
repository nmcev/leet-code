function oddsVsEvens(num) {
    // write your code here

    let numStr = num.toString(); // convert to string for to check the length of the string and loop over the numbers(the string)
    let sumEven = 0;
    let sumOdd = 0;


    for (let i = 0 ; i < numStr.length; i++){
        if(numStr[i]% 2 ==  0 )
        {
            sumEven += parseInt(numStr[i]); //parseInt is to switch the string to an integer value to do the math operations
        }
        else if (numStr[i] % 2 == 1 )
        {
            sumOdd += parseInt(numStr[i])
        }
    }


     if(sumEven == sumOdd)
     {
        return "equal";

    }else if (sumEven > sumOdd )
    {
        return  "even";

    }else
    {
        return "odd";
    }

}
