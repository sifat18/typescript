// when we know the type better than typescript
let bs: any;
bs = "sadaf";
(bs as string).length;
<string>bs.length; //another way to use type assertion but it will not work in jsx

const test2 = (params: number | string): number | string | undefined => {
  if (typeof params === "number") {
    return 2;
  } else if (typeof params === "string") {
    return "this is string param";
  } else {
  }
};
// since we are passing a number so it will return number, but t1 still shows all the option type it can return. as we are sure it will return number so we can explicitly say the type
const t1 = test2(2) as number;
const t2 = test2("2") as string;
// const t2 = test2(false) as string;
