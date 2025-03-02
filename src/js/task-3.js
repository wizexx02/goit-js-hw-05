//3
const storage = new Storage(["годинник", "килим", "валіза", "жук"]);

const items = storage.getItems();
console.table(items);

storage.addItem("буква");
console.table(storage.items);

storage.removeItem("цифра");
console.table(storage.items);
