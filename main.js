/* ---------------------------- MENU BURGER -----------------------------------------------*/
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
/* ---------------------------- API -----------------------------------------------------*/
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
          <img src="https://api.jikan.moe/v4/manga/13/characters/${selectedCharacter.api_id}/image" alt="${selectedCharacter.french_name}">
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
 // Connection à l'API //
//  fetch("https://api.jikan.moe/v4/manga/13/characters")
//  .then((response) => response.json())
//  .then((result) => console.log(result));

/*------------------------------------------VALIDATION FORMULAIRE --------------------------------*/

function validateForm() {
  // Récupération de la valeur du champ Nom
  var name = document.getElementById("name").value;

  // Récupération de la date de naissance
  var birthdate = document.getElementById("birthdate").value;

  // Calcul de l'âge en années
  var age = new Date().getFullYear() - new Date(birthdate).getFullYear();

 // Récupération de l'email 
  var email = document.getElementById("email").value;
  
  if (name == "") {
      alert("Le champ Nom est obligatoire");
      return false;
  }
  // Vérification de la longueur du champ Nom
    if  (name.length < 3) {
      alert("Le champ Nom doit contenir au moins 3 caractères");
      return false;
    }
   
    if (birthdate == "") {
      alert("Le champ Date de naissance est obligatoire");
      return false;
  }
    // Vérification de l'âge
    if (age < 13) {
      alert("Vous devez avoir au moins 13 ans pour vous inscrire");
      return false;
    }
    
    if (email == "") {
        alert("Le champ Email est obligatoire");
        return false;
      }

    // Vérification de l'email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert("Veuillez entrer un email valide");
    return false;
}  
      alert("Félicitations vous êtes inscrit");
      // Si l'email est valide, on peut soumettre le formulaire
      return true;
}  