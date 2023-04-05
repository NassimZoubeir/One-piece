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
fetch("https://api.jikan.moe/v4/manga/13/characters")
  .then((response) => response.json())
  .then((result) => console.log(result));  

// Récupérer l'élément select
const selectElement = document.getElementById('character-select');

// Faire l'appel API
fetch('https://api.jikan.moe/v4/manga/13/characters')
  .then(response => response.json())
  .then(data => {
    // Boucler sur chaque personnage et créer une option pour chaque
    data.data.forEach(character => {
      // Récupérer le nom et l'image du personnage
      const name = character.character.name;
      const imageUrl = character.character.images.jpg.image_url;

      // Créer une nouvelle option avec le nom du personnage
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;

      // Ajouter l'option au select
      selectElement.appendChild(option);

      // Ajouter un gestionnaire d'événement pour l'événement change du select
      selectElement.addEventListener('change', () => {
        // Récupérer la div d'affichage
        const displayDiv = document.getElementById('character-display');

        // Récupérer le nom du personnage sélectionné
        const selectedName = selectElement.value;

        // Trouver le personnage correspondant dans la liste des personnages
        const selectedCharacter = data.data.find(character => character.character.name === selectedName);

        // Récupérer l'image du personnage
        const selectedImageUrl = selectedCharacter.character.images.jpg.image_url;

        // Créer le contenu HTML à afficher
        const html = `
          <img src="${selectedImageUrl}" alt="${selectedName}">
          <h1>${selectedName}</h1>
      
        `;

        // Afficher le contenu HTML dans la div
        displayDiv.innerHTML = html;
      });
    });
  })
  .catch(error => console.error(error));












































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
  if (name.length < 3) {
    alert("Le champ Nom doit contenir au moins 3 caractères");
    return false;
  }
  // Vérification de la présence d'une date de naissance
  if (birthdate == "") {
    alert("Le champ Date de naissance est obligatoire");
    return false;
  }
  // Vérification de l'âge
  if (age < 13) {
    alert("Vous devez avoir au moins 13 ans pour vous inscrire");
    return false;
  }
  // Vérification de la présence d'un email
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
  // Si l'email est valide, on peut soumettre le formulaire
  alert("Félicitations vous êtes inscrit");
  return true;
}  