(function () {
  const ex1_button = document.getElementById("ex1_button");
  const ex1_content = document.getElementById("ex1_content");
  const ex2_text = document.getElementById("ex2_text");
  const ex2_content = document.getElementById("ex2_content");

  const contener1 = document.getElementById("ex3_one");
  const contener2 = document.getElementById("ex3_two");
  const draggableElement = document.getElementById("ex3_element");

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

  draggableElement.addEventListener("dragstart", ()=>{
     contener2.addEventListener("dragover", (e)=>{
        e.preventDefault();
     })
     contener2.addEventListener("drop", ()=>{
      contener2.appendChild(draggableElement);
     })

     contener1.addEventListener("dragover", (e)=>{
      e.preventDefault();
   })
   contener1.addEventListener("drop", ()=>{
    contener1.appendChild(draggableElement);
   })
  })
})();
