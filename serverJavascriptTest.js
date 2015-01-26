
letterToNumber = function(course) {
    switch (course.toUpperCase()) {
        case "A":
            return 4;
        case "A-":
            return 3.7;
        case "B":
            return 3;
        case "B+":
            return 3.3;
        case"B-":
            return 2.7;
        case "C":
            return 2;
        case "C+":
            return 2.3;
        case "C-":
            return 1.7;
        case "D":
            return 1;
        case "D+":
            return 1.3;
        default:
            return 0;
    }
}
calc = function(course1,credits1,course2,credits2,course3,credits3){
    return (Number(letterToNumber(course1))*Number(credits1)+Number(letterToNumber(course2))*Number(credits2)+Number(letterToNumber(course3))*Number(credits3))/(Number(credits1)+Number(credits2)+Number(credits3));
}


