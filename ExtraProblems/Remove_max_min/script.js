let array =[3,7,8,9,0]

const filteredArray = array.filter(value =>{ 

  if(value !== Math.max(...array) && value !==Math.min(...array)) // If value  doesn't equls to max value and min value then push value to array
  {
    return  array.push(value);
  }
});