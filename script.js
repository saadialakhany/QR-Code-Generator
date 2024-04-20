const codeContainer = document.querySelector(".code--container");
const generateBtn = document.querySelector(".btn--generate");
const inputField = document.querySelector(".text-field");

const createCode = function () {
  const inputText = inputField.value;

  const image = document.createElement("img");
  image.setAttribute(
    "src",
    `http://api.qrserver.com/v1/create-qr-code/?data=${inputText}!&size=150x150`
  );

  image.addEventListener("load", function () {
    codeContainer.innerHTML = "";
    inputField.value = "";
    codeContainer.prepend(image);
  });
};

generateBtn.addEventListener("click", createCode);
