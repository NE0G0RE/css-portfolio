// 6 les fonctions
//fonction myfonction(arguments){le code de la fonction}

function byTwo() {
    let result = parseInt(prompt("un nb a multiplier par 2 : "));
    document.write(result * 2);
}
//appeler la fonction

byTwo();

function appelAlert() {
    alert("tss tss");
}
appelAlert();

function appelAlertePerso(retou_fonction) {
    alert(retou_fonction);
}

appelAlertePerso("appel perso");

function byX(multiple) {
    let result = parseInt(prompt("un nb a multiplier par " + multiple));
    document.write(result * 2);
    document.write(result * multiple);
}
byX(parseInt(prompt("choisi un multiple")));


//6.1 les variables locales et globales

let message = "ici c'est la variable global";
function showMess() {
    let message = "ici c'est une variable locale !";
    alert(message);
}
alert(message);
showMess();


//6.2 les arguments

function myFonction(arg) {
    alert("Votre argument est " + arg);
}
myFonction("ARG");
myFonction(prompt("que voulez vous afficher"));

function plusieursARG(premier, second) {
    document.write(premier);
    document.write(second);
}

plusieursARG("test", "test")


//6.3 les valeurs de retour

function sayHello() {
    return "Bonjour !";
}
document.write(sayHello());

function calcul() {
    return 2+2;
}
retour = calcul();
document.write(retour);


//6.4 les fonctions anonymes

let func = function(){return 2+2};
let funcBis = ()=>{return 2+2};
document.write(func());

//7.1 les objects

let maVariable = "ceci est une variable";
document.write(maVariable);
document.write(maVariable.length);
maVariable.toLowerCase();
maVariable.toUpperCase();

//7.2 les tableaux

let tab=['Rafael', 'Merwan','LemiZo','Jerome','Guillaume'];
document.write(tab[2]);
tab[2]= "bogoss";
document.write(tab[2]);

//7.3 operations sur tableau
  //push()ajoute a la suite
tab.push('harrnnox');
tab.push('Béa', 'cop');

   //unshift()ajoute devant
tab.unshift('G4');

  //shift () va supprimer la premiere entree du tableau
tab.shift();
   //pop () va supprimer la derniere entrée du tableau
tab.pop();
//========

   //split()
let CousinsMachins = 'Jerome Guillaume Paul';
let CousinsTableau = CousinsMachins.split();
document.write(CousinsTableau);
  //join()
CousinsMachins = CousinsTableau.join("-");


//7.4 parcourir un tableau
   //FOR
let tableau=['Rafael', 'Merwan','LemiZo','Jerome','Guillaume'];
for (let i = 0; i< tableau.length; i++){
    document.console.log(tableau[i]);
}

//8.1