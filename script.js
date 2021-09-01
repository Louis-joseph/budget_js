// Je declare mes variables

let salaire = document.getElementById('salaire');
let transaction = document.getElementById('transactions');
var total = salaire + transaction;
let resultat = document.getElementById('resultat');
let addSalaire = document.getElementById('addSalaire');
let addDepenses = document.getElementById('addDepenses');
// je crée une fonction au click, j'execute la function 
addSalaire.addEventListener('click', function () {
    addSalaireTransaction();
});
// je stoque dans ma variable x les input
function addSalaireTransaction() {
    var x = document.createElement('input');
    x.addEventListener('onfocus', function () {
        result();
    })
    x.addEventListener('keyup', function () {
        result();
    })
    x.addEventListener('keypress', function () {
        result();
    })
    // je dis que ça attend un nombre
    x.setAttribute('type', 'number');
    // on crée un élement enfant 
    salaire.appendChild(x);
    // on stoque le button dans la variable y 'x'
    var y = document.createElement('button');
    y.innerHTML = 'x';
    // au clique on remove l'input
    y.addEventListener('click', function () {
        x.remove();
        this.remove();
    });
    salaire.appendChild(y);
}
// au click on execute la function 
addDepenses.addEventListener('click', function () {
    addDepensesTransaction();
});
// on affiche l'input 
function addDepensesTransaction() {
    var x = document.createElement('input');
    x.setAttribute('type', 'number');
    transaction.appendChild(x);
    // on supprime l'input
    var y = document.createElement('button');
    y.innerHTML = 'x';
    y.addEventListener('click', function () {
        x.remove();
        this.remove();
    });
    transaction.appendChild(y);
}
// on affiche les resultats (pas fini)
function result() {
    var x_dep = salaire.getElementsByTagName('input');
    var total_dep = 0;
    // x_dep.for(element => {
    //     total_dep += element.value;
    //     // element.innerHTML = x_dep.value;
    // });
    for (let i = 0; i < x_dep.length; i++) {
        const element = x_dep[i].value;
        total_dep += element;
    }
    var x_rev = transaction.getElementsByTagName('input');

    var total_rev = 0;
    // x_rev.forEach(element => {
    //     total_rev += element.value;
    //     // element.innerHTML = x_dep.value;
    // });
    for (let i = 0; i < x_rev.length; i++) {
        const element = x_rev[i].value;
        total_rev += element;
    }

    resultat.innerHTML = total_rev - total_dep;
}
