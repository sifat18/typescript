// Type Aliasing
type stringOrNum = string | number;
type userType = { name: string; age: number };
const prac1 = (id: stringOrNum, user: userType) => {
  console.log(`user id ${id} is ${user.name}`);
};
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

// for objects
type Noob = {
  name: string;
  exp: number;
};
type Mid = Noob & {
  desig: string;
  salary?: number;
};
type senior = Mid & {
  car: string;
};

const p1: senior = { name: "ttt", exp: 2, desig: "aa", car: "" };

const developer: Noob | Mid | senior = {
  name: "ttt",
  exp: 2,
  desig: "aa",
  salary: 214,
};
