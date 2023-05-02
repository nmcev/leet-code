function largest_smallest(array_values)
 {
    // write your code here 
    let newArray = [];
    let numberMax =array_values[0]
    let numberMin =array_values[0];
    for(let i = 0 ; i < array_values.length;i++)
    {
        if(array_values[i] >numberMax)
        {
          numberMax= array_values[i];// assign the number to the max  if array_values[i] bigger than array_value[0] if it not so the max[0] will still the biggest number 
        }
        if(array_values[i]< numberMin)
        {
          numberMin = array_values[i]; //  assign the number to the min if array_values[i] smaller than array_value[0] if it not so the min[0] will still the min number
        }
    }
    newArray.push(numberMax)
    newArray.push(numberMin) // pushing  the min number after target it 
   
return newArray; // return the new array after adding the maximum and min number  as above 
}



//another function to do the same thing 

function max_min(array_values)
{

 const filteredArray = array_values.filter(value => 
  {
     return value == Math.max(...array_values) || value == Math.min(...array_values);
  })
 return filteredArray;
}