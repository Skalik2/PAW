(function () {
  let ex1_button = document.getElementById("ex1_button");
  let ex1_content = document.getElementById("ex1_content");
  let ex2_text = document.getElementById("ex2_text");
  let ex2_content = document.getElementById("ex2_content");

  let numbers = document.createElement("p");
  numbers.textContent = "0,1,2,3,4,5,6,7,8,9";
  ex1_button.addEventListener("click", () => {
    ex1_content.appendChild(numbers);
  });

  ex2_text.addEventListener("input", () => {
    let text = ex2_text.value;
    let ifError = false;
    console.log(text.match(/[!@#$%^&*]/));
    if (text.length != 9) {
      ex2_content.textContent = "Długość numeru musi być równa 9";
      ifError = true;
    } else if (text.match(/[a-zA-Z]/) != null) {
      ex2_content.textContent = "Numer nie może zawierać liter";
      ifError = true;
    } else if (text.match(/[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/) != null) {
      ex2_content.textContent = "Numer nie może zawierać znaków specjalnych";
      ifError = true;
    }
    if (!ifError) ex2_content.textContent = "Numer telefonu jest poprawny";
  });
})();
