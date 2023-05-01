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
          numberMax= array_values[i];
          
        }
        if(array_values[i]< numberMin)
        {
          numberMin = array_values[i];
        }
        
        
    }
    newArray.push(numberMax)
    newArray.push(numberMin)
   
return newArray
}
