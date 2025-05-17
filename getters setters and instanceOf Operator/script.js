class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("i'm flying");
  }
  get name() {
    return this._name;
  }
  set name(newname) {
    this._name = newname;
  }
}
class Rabbit extends Animal {
  eatCarrot() {
    console.log("Eating Carrot");
  }
}

let a = new Animal("Bruno");
let d = new Rabbit("Rahul");
a.fly();
a.name = "Rahul";
console.log(a.name);
console.log(a instanceof Animal)
console.log(d instanceof Animal);
let c = 54;
// console.log(c instanceof Animal) --> throw error
