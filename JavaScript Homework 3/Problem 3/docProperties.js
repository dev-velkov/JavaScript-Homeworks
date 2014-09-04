function displayProperties(){
    var arrayOfProperties = []
    for (var propertie in document){
        arrayOfProperties.push(propertie)
    }
    arrayOfProperties.sort()
    console.log(arrayOfProperties)
}



