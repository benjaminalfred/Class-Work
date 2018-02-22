console.log(6 === 4 + 2);

console.log(6 === add(2, 4));

function add(num1, num2){
    return(num1 + num2)
};


console.log(6 === sub(9, 3));
function sub(int1, int2){
    return(int1 - int2)
};

console.log(6 === mult(2, 3));
function mult(nom1, nom2){
    return(nom1 * nom2)
}

console.log(6 === div(12, 2));
function div(numb1, numb2){
    return(numb1 / numb2)
}

function assert(expected, actual, message){
    if(expected === actual){
        console.log(true)
        return true
    }
    else {
        console.log(message)
    }
}

assert(8, mult(2, 4), "Failed")