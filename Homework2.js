1. Count numbers of digit 9 in a number.	

let num = prompt("Mutqagreg tivy");
let count=0;
for(let i=0; i<num.length; i++) {
  if (num[i] === '9') { 
        count ++;      
  }
}
console.log(count)

2.Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)

let num1 = +prompt("Mutqagreg tivy");
let num2 = +prompt("Mutqagreg tivy");
let result;
for (let i = 0; i<num2; i++) {
    result = 2 ** i
    if(result > num1 && result < num2)
    console.log(result);        
} 

3.Given a number as input, insert dashes (-) between each two even numbers. 
let num = prompt("Mutqagreg tivy");
for (let i = 0; i<num.length; i++) {
    if (num[i] % 2 ===0 && num[i+1] % 2 ===0) {   
    num.push = (i, "-"); // gciky chem karoxanum texadrel
    } else {
        num.push = (i) ;
        } 
console.log(num[i]);
} 

4.Given a positive number. Print it in reverse order.


let num = prompt("Mutqagreg tivy");
let sum=0;
while (num > 0){
    let mnacord = num % 10;
    sum= sum * 10 + mnacord;
    num = (num - mnacord)/10;
}
console.log(sum);

5. Insert a n positive number. Print the n-st prime number.

//sa chi stacvum
let num;
for(let i = 2; i < num; i++) {
    if(num !== i && num % i !==0) {
    console.log(num);
} 
    }