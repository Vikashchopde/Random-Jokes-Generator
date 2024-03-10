

const GetJoke = document.getElementById("joke");
const btn = document.getElementById("btn");
const Url = "https://hindi-jokes-api.onrender.com/jokes?api_key=7a6455e697c2459dfbd4351c110b";              
  
function GenerateJoke() {
     fetch(Url)
     .then(function(data){
          //  console.log(data)
          return data.json();
     })
     .then(function(joke){
       GetJoke.innerHTML = `${joke.jokeContent}`
     })
  }
    
     
  btn.addEventListener("click", GenerateJoke);   