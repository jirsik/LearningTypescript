type Combinable = number | string; // my own type
type ResultFormatType = "as-num" | "as-str";

let combine: (a: Combinable, b: Combinable, r: ResultFormatType) => Combinable;
combine = (
  value1: Combinable,
  value2: Combinable,
  resultFormat: ResultFormatType
): Combinable => {
  let result: Combinable;
  if (resultFormat === "as-num") {
    result = +value1 + +value2;
  } else {
    result = value1.toString() + value2.toString();
  }
  return result;
};

console.log(combine(10, "20", "as-num"));
console.log(combine(10, 20, "as-str"));
console.log(combine("str", 20, "as-num"));

//------------------------------------------------------ type any vs unknown
let valueToBeAssign1: any;
let valueToBeAssign2: unknown;
let getValue: number;

valueToBeAssign1 = 10;
valueToBeAssign2 = 5;

getValue = valueToBeAssign1; // with type any is not checked
// getValue = valueToBeAssign2; //with tyúe unknown this is not allowed
if (typeof valueToBeAssign2 === "number") {
  getValue = valueToBeAssign2;
}
