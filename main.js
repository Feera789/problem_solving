function sumOfAll(array1, array2) {
   let sum1 = 0
   let sum2 = 0
   for (let index = 0; index < array1.length; index++) {
       sum1 += array1[index]
   }
   for (let index = 0; index < array2.length; index++) {
    sum2 += array2[index]
}
return sum1 + sum2
}

// console.log(sumOfAll([1,2], [3,4]));

// ==============================================================================================================

function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}
  // console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


  // ==============================


function palindromeCheck(str) {
    let string = ''
    for (let index = str.length-1; index >= 0; index--) {
      string = string + str[index]
    }
    return string == str
}

// console.log(palindromeCheck('kiyik'));

//  homework for 21.12 ========================================================

function countTheNumber(array){
  let sum = 0
  for(let i = 0; i < array.length; i++){
    sum = array.push();
      if(sum === true){
}
    return sum
  }
}

// console.log(countTheNumber([1,2,3,4,5,6,7,10,12]));


// ================================================================

function removeEveryOther(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}


// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

function findAverage(array) {
  if(!array.length) return 0;
   console.log(array.length%2 );
  if(array.length%2 == 0) {
    console.log(array[array.length/2]);
  }

}


// console.log(findAverage([1,2,3,4]));


function distinct(array) {
  return array.filter((element, index) => array.indexOf(element) == index)
 }
// console.log(distinct([1,2,3,2,3,1]));


function findSmallest(arr, returnType) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  if (returnType === 'value') {
    return smallest;
  } else if (returnType === 'index') {
    return smallestIndex;
  } else {
    return 'Invalid return type';
  }
}

// const arr = [5, 2, 8, 3, 1];
// console.log(findSmallest(arr, 'value')); 
// console.log(findSmallest(arr, 'index')); 

      function smallestEvenMultiple(n) {
        return n % 2 == 0 ? n : n * 2;
      }

// console.log(smallestEvenMultiple(2,4,3,5));


   let array = [1,55,45,85,115,2,66]

   let max = array[0]
   for (let index = 1; index < array.length; index++) {
    if (array[index] > max) 
        max = array[index];
   }
  

// console.log(max);

function findMax(...rest) {
  let max = rest[0]
  for (let index = 1; index < rest.length; index++) {
   if (rest[index] > max) 
       max = rest[index];
  }
  return max
}

// console.log(findMax(1,55,45,85,115,2,66));

var isPalindrome = function(x) {
  if(x<0) return false;
  let str = x+'';
  function reverse(value){
      let quantity = ''
      for( let i = value.length - 1; i >= 0; i-- ){
         quantity += value[i]
      }
      return quantity
  }
  return x == reverse(str)

};

// console.log(isPalindrome(658));

var numberOfSteps = function(num) {
  let count = 0
  while(num>0){
    num--
    console.log(num);
  }

};

numberOfSteps(5)

// how much i love u 

function howMuchILoveYou(nbPetals) {
  const phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  return phrase[(nbPetals -1)%phrase.length]
}


// array reverse

function fixTheMeerkat(arr) {
  return arr.reverse()
 }

 // return masked string
function maskify(str) {
  if (str.length <= 4) {
      return str;
  } else {
      const maskedLength = str.length - 4;
      const maskedPart = '#'.repeat(maskedLength);
      const lastFourCharacters = str.slice(-4);
      return maskedPart + lastFourCharacters;
  }
}


// return masked string
function maskify(str) {
  if (str.length <= 4)  return str;
let newstr = ''
for (let i = 0; i < str.length; i++){
  if(i<str.length-4) newstr += '#'
  else newstr += str[i]
}
return newstr
}


function countCorrectCharacters(correctWord, guess){
  if(correctWord.length !== guess.length) throw new Error();
  let count = 0;
  for(let i = 0; i < correctWord.length; i++){
    if(correctWord[i] === guess[i]) count++ 
  }
  return count
}


// indexOf method in strings 

function customIndexOf(string, substring) {
  for (let i = 0; i <= string.length - substring.length; i++) {
      let match = true;
      for (let j = 0; j < substring.length; j++) {
          if (string[i + j] !== substring[j]) {
              match = false;
              break;
          }
      }
      if (match) {
          return i;
      }
  }
  return -1;
}

let string = 'My name is Feera'
let substring = 'is'
console.log(customIndexOf(string, substring));


// lastIndexOf in strings
function customLastIndexOf(string, substring) {
  for (let i = string.length - substring.length; i >= 0; i--) {
      let match = true;
      for (let j = 0; j < substring.length; j++) {
          if (string[i + j] !== substring[j]) {
              match = false;
              break;
          }
      }
      if (match) {
          return i;
      }
  }
  return -1;
}

let str = "My name is Feera";
let substr = "e";gi
console.log(customLastIndexOf(str, substr));



