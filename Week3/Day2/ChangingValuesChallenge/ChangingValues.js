// Given the existing code below, can you write some code so that their values are switched around?
// var a =“3”;
// var b=“8”;
// So that the variable a holds the value “8”. And the variable b holds the value “3”. When the code is run, it should output:
// a is 8
// b is 3
// Do NOT change any of the existing code. Do NOT declare the variables.

let a = 3,
    b = 8;
[a, b] = [b, a];
console.log(a);
console.log(b);