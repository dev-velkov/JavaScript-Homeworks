function compareChars(array1, array2) {
    counter = 0;
    var length = Number(array1.length);
    while (array1[counter] == array2[counter]) {
        counter++;
        if(counter == length){
            break;
        }
    }
    if (counter == length) {
        return "Equal"
    }
    else {
        return "Not Equal"
    }
}


console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
    ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']))
console.log(compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']))
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']))
