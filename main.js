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

const arr = [5, 2, 8, 3, 1];
console.log(findSmallest(arr, 'value')); 
console.log(findSmallest(arr, 'index')); 

