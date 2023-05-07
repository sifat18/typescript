// task 1
const arrayToTupple: [number, string, string, boolean, string] = [
  1,
  "2",
  "true",
  false,
  "23",
];
// task 2
const findCommon = (arr1: number[], arr2: number[]):number[] => {
  const ar: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    // beasts.indexOf('bison')
    if (arr2.indexOf(arr1[i]) != -1) {
      ar.push(arr1[i]);
    }
  }
  return ar
};
console.log(findCommon([1, 2, 3, 4], [2, 4, 6,8]));
// task 3
interface IProduct{
    id: number,
    name: string,
    price: number,
    category: string,
}


type findProductFunc = (ar:IProduct[],key:keyof IProduct,value:number|string) => IProduct | undefined;

const findProduct:findProductFunc=(ar,key,value)=>{
    for(let i=0;i<ar.length;i++){
        if(ar[i][key]===value){
            return ar[i]
        }
    }
}
console.log(findProduct([{id:1,name:"product1",price:100,category:"cat1"},{id:2,name:"product2",price:200,category:"cat2"}],"price",100))