type Combinable = number | string; // my own type
type ResultFormatType = "as-num" | "as-str";

const combine = (
  value1: Combinable,
  value2: Combinable,
  resultFormat: ResultFormatType
) => {
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
