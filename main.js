const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');

navbarBurger.addEventListener('click', () => {
  navbarBurger.classList.toggle('active');
  navbarMenu.classList.toggle('active');
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