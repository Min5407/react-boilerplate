import { ab } from "./test";
import "./style/index.css";

const data = {
  age: 123,
  name: "Kate",
};

const data2 = {
  ...data,
  teach: true,
};

console.log(data);
console.log(data2);
console.log(123);

ab();
