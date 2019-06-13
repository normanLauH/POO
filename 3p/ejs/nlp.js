function funcion() {
    let t = document.getElementById("texto").value;
    document.getElementById("caracteres").innerHTML = t.length + " caracteres";

    var tx = t.split(" ");

    document.getElementById("palabras").innerHTML = tx.length + " palabras";

    tx = t.split("");

    let i = 0;
    tx.forEach(x => {
        if((x === ",") || (x === ".") || (x === ";"))
            i++;
    });
    document.getElementById("sentencias").innerHTML = i + " sentencias";

    i = 0;
    tx.forEach(x => {
        if(x === "\n")
            i++;
    });
    document.getElementById("parrafos").innerHTML = i + " parrafos";
}