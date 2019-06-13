const sqrt = (a) => {
    for (var i = a; i >= 1; i--) {
        if (i * i === a) {
            a = i;
            break;
       }
   }
   return a;
}