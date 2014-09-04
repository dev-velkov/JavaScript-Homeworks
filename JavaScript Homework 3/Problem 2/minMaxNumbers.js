function findMinAndMax(arrayOfNumbers){
    arrayOfNumbers.sort(function(a, b) {return a > b} )
    var arrLegth = Number(arrayOfNumbers.length)
    return "Min -> " + arrayOfNumbers[0] + "\n" +
           "Max -> " + arrayOfNumbers[arrLegth-1]
}

console.log(findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]))
console.log(findMinAndMax([2, 2, 2, 2, 2]))
console.log(findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]))