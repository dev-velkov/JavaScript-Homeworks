function variablesTypes(variables){
    var name = variables[0]
    var age = variables[1]
    var isMale = variables[2]
    var favFoods = variables[3]

    return "My name: " + name + " // type is " + typeof(name) + "\n" +
           "My age:  " + age + " // type is " + typeof (age) + "\n" +
           "I am male: " + isMale + " //type is " + typeof (isMale) + "\n" +
           "My favourite foods are: " + favFoods + " //type is " + typeof (favFoods)
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]))