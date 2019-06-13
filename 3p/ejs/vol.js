function convert1() {
    let t = document.getElementById("vol1").value
    let o = t * 3.78541
    document.getElementById("out1").innerHTML = o.toFixed(2) + " litres"
}

function convert2() {
    let t = document.getElementById("vol2").value
    let o = t * .264172
    document.getElementById("out2").innerHTML = o.toFixed(2) + " gallons"
}