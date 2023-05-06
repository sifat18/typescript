"use strict";
// scenario-1
// if we initialize and declare variable with let then the variable type is inferred  and it is set to any type
let country = undefined; //event if the value is set to undefined it is not a type of undefined, its due to declaration with let
country = "BD";
console.log(country);
// cant set country to any other type of data --> give error
// country=34
console.log(country);
