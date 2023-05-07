// task 1
const arrayToTupple: [number, string, string, boolean, string] = [
  1,
  "2",
  "true",
  false,
  "23",
];

// task 2
const findCommon = (arr1: number[], arr2: number[]): number[] => {
  const ar: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    // beasts.indexOf('bison')
    if (arr2.indexOf(arr1[i]) != -1) {
      ar.push(arr1[i]);
    }
  }
  return ar;
};
console.log(findCommon([1, 2, 3, 4], [2, 4, 6, 8]));
// task 3
interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

type findProductFunc = (
  ar: IProduct[],
  key: keyof IProduct,
  value: number | string
) => IProduct | undefined;

const findProduct: findProductFunc = (ar, key, value) => {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i][key] === value) {
      return ar[i];
    }
  }
};
console.log(
  findProduct(
    [
      { id: 1, name: "product1", price: 100, category: "cat1" },
      { id: 2, name: "product2", price: 200, category: "cat2" },
    ],
    "price",
    100
  )
);

// task 4

type productTupple<T, U, V> = [T, U, V];
const tuppleArray: productTupple<string, number, number>[] = [
  ["product1", 100, 100],
  ["product2", 200, 200],
  ["product3", 300, 300],
];

type funcTotal = (x: productTupple<string, number, number>[]) => number;

const total: funcTotal = (x) => {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i][1];
  }
  return sum;
};
console.log("total", total(tuppleArray));

// task 5
type findEvenSum = (arr: number[]) => number;
const findSumEven: findEvenSum = (arr) => {
  return arr.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc + 0), 0);
};
console.log("sum", findSumEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// task 6
interface IPerson2 {
  name: string;
  email: string;
  age: number;
}
type personArray = IPerson2[];
type findEmailFunc = (arr: personArray, email: string) => IPerson2 | undefined;

const findPerson: findEmailFunc = (arr, email) => {
  const person = arr.find((item) => item.email === email);
  if (person) {
    return person;
  } else {
    console.log("no person exists");
  }
};
console.log(
  findPerson(
    [
      { name: "a", email: "a@a.com", age: 23 },
      { name: "b", email: "b@a.com", age: 23 },
    ],
    "c@a.com"
  )
);
// task 7

function findMinMax(...nums: number[]): { min: number; max: number } {
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return { min, max };
}

const numbers: number[] = [10, 5, 3, 8, 2];
const { min, max } = findMinMax(...numbers);

console.log(`Minimum: ${min}`);
console.log(`Maximum: ${max}`);
// task 8
type colors = "red" | "green" | "blue";
type capamal<T> = (param: T, flag?: boolean) => string;

const upLow: capamal<colors> = (param, flag = false) => {
  if (flag) {
    return param.toUpperCase();
  } else {
    return param.toLowerCase();
  }
};
console.log(upLow("red", true));
