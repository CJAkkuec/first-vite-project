import "./style.css";
import "animate.css";

import Chance from "chance";
const chance = new Chance();

window.addEventListener("load", (event) => {
  let firstNameGenerator = chance.first();
  let middleNameGenerator = chance.first();
  let lastNameGenerator = chance.last();
  let yearGenerator = chance.year({ min: 1900, max: 2000 });
  let emailGenerator = chance.email();
  let jobGenerator = chance.profession();
  let telGenerator = chance.phone();
  let numberGenerator = chance.integer({ min: -999, max: 999 });
  let cityGenerator = chance.city();
  let animalGenerator = chance.animal();

  document.querySelector("#app").innerHTML = `
<main>
<img class="avatar animate__animated animate__rubberBand" src="" id="mainIMG">
<h1>${firstNameGenerator} ${middleNameGenerator} ${lastNameGenerator}</h1>
<div>
  <p><img class="icon" src="images/phone-solid.svg">${emailGenerator}</p>
  <p><img class="icon" src="images/envelope-square-solid.svg">${telGenerator}</p>
</div>
<div>
  <p>
    Hey my name is ${firstNameGenerator} and I am a ${jobGenerator}. I was born in
    the year of ${yearGenerator} in the city of ${cityGenerator}. My favorite
    animal is the ${animalGenerator}. But I also love numbers! My favorite
    one is ${numberGenerator}.
  </p>
</div>
</main>
`;

  let randomImage = new Array(
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg"
  );

  let randomNum = Math.floor(Math.random() * randomImage.length);

  document.getElementById("mainIMG").src = randomImage[randomNum];
});
