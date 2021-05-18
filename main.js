// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;

let exo1Div = document.getElementById('content').children
let elements = Array.from(exo1Div);
elements.forEach(element => {
    element.addEventListener('click', display);
    element.addEventListener('dblclick', displayBig)
});

function displayBig() {
    console.log(this.toUpperCase());
}

function display() {
    console.log(this.innerHTML);
}


function aleatoire() {
    let valueRandom = Math.round(Math.random()*100);
    if (valueRandom < 25) {
        elements.forEach(element => {
            element.setAttribute('style', 'border: 1px solid gold;')
        })
    } else if (valueRandom > 25 && valueRandom <= 50) {
        elements.forEach(element => {
            element.setAttribute('style', 'background-color: blue;')
        })
    } else if (valueRandom > 50 && valueRandom <= 75) {
        elements.forEach(element => {
            element.setAttribute('style', 'background-color: red;')
        })
    } else if (valueRandom > 75 && valueRandom <= 100) {
        elements.forEach(element => {
            element.setAttribute('style', 'border: 5px dotted gold;')
        })
        
    }
}


let bouton = document.getElementsByTagName('input')[0];
bouton.addEventListener('click', aleatoire)