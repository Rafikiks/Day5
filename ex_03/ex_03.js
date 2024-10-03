const descriptionDiv = document.querySelector('#description');
const newParagraph = document.createElement("p");
    newParagraph.innerHTML = "Now featuring a headphone jack!";
    descriptionDiv.appendChild(newParagraph);



// Crée un nouveau paragraphe avec un texte donné et l'ajoute à l'élément ayant l'ID "description",
// en vérifiant d'abord si cet élément existe dans le DOM.
