// object
let per = {
  name: "sifat",
  age: 23,
  smart: false,
};
// cant
// per.name=34
// per.country='bd'

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

// const { age: string } = person; cant set type like this as this renames the destructures property
// console.log("string", string);
