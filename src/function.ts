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

// function type
let myFunc: Function;
myFunc = () => {
  console.log("sdasd");
};
// myFunc=5

// fuction signature
let afun: () => number;
let add: (x: number, y: number) => number;

afun = () => {
  return 32;
};
add = (x, y) => {
  return x * y;
};
console.log("afun", afun());
// console.log("add", add(2, "1"));
console.log("add", add(2, 2));

// add344 = (s: number, b: number) => {
//   // console.log(s+b) must return
//   return s + b;
// };

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
// -------------------------------------
// defining a type
type mult = string | number;
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
