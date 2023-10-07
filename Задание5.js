const func = ( x, n ) => {
  
    let result = x; 
       for(i = 1; n > i; i++) {
        result *= x;
       }
       return result;
     }
    
    console.log(func(2, 2))
    console.log(func(3, 2))
    console.log(func(2, 3))

////или

const func = (x, n) => {
    return Math.pow(x, n);
  }
  
  console.log(func(2, 2))
  console.log(func(3, 2))
  console.log(func(2, 3))