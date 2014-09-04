function calcCircleArea(){
    var circleRadius = document.getElementById("circle-radius").value
    document.body.innerHTML += "r = " + circleRadius + "; " + "area = " + (Math.PI)*(circleRadius*circleRadius) + "<br>"
}

