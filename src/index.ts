// scenario-1
// if we initialize and declare variable then the variable type is inferred
let country = "BD";
// cant set country to any other type of data --> give error
// country=34
console.log(country);

// scenario-2
// if only declare variable but not initialize it then we can change the type anytime because at the starts it becomes undefined so we could change it to any type
// same case for array and object
let Name;
Name = "Sifat";
console.log(Name);
Name = 34;
console.log(Name);

// ways of defining variable
let a: string;
let b: number;
let ar: string[] = [];
let arr1: object[];

// arr2.push(2,'srsfd',true)
let c: number | string;
c = "str";
c = 32;
// c=false;

// interface------------

// -----------------------------------------------------------------
// declare types
const ab: number = 232;

// to declare same type of variables we can use the enum type

enum Colors {
  color1 = "#erwrwerw",
  color2 = "#fg3212",
  color3 = "#fn3235",
}
// define array types
const arry1: number[] = [1, 2, 3, 4];
console.log("Colors.color1", Colors.color1);

// nullish coalesnace operator ==> it checks for null or undefined value and is detected using ?? syntax
const isAuthenticate = null;
const isAuthenticate2 = "";
console.log("nullish", isAuthenticate ?? "null /undefined ashbe");
console.log("nullish kisu asbe na", isAuthenticate2 ?? "null /undefined ashbe");
console.log(
  "normal ternary",
  isAuthenticate2 ? "kisui ashbe na " : isAuthenticate2
);
