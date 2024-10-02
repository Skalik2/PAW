(function () {
  let ex1_button = document.getElementById("ex1_button");
  let ex1_content = document.getElementById("ex1_content");

  let numbers = document.createElement("p");
  numbers.textContent = "0,1,2,3,4,5,6,7,8,9";
  console.log(numbers);
  ex1_button.addEventListener("click", () => {
    ex1_content.appendChild(numbers);
  });
})();
