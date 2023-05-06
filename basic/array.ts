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
// to make a mixed type
let arr2: (number | string)[] = [];
arr2.push(2, "srsfd");
arr2.push("dfghdfh", 2);
console.log("arr2", arr2);

// interface IArray{
//     [index:number]:number
// }

// ^ similar to this syntax type array=number[]
