1. Given three numbers a, b (a ? b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.

let a = +prompt('mutqagreq tivy');    
let b = +prompt('mutqagreq tivy'); 
let step = +prompt('mutqagreq tivy'); 
let arr = [];
for (let i = a; i <= b; i += step){
    arr.push(i);   
}
console.log(arr);

2.Given an array of numbers. Find the maximum element in array.

let arr = [1, 4, 43, -112];
let max = arr[0]; // -Infinity
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr [i]
    }
}
console.log(max);

3.Given an array. Reverse it in place .

let arr = [1,2,3,4,5,6,7];
for(let i = 0; i < arr.length/2; i++){  
    let newElem = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = newElem;
} 
console.log(arr);

4. Given an array. Create the array which elements are products between two neighbours.

let arr = [3, 7, 12, 5, 20, 0];
let newArr = [];
for(let i = 0; i < arr.length-1; i++){  
   let elemproduct = arr[i] * arr[i+1];
newArr.push(elemproduct)
} 
console.log(newArr);
 
5.Write a function that receives an array and an element as arguments and returns the (in place) array without that element if it’s included or vice versa..

function getNewArr(arr, elem){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === elem) {
            let newArr0Index = arr[0];
            arr[0]=arr[i];
            arr[i]=newArr0Index; 
            arr.splice(0,1)
        }  /*else  {
            arr.splice(0,0, elem)
          }
          sa grelis kody chi ashxatum, element avelacnelu paymany che karoxanum grel*/
    }
    return arr;
} 
getNewArr([1,2,3,4,5,6],4)
(5) [2, 3, 1, 5, 6]
