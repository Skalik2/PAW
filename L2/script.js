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
    answer.innerHTML = "Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        answer.innerHTML = "";
        array.forEach(element => {
          answer.innerHTML += "<b class='userId'>Uzytkownik: " + JSON.stringify(element.userId) + "</b>&nbsp;&nbsp;";
          answer.innerHTML += "<b class='postId'>Id: " + JSON.stringify(element.id) + "</b><br>";
          answer.innerHTML += "<b>Tytuł</b>: " + JSON.stringify(element.title) + "<br>";
          answer.innerHTML += "<p class='description'>" + JSON.stringify(element.body) + "</p><br>";
          answer.innerHTML += "<br><br>";
        })
      })
  })

  cw2.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(el => {
        answer.innerHTML = "";
        answer.innerHTML += "<b class='userId'>Uzytkownik: " + JSON.stringify(el.userId) + "</b>&nbsp;&nbsp;";
        answer.innerHTML += "<b class='postId'>Id: " + JSON.stringify(el.id) + "</b><br>";
        answer.innerHTML += "<b>Tytuł</b>: " + JSON.stringify(el.title)+ "<br>";
        answer.innerHTML += "<p class='description'>" + JSON.stringify(el.body) + "</p><br>";
        answer.innerHTML += "<br><br>";
      })
  })

  cw3.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
    const newPost = {
      title: 'title',
      body: 'body',
      userId: 1,
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newPost),  
    })
      .then(response => response.json())
      .then(data => {
        answer.innerHTML = "Dodano nowy post o ID = " + data.id;
      })
      .catch(error => {
        answer.innerHTML = "Wystąpił błąd podczas dodawania postu.";
        console.error('Error:', error);
      });
  })



    

  

})();
