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
