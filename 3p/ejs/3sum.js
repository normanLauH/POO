function sum() {
    let t = document.getElementById("texto").value;
    console.log(t);
    var tx = t.split(" ");
    console.log(tx);

    let cadena = "";

    let f = 0;
    for(let n=0; n<tx.lenght; n++){
        
        console.log("x")
        for(let m=0; m<tx.lenght; m++){
            console.log("y")
            for(let o=0; o<tx.lenght; o++){
                console.log("z")
                /*console.log(parseInt(tx[n])+parseInt(tx[m])+parseInt(tx[o]))
                console.log(n + " , " + m + " , " + o)
                if((parseInt(tx[n])+parseInt(tx[m])+parseInt(tx[o])) === 0){
                    cadena += tx[n] + " " + tx[m] + " " + tx[o] + "<br>";
                    console.log(cadena)
                }*/

            }
        }
    }

    document.getElementById("ans").innerHTML = cadena;
}