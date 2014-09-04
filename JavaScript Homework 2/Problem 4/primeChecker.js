function isPrime(value){
    if (value < 2){
        return false
    }
    else{
        for (var i = 2; i < value; i++){
            if (value % i == 0){
                return false;
            }
            else{
                return true;
            }
        }
    }
}

console.log(isPrime(7))
console.log(isPrime(254))
console.log(isPrime(587))