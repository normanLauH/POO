function convert1() {
    let t = document.getElementById("temp1").value
    let o = t - 273.15
    document.getElementById("out1").innerHTML = o.toFixed(2) + " degrees K"
}

function convert2() {
    let t = document.getElementById("temp2").value
    let o = 273.15 + parseInt(t)
    document.getElementById("out2").innerHTML = o.toFixed(2) + " degrees C"
}