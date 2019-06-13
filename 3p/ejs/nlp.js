function funcion() {
    let t = document.getElementById("texto").value;
    document.getElementById("caracteres").innerHTML = t.length + " caracteres";

    var tx = t.split(" ");

    document.getElementById("palabras").innerHTML = tx.length + " palabras";
}