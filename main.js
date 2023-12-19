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

console.log(sumOfAll([1,2], [3,4]));


