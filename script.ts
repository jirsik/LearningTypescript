const plus = (number1: number, number2: number) => {
  return number1 + number2;
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#myButton");
  const num1 = document.querySelector("#num1")! as HTMLInputElement;
  const num2 = document.querySelector("#num2")! as HTMLInputElement;
  const result = document.querySelector("#result")!;

  button.addEventListener("click", () => {
    result.innerHTML = plus(+num1.value, +num2.value).toString();
    console.log("yes");
  });
});
