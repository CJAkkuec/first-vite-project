import "./style.css";

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
  let avatarGenerator = chance.avatar({ protocol: "https" });

  document.querySelector("#app").innerHTML = `
<main>
<img class="mainimg" src=${avatarGenerator}  alt="Selfhtml">
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
});
