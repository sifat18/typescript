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

let ar3 = ["a", false, 3];

// ar3.push({}) cant enter object as it was not in dinitialized value
let ar1 = ["a", "b", "c"];
// ar1.push(2) cant because it is set to string type
let ar2 = [];
ar2.push(2);
ar2.push("2");
ar2.push(false);
ar3.push(false);
console.log("ar", ar1);
console.log("ar2", ar2);
console.log("ar3", ar3);

// object
let per = {
  name: "sifat",
  age: 23,
  smart: false,
};
// cant
// per.name=34
// per.country='bd'

// function calles

function mult(a: number, b: number): number {
  return a * b;
}
console.log("mult", mult(3, 4));
// optional parameters are always at the last, cant initial it in the first position
function mult2(a: number, b: number, c: number = 1) {
  return a * b * c;
}
console.log("mult", mult(3, 4));
console.log("mult2", mult2(5, 2));

// ways of defining variable
let a: string;
let b: number;
let ar: string[] = [];
let arr1: object[];
// to make a mixed type
let arr2: (number | string)[] = [];
arr2.push(2, "srsfd");
arr2.push("dfghdfh", 2);
console.log("arr2", arr2);

// arr2.push(2,'srsfd',true)
let c: number | string;
c = "str";
c = 32;
// c=false;

// object type setting
//  manush: object --> can take even array as not defined exactly

let manush: {
  name: string;
  age: number;
  adult: boolean;
};
manush = {
  name: "sifat",
  age: 23,
  adult: false,
};

// function type
let myFunc: Function;
myFunc = () => {
  console.log("sdasd");
};
// myFunc=5

// Type Aliasing
type stringOrNum = string | number;
type userType = { name: string; age: number };
const prac1 = (id: stringOrNum, user: userType) => {
  console.log(`user id ${id} is ${user.name}`);
};
prac1(23, { name: "sifat", age: 23 });
prac1("4", { name: "sifat", age: 23 });

// fuction signature
let afun: () => number;
let add: (x: number, y: number) => number;

add = (s: number, b: number) => {
  // console.log(s+b) must return
  return s + b;
};

// interface------------
// scenanrio 1
const rectAngle = (option: { width: number; height: number }): void => {
  let width = option.width;
  let height = option.height;
};
rectAngle({ width: 30, height: 40 });

// scenanrio 2...the way we define option is too long we can make it short by creating its structure beforehand

interface option2 {
  width: number;
  height: number;
}
const rectAngle2 = (option: option2): void => {
  let width = option.width;
  let height = option.height;
};
rectAngle2({ width: 30, height: 40 });
// when we directly send values it checks strictly...so we will get error
// rectAngle2({ width: 30, height: 40,length:30 })

// but if we initialized the value beforehand it will accept it..

let threVals = {
  width: 30,
  height: 40,
  length: 30,
};

rectAngle2(threVals); //see this one is okay but line 46 is not

// -----------------------------------------------------------------
// declare types
const ab: number = 232;

// declare functions with any type
function add4(num1: any, num2: any): any {
  return `this ${num1} , ${num2}`;
}
// declare functions with specified type
function add2(num3: string, num4: string): string {
  return ` ${num3} will marry ${num4}`;
}
// custom type defined
const add3 = (num3: mult, num4: mult): mult => {
  return ` ${num3} will marry ${num4}`;
};
console.log("add4", add4(23, 23));
console.log("add4", add4("x", "y"));
console.log(add2("x", "y"));
console.log(add3("x", 33));
// add2(2, 3) ==> wont work

// defining a type
type mult = string | number;

// object properties
const person: {
  name: string;
  age: number;
  hobby?: string; //to make it an optional value
} = {
  name: "asda",
  age: 23,
  hobby: "asdkjasd",
};
console.log(person.hobby);

// object properties much better way using interface
interface IPerson {
  nam: string;
  boyosh: number;
  shokh?: string;
}
const manush2: IPerson = {
  nam: "sifat",
  boyosh: 26,
  shokh: "lazing around",
};
console.log(manush2.boyosh);

// to declare same type of variables we can use the enum type

enum Colors {
  color1 = "#erwrwerw",
  color2 = "#fg3212",
  color3 = "#fn3235",
}
// define array types
const arry1: number[] = [1, 2, 3, 4];
console.log("Colors.color1", Colors.color1);
