// class define
export class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`player ${this.name} was very good at the age ${this.age}`);
  }
}
// when we use access modifiers we can do a shortcut class define

class P {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}
  play() {}
}
// player objects
const sakib = new Player("sakib", 35, "bd");
const adnan = new Player("adnan", 25, "bd");

// just like array type declaration  we can use class as a type
const khelowar: Player[] = []; //this creates a array of objects of class Player

// with interface we can also define the class
