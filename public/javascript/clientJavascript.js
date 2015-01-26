// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

var returnTrue = function(){
    return true;
}

var getLetter = function(i){
    switch(i){
        case 0:
            return "a";
        case 1:
            return "b";
        case 2:
            return "c";
    }
}

var calc = function(course1,credits1,course2,credits2,course3,credits3){
    return (Number(letterToNumber(course1))*Number(credits1)+Number(letterToNumber(course2))*Number(credits2)+Number(letterToNumber(course3))*Number(credits3))/(Number(credits1)+Number(credits2)+Number(credits3));
}

var letterToNumber = function(course) {
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

