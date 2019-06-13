function convert1() {
    let t = document.getElementById("grados1").value
    let o = t * 180 / 3.1416
    document.getElementById("out1").innerHTML = o.toFixed(2) + " grados"
}

function convert2() {
    let t = document.getElementById("grados2").value
    let o = t * 3.1416 / 180
    document.getElementById("out2").innerHTML = o.toFixed(2) + " radianes"
}