1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays. 

function getNewArr(arr) {
    let arrOdd = [];
    let arrEven = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0) {
            arrEven.push(arr[i]);
       } else {
            arrOdd.push(arr[i]);
         }
    }  
 return [arrEven, arrOdd]; // ayl tarberak chgta 2 array veradardznelu
} 
getNewArr([45, 12, 3, 6, 17, 0]);
(2) [Array(3), Array(3)]
0: (3) [12, 6, 0]
1: (3) [45, 3, 17]
length: 2
__proto__: Array(0)

2.Given a word and a list of possible anagrams, select the correct sublist.

function getWordWithSameLetter(word, arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++){ debugger 
       for(let j = 0; j < word.length; j++) {
         for(let k = 0; k < word.length; k++) {
           if (word[j] !== arr[i][k]){
           break;    
           }
         }   newArr.push(arr[i])
        }
     } return newArr;
}
getWordWithSameLetter(“listen”, ["enlists" "google" "inlets" "banana"]) //sa chi stacvum

3.Write a function which receives two strings and removes appearances of the second string from the first one. 

function delateSimbolInStr (str, simbol1) {
    let newString = '';
    for(let i = 0; i < str.length; i++) {
        if(str.includes(simbol1) === true) {
            newString = str.replace(simbol1, '');	
        }   
		
    }  
    return newString;
}
delateSimbolInStr (
'This is some text.', 'is'  //arajin is-y gtneluc heto,aylevs chi ashxatum. Nuyn xndirn unem 5-rd xndrum


4.Given an array of numbers. Create an array containing only unique elements.

function getUniqueElem (arr) {
    arr.sort(function(a, b){return a - b});
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
          continue; 
        } newArr.push(arr[i]);  
    }  
    return newArr;
}
getUniqueElem([1, 2, 3, 3, 2, 5]);
(4) [1, 2, 3, 5]

5.Given a string and symbols. Change first symbol by the second one in the string. 

function changeSimbolOneBySimbolTwo (str, simbol1,simbol2) {
    let newString = '';
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== simbol1) {
          	count++;
           
        }   else {
                newString = str.replace(simbol1,simbol2);
                count++
            } 
               
    }  
    return newString;
}
changeSimbolOneBySimbolTwo ('The results are not recorded yet', 't', 'w');
"The resulws are not recorded yet"




function changeSimbolOneBySimbolTwo (str, simbol1,simbol2) {
    let newString = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== simbol1) {
          	continue
        }   newString = str.replace(simbol1,simbol2);
		continue;
    }  
    return newString;
}
changeSimbolOneBySimbolTwo ('The results are not recorded yet', 't', 'w');
"The resulws are not recorded yet"