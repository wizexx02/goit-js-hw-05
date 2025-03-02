//4
const builder = new StringBuilder("1");

builder.append("2");
console.log(builder.value);

builder.prepend("3");
console.log(builder.value);

builder.pad("4");
console.log(builder.value);
