var inputs = document.querySelectorAll(".input"); //en sélectionne les input qui portent la class input (attention queryselectorall retourne un tableau)
var label = document.querySelectorAll(".inputText"); //en sélectionne les div(label) qui portent la class inputText (attention queryselectorall retourne un tableau)

inputs.forEach((input, index) => /* on parcours le tableau de inputs avec une boucle .forEach*/ {
    let inputText = label.item(index); // on parcours le deuxième tableau de inputText en même temps que le tableau inputs
    input.addEventListener('click', function() { //ajout de l'événement d'écoute au click sur les inputs
        inputText.classList.add('focus'); //ajout de la class focus qui ce trouve dans CSS au div.inputText
    });
    input.addEventListener('blur', function() {
        if (this.value == "") /**avant en vérifie si le input n'ai pas vide si non en laisse l'animation comme elle et en fait rien */ { inputText.classList.remove('focus'); /*dans le cas contraire en annule l'animation */ }
    });
});