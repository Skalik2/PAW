(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        array.forEach(element => {
          answer.innerHTML += "Uzytkownik: " + JSON.stringify(element.userId) + "&nbsp;&nbsp;";
          answer.innerHTML += "Id: " + JSON.stringify(element.id) + "<br>";
          answer.innerHTML += "Tytuł: " + JSON.stringify(element.title) + "<br>";
          answer.innerHTML += "Opis: " + JSON.stringify(element.body) + "<br>";
          answer.innerHTML += "<br><br>";
        });
      })
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
