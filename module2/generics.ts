// generics is nothing but the way to write the type assertion in a general form
// scenario 1

const arra: Array<number> = [1, 23, 3];
const arra2: Array<string> = ["1,23,3", "1243"];
// ^ similar syntax
// const arra:number[]=[1,23,3]
// const arra2:string[]=['1,23,3','1243']

type genericExam<x, y> = [x, y];
const array12: genericExam<string, number> = ["12", 1];
const array13: genericExam<object, number> = [{}, 1]; // not recommended as we could pass any object so must define the properties
const array14: genericExam<{ name: string }, number> = [{ name: "sd" }, 1];
export const addU = (obj: object) => {
  let id = Math.floor(Math.random() * 200);
  return { ...obj, id };
};
let U = addU({
  name: "sifat",
  age: 20,
});

U.id; //can caputre
// U.name //cant caputre
// U.age //cant caputre

// to overcome this

// scenario 2 --> <T> gets the passed type and it is set to T

const addU2 = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 200);
  return { ...obj, id };
};
let U2 = addU2({
  name: "sifat",
  age: 20,
});

// now we can get
console.log(U2.name);

// generics with interface

interface APIRES {
  status: number;
  type: string;
  data: object; //we dont know what type of data we get
}
const resp1: APIRES = {
  status: 300,
  type: "dasda",
  data: { name: "sifa", age: 23 },
};
// to get the type using generics

interface APIRESS<T> {
  //with this we dynamically set the type
  status: number;
  type: string;
  data: T; //data gets T typed data
}
const resp11: APIRESS<object> = {
  //we have to define the type here
  status: 300,
  type: "dasda",
  data: { name: "sifa", age: 23 },
};

// enum

enum Rtype {
  "safsd",
  "sadasd",
  "asx",
  "wqdsa",
}
interface APIRESSs<T> {
  //with this we dynamically set the type
  status: number;
  type: Rtype;
  data: T; //data gets T typed data
}
const resp111: APIRESSs<object> = {
  //we have to define the type here
  status: 300,
  type: Rtype.asx,
  data: { name: "sifa", age: 23 },
};
console.log(resp111);
// tuple

export let ars: [number, string, boolean] = [1, "asd", false];
ars.push("12");
ars.push(2);
console.log(ars);

type tupple = [number, string];
const tupplee: tupple = [1, "1"];
// tupplee[0] = "22"; cant change
console.log("tupplee", tupplee);
// for optional
interface Iinfo<T, U = null> {
  //with this we dynamically set the type
  status: number;
  type?: U;
  data: T; //data gets T typed data
}
const u: Iinfo<string> = { status: 1, data: "sa" };
const u2: Iinfo<string, string> = { status: 1, type: "a", data: "sa" };

// generic function

const genericFunc = <T>(param: T): void => {
  console.log("genericFunc", param);
};
const genericFunc2 = <T, U>(param1: T, param: U): [T, U] => {
  return [param1, param];
};

genericFunc<string>("sd");
genericFunc<boolean>(false);
genericFunc2<boolean, Array<string>>(false, ["aaa"]);
// generic constraints
const genericFunc3 = <T extends { age: number }>(param1: T): T => {
  console.log(param1);
  return param1;
};
genericFunc3({ age: 3 });
// generic constraints using keyof

const genericFunc4 = <T, X extends keyof T>(param1: T, key: X): T[X] => {
  console.log(param1[key]);
  return param1[key];
};
genericFunc4({ name: "sad", age: 3243 }, "age");
