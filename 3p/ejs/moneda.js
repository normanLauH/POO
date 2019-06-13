function convert1() {
    let t = document.getElementById("mon1").value
    let o = t * 1.13
    document.getElementById("out1").innerHTML = o.toFixed(2) + " USD"
}

function convert2() {
    let t = document.getElementById("mon2").value
    let o = t * .88
    document.getElementById("out2").innerHTML = o.toFixed(2) + " EU"
}