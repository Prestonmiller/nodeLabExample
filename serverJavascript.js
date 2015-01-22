// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.five = function(){
    return 5;
}

exports.calc = function(course1,credits1,course2,credits2,course3,credits3){
    return (letterToNumber(course1)*credits1+letterToNumber(course2)*credits2+letterToNumber(course3)*credits3)/(credits1+credits2+credits3);
}

letterToNumber = function(course) {
    switch (course) {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        case "D":
            return 1;
        default:
            return 0;
    }
}


