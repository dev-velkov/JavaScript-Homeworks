function findMaxSequence(array){
    var longestSequence = 1
    var currentSequence = 1
    var sequencePosition = 0;
    for(var i = 1; i < array.length; i++){
        if(array[i-1] === array[i]) {
            currentSequence++
            if (currentSequence >= longestSequence) {
                longestSequence = currentSequence
                sequencePosition = i - longestSequence+1
            }
        }
        else{
            currentSequence = 1
        }
    }
    var finalResult = []
    for(var i = 0; i < longestSequence; i++){
        finalResult.push(array[sequencePosition + i])
    }
    console.log(finalResult)
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
findMaxSequence(['happy'])
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3'])
