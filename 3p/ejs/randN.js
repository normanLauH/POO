function randN() {

    rand = function(min, max) {
        if (min==null && max==null)
          return 0;    
        
        if (max == null) {
            max = min;
            min = 0;
          }
          return min + Math.floor(Math.random() * (max - min + 1));
    };

    let n = document.getElementById("n").value;

    for(var i = 0; i < n; i++){
        document.getElementById("text").innerHTML += (rand(1,100)) + "\n";
    }

    let t = document.getElementById("text").innerHTML.split("\n");
    let minimum = t[0];
    let maximum = t[0];
    let sum = 0;
    for(let l = 0; l < (t.length - 1); l++){
        if(maximum<t[l])
            maximum = t[l];
        if(t[l]<minimum)
            minimum = t[l];

        sum+=Number(t[l]);
    }
    let avg = sum / (t.length - 1);
    console.log(avg);
}