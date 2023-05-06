// scenario 1
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
tupplee.push("12");
console.log("tupplee", tupplee);
