const plus = (number1: number, number2: number) => {
  return number1 + number2;
};

const publish = (data: string, target: HTMLParagraphElement) => {
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
      publish.bind(null, plus(+num1.value, +num2.value).toString(), result)
    );

    // () => {
    //   result.innerHTML = plus(+num1.value, +num2.value).toString();
    //   console.log("yes");
    // });
  }
});
