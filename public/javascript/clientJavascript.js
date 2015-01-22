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

calc = function(course1,credits1,course2,credits2,course3,credits3){
    return (letterToNumber(course1)*credits1+letterToNumber(course2)*credits2+letterToNumber(course3)*credits3)/(credits1+credits2+credits3);
}

letterToNumber = function(course){
    switch(course){
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

