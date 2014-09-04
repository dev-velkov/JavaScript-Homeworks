function printNumbers(n){
    var numbers = []
    for(var i = 1; i <= n;  i++){
        if(i%4==0 || i%5==0){
            continue;
        }
        else {
            numbers.push(i)
        }
    }
console.log(numbers.toString())
}

console.log(printNumbers(20))