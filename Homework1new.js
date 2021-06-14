1.1 Swap 2 variables, without using any other variables.

let num1 = +prompt('Enter the number');
let num2 = +prompt('Enter the number');
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log(num1, num2);

1.2 Given a positive integer. Bring the last digit of the number to the beginning. Print the ew number. If the last digit of the inserted number is 0, number remains the same.

let number1 = +prompt('Enter the number');
let lastDigit = String( number1 % 10);
let firstParte =String((number1- number1 % 10)) / 10;
if (number1 % 10 != 0) {
  console.log(lastDigit + firstParte)
} else {
  console.log(number1);
}

1.3 Given five numbers as input. Calculate and print the average of the numbers(without using arrays).

let num1 = +prompt("Enter the number");
let num2 = +prompt("Enter the number");
let num3 = +prompt("Enter the number");
let num4 = +prompt("Enter the number");
let num5 = +prompt("Enter the number");
console.log(("Average of five numbers is: " + (num1+num2+num3+num4+num5)/5));


1.4 Given three numbers. Sort them by the ascending order.

let num1 = +prompt("Enter the number");
let num2 = +prompt("Enter the number");
let num3 = +prompt("Enter the number");
if (num1<num2 && num1<num3) {
    if (num2<num3){
    console.log(num1,num2,num3);
    } else {
        console.log(num1,num3,num2);
        }
}
else if (num2<num1 && num2<num3) {
    if (num1<num3) {
    console.log(num2,num1,num3)
    } else {
         console.log(num2,num3,num1)
        }
}
else if (num3<num1 && num3<num1) {
    if (num1<num2) {
    console.log(num3,num1,num2)
    } else {
        console.log(num3,num2,num1)
        }
}


1.5 Given the following code rewrite it using only two if operators. (Hint: use logical operators).

var n = +prompt();
for(let i=0; n % 2 === 0 && !Math.floor(n/10); i+=1) {
    console.log(i);
}
for(let j=0; n % 3 === 0 &&  n % 10 === 1; j+=1) {
     console.log(j);
}



