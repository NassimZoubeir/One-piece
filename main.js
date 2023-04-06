/* ---------------------------- MENU BURGER -----------------------------------------------*/
// Sélectionne l'élément HTML avec la classe "burger" et le stocke dans une variable appelée "burger"
const burger = document.querySelector(".burger");

// Sélectionne l'élément HTML avec la classe "nav-menu" et le stocke dans une variable appelée "navMenu"
const navMenu = document.querySelector(".nav-menu");

// Sélectionne l'élément HTML avec la classe "nav-link" et le stocke dans une variable appelée "navLink"
const navLink = document.querySelector(".nav-link");

// Ajoute une fonction de basculement ("toggle") à l'élément HTML "burger" lorsqu'il est cliqué
burger.onclick = function () {
  burger.classList.toggle("active");
}

// Ajoute une fonction à l'élément HTML "burger" lorsqu'il est cliqué
burger.addEventListener("click", () => {
  // Bascule la classe "active" sur l'élément HTML "navMenu"
  navMenu.classList.toggle("active");

  // Bascule la classe "mobile-menu" sur l'élément HTML "navLink"
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

/* ------------------------- AJOUT AU PANIER -----------------------------------------*/

// let cart = []; // tableau vide pour stocker les éléments du panier

// // sélectionnez tous les boutons "Ajouter au panier"
// let addToCartButtons = document.querySelectorAll('.add-to-cart');

// // ajouter un gestionnaire d'événements à chaque bouton "Ajouter au panier"
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     let item = {
//       id: button.parentElement.dataset.id,
//       name: button.parentElement.querySelector('img').alt,
//       price: button.parentElement.querySelector('.price').innerText
//     };
//     cart.push(item); // ajouter l'élément sélectionné au panier
//     console.log(cart); // afficher le panier dans la console pour vérifier
//   });
// });

// Récupération des boutons "Ajouter au panier"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Fonction qui sera exécutée lorsqu'un bouton "Ajouter au panier" est cliqué
function addToCartClicked(event) {
  // Empêcher le comportement par défaut du bouton
  event.preventDefault();
  // Récupération de l'élément parent du bouton pour obtenir les informations sur le produit
  const item = event.target.parentElement;
  // Récupération du nom et du prix du produit
  const itemName = item.querySelector('img').alt;
  const itemPrice = item.querySelector('.price').textContent;
  // Affichage de l'alerte indiquant que le produit a été ajouté au panier
  alert(`Vous avez ajouté "${itemName}" au panier pour un montant de ${itemPrice}.`);
}

// Ajout d'un écouteur d'événements pour chaque bouton "Ajouter au panier"
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});









































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