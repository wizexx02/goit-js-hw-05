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
