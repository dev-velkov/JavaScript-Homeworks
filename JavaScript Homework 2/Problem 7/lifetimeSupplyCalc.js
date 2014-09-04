function calcSupply(currentAge, maxAge, foodPerDay) {
    var days = (maxAge - currentAge) * 365;
    var total = foodPerDay * days;
    return total + "kg of chocolate would be enough until I am " + maxAge + " years old.";
}

console.log(calcSupply(38, 118, 0.5));
console.log(calcSupply(20, 87, 2));
console.log(calcSupply(16, 102, 1.1));
