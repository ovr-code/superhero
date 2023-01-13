const superHero_token = '179816364683636' //Personal taken to get images
const sh_url = `https://superheroapi.com/api.php/${superHero_token}` //url of Superhero image with application of token which is dynamic!

console.log(sh_url) //Just to confirm the url is right and everything is fine!
const heroimage = document.getElementById('superheroDiv') //Getting the html id
const heroName = document.getElementById('heroName') //Getting the html id

const button = document.getElementById('buttonClick') //Getting the html id of button

// For generating a random number between some likely numbers eg: 1 to 10000
const randomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min)
// console.log(randomNumber(1,9999))

// The function where real magic happens and tried everything to be Dynamic!

const superHero = (id) => {
  fetch(`${sh_url}/${id}`) //Fetch or recive the URL (Something called promises and asynchronous javascript😍!)
    .then((response) => response.json()) //responses the JSON file  from the url!
    .then((json) => {
      //Here I am gonna playing with JSOn and make the webpage something Funn!
      console.log(json.image.url)
      console.log(json.name)
      console.log(json.id)
      console.log(json)
      console.log(json.appearance)

      // heroName.innerHTML = `--`
      button.innerHTML = 'Another Super Hero'

      heroimage.innerHTML = `
      <img class='superhero_img' src='${json.image.url}'/>
     <div class='info-side'> <h2>${json.name} </h2> 
     <p><strong>Publisher: </strong> ${json.biography.publisher}</p>
     <p><strong>Work: </strong>${json.work.base}</p>
     
     <p><strong>Gender: </strong>${json.appearance.gender} <br>
      <strong>Occupation: </strong>${json.work.occupation}</p> 
      
      <h3>:Other Details:</h3>
      <p>
     <bold> Connections: </bold>  
     <h3>Coming Soon..... </h3>
     
       
      </p> 
      </div>

      `
      document.title = `${json.name} | ovrcode`
    })
}

button.onclick = () => {
  let number = randomNumber(1, 732)
  superHero(number)
}

// https://superheroapi.com/api/179816364683636

// document.querySelector('body').innerHTML += ` <img src="${}"`
