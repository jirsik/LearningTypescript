const plus = (number1: number, number2: number) => {
  return number1 + number2;
};

const publish = (number1: HTMLInputElement, number2: HTMLInputElement, target: HTMLParagraphElement) => {
  const data: string = plus(+number1.value, +number2.value).toString();
  target.innerHTML = data;
  console.log(data);
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#myButton");
  const num1 = document.querySelector("#num1")! as HTMLInputElement;
  const num2 = document.querySelector("#num2")! as HTMLInputElement;
  const result = document.querySelector("#result")! as HTMLParagraphElement;

  if (button) {
    button.addEventListener(
      "click",
      publish.bind(null, num1, num2, result)
    );
  }
});
