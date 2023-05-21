`Pick--> using this we can grab the type from from a specific type declaration interface or type alias.
 we can send multiple fields for using it as a type using the | operator`

interface IPick {
name: string;
phone: number;
email: string;
age:number;
}

type Contact=Pick<IPick,'email'|'phone'>

`Omit--> using this we can remove a particular type from an interface declaration and use the remaining types as type constraints.`

type OmitExample=Omit<IPick,'name'|"age">

`Partial--> using this we can make all the fields of an interface/type as optional.`
type PartialExample=Partial<Contact>
`Required--> using this we can make all the fields of an interface/type as required.`
type RequiredExample=Required<PartialExample>
`Record--> using this we can define the key properties and and there type.as a result no extra properties could be added`
type RecordExample=Record<'name'|'age',string>

const absc:RecordExample={
    name:'sdf',
    age:'23',
    // email:'sdf',

}