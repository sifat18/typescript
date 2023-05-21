interface Model<TData,TMethod>{
    data:TData,
    method:TMethod
}
interface IKeys{
    name:string,
    age:number,
    email:string

}
interface IMethods{
    getDetails:()=>void,
    getContact:(p1:string)=>void
}

type model=Model<IKeys,IMethods>
class demo implements model{
    data:IKeys;
    method: IMethods
    constructor(a:string,b:number,c:string){
        this.data={
            name:a,
            age:b,
            email:c
        }
        this.method={
            getDetails:()=>console.log(`This user is ${this.data.name} and his age is ${this.data.age}`),
            getContact:(p1)=>console.log(`${p1} Contact ${this.data.name} at here ${this.data.email} `)
        }
    }
}
const aa=new demo('sdf',23,'sdf')
aa.method.getDetails()
aa.method.getContact('DemoUser')