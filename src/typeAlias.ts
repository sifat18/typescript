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
