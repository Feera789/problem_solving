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
  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))





