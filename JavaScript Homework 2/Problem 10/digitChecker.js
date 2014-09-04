function checkDigit(number){
    if (number<1000){
        return "Invalid number"
    }
    else {
        var thirdDigit = parseInt((number / 100) % 10)

        if (thirdDigit == 3) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(checkDigit(1235))
console.log(checkDigit(25368))
console.log(checkDigit(123456))