type A = {
  height: number;
  width: number;
};
type AA = A["height"];

type Volume = {
  height: number;
  width: number;
  length: string;
};
type BB = keyof Volume;

type AAA<T> = {
  [key in keyof T]: T[key];
};
let volume: AAA<Volume> = { height: 23, width: 34, length: "23" };
