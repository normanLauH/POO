function divisor(array,apply,start){     
    let current = start;     

    for(let element of array){         
        current = apply(current,element)     
    }     
    return current; 
}  

console.log(divisor([1,2,3,4],(a,b) => a / b, 1))