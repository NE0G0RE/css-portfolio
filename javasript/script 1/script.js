//alert("hello world); 

//je suis une boite de dialogue;

var variable = "hello world";
let variables = "hello world";

// alert(variable);

const pi=3.14;
let variable2 = 'je m\'appel julien';
let variables2 = "je m'appel julien";



let text;
let number = 1;
let number2 = 2;

text = number + number2;
let text2 = number + "" + number2;
alert(text + " " + text2);

//voici de la base de cette fonction;

let userName = prompt("what's Ur name :");

alert(userName);

//on peut demander le prenom et afficher un message avec concatenation

let start = 'bonjour ', name1, end = ' !', result;
name1 = prompt('quel est ton prenom ?');
result = start + name1 + end;
alert(result);

// on peut aussi se servir de la fonction prompt() pour un calcul;

let first, second, results;
first = prompt('entrez le premier chiffre :');
second = prompt('entrez le second chiffre :');
results = parseInt(first) + parseInt(second); /* la fonction parseint()
transforme la chaîne de caractères en nombre */

alert(result);

//> operateur de comparaison
// 3.1 les 8 comparateurs
let numbercomp1 = 2;
let numbercomp2 = 2;
let numbercomp3 = 4;
let resultcomp;
resultcomp = numbercomp1 == numbercomp2;

// je verifie si cumbercomp1 est egale a numbercomp2

console.log("nc1 est egal a nc2 : " + resultcomp);
resultcomp = numbercomp1 == numbercomp3;
console.log ("nc1 est egale a nc3 : " + resultcomp);

resultcomp = numbercomp1 < numbercomp3;
console.log("nc1 est inferieur a nc3 : "+ resultcomp);

//3.2 operateurs logiques
// && qui signifie ET exp: valeur 1 et valeur 2;
// || qui signifie OU  exp: valeur 1 || valeur 2;
// ! qui signifie NON exp: v1 ! v2 // v1=2 et v2=2 // v1 ! v2 = false ;

let v1 = true;
let v2= 2;
console.log(v1 ==v2);
console.log(v1 !=v2);
console.log(v1)

if(v1){
    console.log("true");
}
if(!v1){
    console.log("fasle");
}

if(!v1){
    v1 = prompt('quel est ton prenom')
}else {
    console.log(v1);
}

//3.3 condition IF et ELSE
if(confirm('voulez vous executer le code')){
    console.log('le code est executé')
}

if(confirm('pour acceder a ce site tu dois etre une Fille, cliques sur ok si c est le cas')){
    alert("vous allez etre redirigé");
}else{
    alert("vous etes interdit")
}

let o = 42;
if(o == 42){
    console.log("42");
}else{
    console.log(o);
}

let etage = parseInt(prompt("entrez un etage"));
if (etage == 0){
    alert("vous vous trouvez deja au rez de chaussée.")
}else if(-2 <= etage && etage <=30){
    alert ("direction l etage n°" + etage + '!');
    alert("l etage n existe pas")
}

//4.1 la condition de switch

let tiroir = parseInt(prompt('choisissez le tirroir a ouvrir ( 1à4) :'));
switch (tiroir){
    case 1:
        alert('contient divers outils pour dessiner');
        break;
    case 2:
        alert('contient du materiel informatique');
        break;
    case 3:
        alert('Ah? ce tiroir est fermé a cle ! dommage');
        break;
    case 4:
        alert('contient des vetements');
        break;
    default:
        alert('info du jour: le meuble contient que 4 tiroirs');
        break;                
}


//4.2 les ternaires
// sert a simplifier certaines conditions

let startMessage = "Votre genre : ";
let endMessage ;
let adult = confirm("Etes vous une fille ?");
endMessage = adult ? 'Fille' : 'Garçon';
alert(startMessage + endMessage);

//if(adult){
//    endMessage = "fille";
//}else {
//    endMessage = "garçon";
//}

if(confirm("etes vous une fille")){
    endMessage = "fille"
}else{
    endMessage = "garçon";
}

//4.3 exercice conditions

let age = parseInt(prompt('quel est votre age?'))
if (age==0){
    alert("vous etes a peine né!")
}else if(1 <= age && age <=6){
    alert ('vous etes un jeune enfant');
}else if(7 <= age && age <=11){
    alert ("vous etes un enfant qui a atteint l'age de la raison");
}else if(12 <= age && age <=17){
    alert ('vous etes un adolescent');
}else if(18 <= age && age <=120){
    alert ('vous etes un adult');
}else{
    alert ('te fou pas de ma gueule tu ne pourrais pas me lire');
}

//5.1 incrementtation et decrementation
let numberplus = 0;
numberplus++;// cest ce que lon appel l incrementation
document.write(numberplus);
let numberMoins = 1;
numberMoins--;// cest ce que l on appele la decrementation
document.write(numberMoins);


//5.2 la boucle WHILE
let numWhile = 1;
while(numWhile < 10){
    numWhile++;
    console.log(numWhile);
}
document.write(numWhile);

let preWhiles = "";
let preWhile;

preWhile = prompt("entrez un prenom : ");

while(true){
    if(preWhile){
    preWhiles += preWhile + " ";
    }else{
        break;
    }
}
document.write(preWhiles);


//5.3 la boucle DO WHILE (tres peu utilisee tres peu utile)
let numdo=0;
do{
    alert("do");
    alert("dodo");
    numdo++;
}while(numdo > 0 && numdo < 5);

//5.4 la boucle  FOR 

for (let index = 0; index < 10; index++){
    document.write(index);
}

for (let prenoms = "", prenom; true;){
    prenom = prompt("entres un prenom :");
    if (preWhile){
        prenoms += prenom + " ";
    }else{
        break;
    }
}

for(let i = 0, prenoms = ""; true; i++){
    prenom =prompt("entrez un prenom : ");
    if(prenom){
        prenoms += prenom + " ";
    }else{
        alert("il y a "+ i + "prenoms : " + prenoms);
        break;
    }

}
