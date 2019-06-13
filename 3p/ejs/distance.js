function convert1() {
    let t = document.getElementById("dis1").value
    let o = t - 273.15
    document.getElementById("out1").innerHTML = o.toFixed(2) + " mi"
}

function convert2() {
    let t = document.getElementById("dis2").value
    let o = 273.15 + parseInt(t)
    document.getElementById("out2").innerHTML = o.toFixed(2) + " km"
}