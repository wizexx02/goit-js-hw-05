// 1
function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

const mango = new Account({ login: "Mangozeowl", email: "mango@owl.graa" });
mango.getInfo();
const poly = new Account({ login: "Poly", email: "poly@mail.com" });
poly.getInfo();
// 2
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const userMango = new User({ name: "Mango", age: 2, followers: 20 });
userMango.getInfo();

const userPoly = new User({ name: "Poly", age: 3, followers: 17 });
userPoly.getInfo();
//3
const storage = new Storage(["годинник", "килим", "валіза", "жук"]);

const items = storage.getItems();
console.table(items);

storage.addItem("буква");
console.table(storage.items);

storage.removeItem("цифра");
console.table(storage.items);
//4
const builder = new StringBuilder("1");

builder.append("2");
console.log(builder.value);

builder.prepend("3");
console.log(builder.value);

builder.pad("4");
console.log(builder.value);
//5
class Car {
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed = Math.min(this.speed + value, this.maxSpeed);
  }

  decelerate(value) {
    this.speed = Math.max(this.speed - value, 0);
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
