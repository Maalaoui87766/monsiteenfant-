function ajouterPoints(nombre){

let points = localStorage.getItem("points");

if(points == null){

points = 0;

}

points = Number(points) + nombre;


localStorage.setItem("points", points);


// تحديث العرض إذا كانت الصفحة تحتوي على النجوم

let affichage = document.getElementById("stars");

if(affichage){

affichage.innerHTML = points;

}

}



// تشغيل صوت MP3

function jouer(fichier){

let audio = new Audio(fichier);

audio.play().catch(function(e){

console.log("Impossible de lire le son :", e);

});

}



// نطق نص (نحتفظ بها إذا احتجناها لاحقاً)

function parler(texte){

if("speechSynthesis" in window){

let voix = new SpeechSynthesisUtterance(texte);

voix.lang="ar-SA";

voix.rate=0.8;

speechSynthesis.cancel();

speechSynthesis.speak(voix);

}

}
function jouerDeux(fichier1, fichier2){

let audio1 = new Audio(fichier1);

audio1.play().catch(function(e){

console.log("Impossible de lire le son :", e);

});

audio1.onended = function(){

let audio2 = new Audio(fichier2);

audio2.play().catch(function(e){

console.log("Impossible de lire le deuxième son :", e);

});

};

}
const clickSound = new Audio("sounds/click.mp3");

function soundClick(){

clickSound.currentTime = 0;

clickSound.play();

}