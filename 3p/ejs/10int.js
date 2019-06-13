function funcion() {
    rand = function(min, max) {
        if (min==null && max==null)
          return 0;    
        
        if (max == null) {
            max = min;
            min = 0;
          }
          return min + Math.floor(Math.random() * (max - min + 1));
    };
    for(var i = 0; i < 10; i++){
        document.getElementById("text").innerHTML += rand(1,10) + "<br>"
    }
}