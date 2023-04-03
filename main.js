const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

burger.onclick = function () {
    burger.classList.toggle("active");
}
burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navLink.classList.toggle("mobile-menu");
});

// Connection à l'API //
fetch("https://api.api-onepiece.com/characters")
.then((response) => response.json())
.then((result) => console.log(result));


  fetch("https://api.api-onepiece.com/characters")
  .then((response) => response.json())
  .then((result) => {
    const characterSelect = document.getElementById("character-select");
    const characterInfo = document.getElementById("character-info");

    // Ajouter les options de personnage au select
    result.forEach((character) => {
      const option = document.createElement("option");
      option.value = character.french_name;
      option.text = character.french_name;
      characterSelect.appendChild(option);
    });

     // Cacher la div character-info au début
     characterInfo.style.display = "none";
    
    // Ajouter un événement change au select
    characterSelect.addEventListener("change", (event) => {
      const selectedCharacter = result.find(
        (character) => character.french_name === event.target.value
      );

      if (selectedCharacter) {

        // Afficher les informations du personnage
        characterInfo.innerHTML = `
          <h3>${selectedCharacter.french_name}</h3>
          <p>Âge : ${selectedCharacter.age}</p>
          <p>Job : ${selectedCharacter.job}</p>
          <p>Bounty : ${selectedCharacter.bounty} Berry</p>
        `;
          // Afficher la div character-info
          characterInfo.style.display = "block";
      } else {
        // Si aucun personnage n'est sélectionné, effacer l'image et les informations
        characterInfo.innerHTML = "";
        characterInfo.style.display = "none";
      }
    });
  });


  /*------------------------------------------- API 2 ----------------------------------------------*/
//  // Connection à l'API //
//  fetch("https://api.jikan.moe/v4/manga/13/characters")
//  .then((response) => response.json())
//  .then((result) => console.log(result));

//  fetch("https://api.jikan.moe/v4/manga/13/characters")
//  .then((response) => response.json())
//  .then((data) => {
//    const result = data.data;
//    const select = document.querySelector("#character-select");
//    result.forEach((character) => {
//      const option = document.createElement("option");
//      option.value = character.mal_id;
//      option.text = character.character.name;
//      select.appendChild(option);
//    });
//  });