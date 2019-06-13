let mapEx = function(list) {
    return list.map(function(number){
        switch(number){
            case 3:
                return 'a';
                break;
            case 2:
                return 'b';
                break;
            case 1:
                return 'c';
                break;
            default:
                return 'undefined';
                break;
        }
    })
}