const superHero_token = "179816364683636"; //Personal taken to get images
const sh_url = `https://superheroapi.com/api.php/${superHero_token}`; //url of Superhero image with application of token which is dynamic!

// console.log(sh_url); //Just to confirm the url is right and everything is fine!

const heroimage = document.getElementById("superheroDiv"); //Getting the html id
const heroName = document.getElementById("heroName"); //Getting the html id
const heroHistory = document.getElementById("heroHistory"); //Getting the html id
const randomButton = document.getElementById("randomButton"); //Getting the html id of button
const searchButton = document.getElementById("searchbutton"); //Getting the html id of button
const searchInput = document.getElementById("searchInput");

// For generating a random number between some likely numbers eg: 1 to 10000
// [const randomNumber = (max, min) =>
//   Math.floor(Math.random() * (max - min + 1) + min);]  //This is the function to generate random number but depraicated!
// console.log(randomNumber(1,9999))

// The function where real magic happens and tried everything to be Dynamic!

// Searching Super Hero
const getSearchedSuperHero = (heroName) => {
  fetch(`${sh_url}/search/${heroName}`)
    .then((response) => response.json())
    .then((json) => {
      hero = json.results[0];

      heroimage.innerHTML = `
      <img class='superhero_img' src='${hero.image.url}'/>
     <div class='info-side'> <h2>${hero.name} </h2> 
     <p><strong>Publisher: </strong> ${hero.biography.publisher}</p>
     <p><strong>Work: </strong>${hero.work.base}</p>
     
     <p><strong>Gender: </strong>${hero.appearance.gender} <br>
      <strong>Occupation: </strong>${hero.work.occupation}</p> 
      
      <h3>:Other Details:</h3>
      <p>
     <bold> Connections: </bold>  
     <h3>Coming Soon..... </h3>
     
       
      </p> 
      </div>

      `;

      // History Section
      heroHistory.innerHTML += `
       <div>
       <h3 class='history_name'>${hero.name}</h3>
       <img class='superhero_img_small' src='${hero.image.url}'/></div>
       `;

      document.title = `${hero.name} | ovrcode`;
    });
};

// getSearchedSuperHero();

// Random Hero Function
const getRandomSuperHero = (id) => {
  fetch(`${sh_url}/${id}`) //Fetch or recive the URL (Something called promises and asynchronous javascript😍!)
    .then((response) => response.json()) //responses the JSON file  from the url!
    .then((json) => {
      // Change the button Name as once it starts picking random data!
      randomButton.innerHTML = "Another Super Hero";

      // Functions to get the Random data from the JSON file and display it on the webpage!
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

      `;

      // History Section
      heroHistory.innerHTML += `
       <div>
       <h3 class='history_name'>${json.name}</h3>
       <img class='superhero_img_small' src='${json.image.url}'/></div>
       `;

      document.title = `${json.name} | ovrcode`;
    });
};

// Random number generator function
const randomHero = () => {
  const totalHero = 731;
  const number = Math.floor(Math.random() * totalHero) + 1;
  return number;
};

//Onlick Random Button
randomButton.onclick = () => {
  // let number = randomNumber(1, 732)
  console.log(randomHero());
  getRandomSuperHero(randomHero());
};

//Onclick Search Button

searchButton.onclick = () => {
  const searched = searchInput.value;
  console.log(searched);
  getSearchedSuperHero(searched);
};

// https://superheroapi.com/api/179816364683636

// document.querySelector('body').innerHTML += ` <img src="${}"`

// v.1.1 Updates

// 1. Added the random number generator function to generate random number between 1 to 731
