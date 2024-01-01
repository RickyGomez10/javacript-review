//Why to use recursion
//  it breacks down down large problems into small chunks
//  it is a fundamental used in more adnaved algorithms

//When to use recursion?
//  For problems that contain smaller instances of the same problem

//IMPORTANT = RECURSION IS GOING TO BE THREATED ALWAYS AS STACK DATA STRUCTURE

// Anatomy of Recursion
//  Base Case: the "smallest" instance of a problem that is solveed trivially
//  Recursive Case: an instance of a problem that "shrinks" the size of the input toward the base case

function factorial(number){
    if(number == 1 || number == 0){
        return number * 1;
    }

     return number * factorial(number-1);
}

//complex recursion
//write a function `sum` that takes an array of numbers as an input. The function should return the total sum of all elements.
//The function must be recursive

function sum(arrayOfNumbers){
    if (arrayOfNumbers.length == 1){
        return arrayOfNumbers[0];
    }
    let lastNumberInArray = arrayOfNumbers[arrayOfNumbers.length-1];
    arrayOfNumbers.pop();
    return lastNumberInArray + sum(arrayOfNumbers);
}

const fasterSum = (array)=>{
    return fasterSumHelper(array, 0);
}

const fasterSumHelper = (array, index)=>{
    if(index === array.length) return 0
    return array[index] + fasterSumHelper(array[index+1]);
}

// fibonacci
function fibonacci(number){
    if (number == 2 || number == 1){
        return 1;
    }
    if (number == 0){
        return 0;
    }

    return fibonacci(number-2) + fibonacci(number-1);
}
/* 
console.log(factorial(10));
const arrayOfNumbers = [1,5,7,-2];
 */

const input = new Array(9000).fill(1);
/* const slowStart = Date.now();
console.log(sum(input));
const slowEnd = Date.now();
console.log(`slow solution finished in ${slowEnd - slowStart} ms`); */

const fastStart = Date.now();
console.log(fasterSum(input));
const fastEnd = Date.now();
console.log(`fast solution finished in ${fastEnd - fastStart} ms`);

console.log(fibonacci(7));
