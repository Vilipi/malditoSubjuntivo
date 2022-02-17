

const phraseBox = document.getElementById('question');
const imageBox = document.querySelectorAll('.image')[0];
const mill = document.getElementsByTagName('img')[1];
const quijoteInitial = document.getElementsByTagName('img')[0];
const countdown = document.querySelectorAll('#countdown')[0];
const resetBtn = document.getElementById('btnRestartBox');
let optionsList = document.getElementById('optionsList');

let quijoteImg;
let quijoteBox;

//About questions
let phraseSelected = 0;
let currentPhrase = {};
let questionsReplied = []; // So we do not repeat questions

console.log(mill);

//Quijote img movement

let positionQuijote;
let widePage;
let millWidth;
let marginLeftQuijote = 72;
let quijoteSize;
let cuantoAvanzar;
// console.log(`widePage: ${widePage}`)
// console.log(imageBox);
// console.log(positionQuijote,widePage)

const questions = [
    {
        phrase:"Si __________ habría aprobado el examen.",
        option1:"he estudiado",
        option2:"habria estudio",
        option3:"haya estudiado",
        correct:"hubiese estudiado"
    },
    {
        phrase:"Ojalá el Real Madrid __________ el campeonato actual.",
        option1:"gana",
        option2:"ganó",
        option3:"ha ganado",
        correct:"gane"    
    },
    {
        phrase:"Alfredo quiere que le __________ un lapiz para hacer el examen.",
        option1:"prestarían",
        option2:"prestaron",
        option3:"prestarán",
        correct:"presten"    
    },
    {
        phrase:"Mariana dice que es francesa, pero no esta claro que lo __________.",
        option1:"será",
        option2:"es",
        option3:"haya sido",
        correct:"sea"    
    },
    {
        phrase:"Beberé cerveza cuando __________ emborracharme.",
        option1:"hubiese querido",
        option2:"quiero",
        option3:"querría",
        correct:"quiera"    
    },
    {  
        phrase: "No quiero que María __________ a mi boda.", 
        option1: "viene",
        option2: "viniera o viniese",
        option3: "hubiera venido",
        correct: "venga"
    },
    {
        phrase: "Mi madre me ha pedido que la __________ al médico." ,
        option1: "acompañara o acompañase",
        option2: "hubiera o hubiese acompañado",
        option3: "haya acompañado",
        correct: "acompañe"
    },
    {
        phrase: "Mi madre me ha pedido que la __________ al médico.",
        option1: "acompañara o acompañase",
        option2: "hubiera o hubiese acompañado",
        option3: "haya acompañado",
        correct: "acompañe"
    },
    {
        phrase: "Su novio se deprimió porque sus padres le prohibieron que __________ con ella.", 
        option1: "salga",
        option2: "salía",
        option3: "haya salido",
        correct: "saliera"
    },
    {
        phrase: "Marta está triste porque sus padres le han prohibido que __________ con su novio.", 
        option1: "saliera",
        option2: "salía",
        option3: "haya salido",
        correct: "salga"
    },
    {
        phrase: "Los profesores me han aconsejado que __________ curso.",
        option1: "repito",
        option2: "repitiera o repitiese",
        option3: "hubiera repetido",
        correct: "repita"
    },
    {
        phrase: "Creo que __________ verdad lo que dice.",
        option1: "sea",
        option2: "fuera o fuese",
        option3: "haya sido",
        correct: "es"           
    },
    {
        phrase: "No creo que __________ verdad lo que dice.", 
        option1: "es",
        option2: "fuera o fuese",
        option3: "hubiera  sido",
        correct: "sea"
    },
    {
        phrase: "Siempre grita a todo el mundo. No me parece que su actitud __________ correcta.", 
        option1: "es",
        option2: "fuera o fuese",
        option3: "haya sido",
        correct: "sea"
    },
    {
        phrase: "Ayer le gritó a una compañera. No me pareció que su actitud __________ correcta.",
        option1: "fue",
        option2: "sea",
        option3: "haya sido",
        correct: "fuera o fuere"
    },
    {
        phrase: "Cuando __________ la carrera, haré un máster.",
        option1: "terminaré",
        option2: "terminara o terminase",
        option3: "hubiera terminado",
        correct: "termine"
    },
    {
        phrase: "En cuanto __________ de trabajar, te llamo.",
        option1: "saldré",
        option2: "salgo",
        option3: "saliera",
        correct: "salga"
    },
    {
        phrase: "No creo que Paco __________ esto aquí. Lo habrá dejado Eva.",
        option1: "ha dejado",
        option2: "dejó",
        option3: "hubiera dejado",
        correct: "haya dejado"         
    },
    {
        phrase: "Parece que __________ un fantasma.",
        option1: "veías",
        option2: "veas",
        option3: "vieras",
        correct: "hayas visto"
    },
    {
        phrase: "Parecía que __________ un fantasma.",
        option1: "veías",
        option2: "vieras",
        option3: "viste",
        correct: "hubieras visto"
    },
    {
        phrase: " Cuando __________ que la sopa está hirviendo, apaga el fuego, por favor.",
        option1: "ves",
        option2: "vieras",
        option3: "has visto",
        correct: "veas"      
    },
    {
        phrase: "En cuanto __________ algo de tiempo, te llamo para quedar.",
        option1: "tengo",
        option2: "tuviera",
        option3: "tendré",
        correct: "tenga"         
    },
    {
        phrase: "Quiero que mi hijo __________ en un colegio bilingüe.",
        option1: "estudia",
        option2: "estudiara o estudiase",
        option3: "hubiera estudiado",
        correct: "estudie"
    },
    {
        phrase: "Ella quería que su hijo __________ en un colegio bilingüe.",
        option1: "estudie",
        option2: "estudia",
        option3: "haya estudiado",
        correct: "estudiara o estudiase"
    },
    {
        phrase: " Hasta que no __________ tu habitación, no podrás salir.",
        option1: "recogieras",
        option2: "hubieras recogido",
        option3: "recoges",
        correct: "hayas recogido"
    },
    {
        phrase: "Hasta que no __________ a trabajar, no tendrás dinero.",
        option1: "empezaras",
        option2: "empiezas",
        option3: "has empezado",
        correct: "empieces"
    },
    {
        phrase: "Ella se arregla para que todos la __________ .",
        option1: "miran",
        option2: "miraran o mirasen",
        option3: "hayan mirado",
        correct: "miren",
    },
    {
        phrase: "El profesor hablaba despacio para que todos le __________ .",
        option1: "entienden",
        option2: "entiendan",
        option3: "hayan entendido",
        correct: "entendieran o entendiesen"         
    },
    {
        phrase: "La profesora habla despacio para que todos la __________ .",
        option1: "entienden",
        option2: "entendieran o entendiesen",
        option3: "hayan entendido",
        correct: "entiendan"
    },
    {
        phrase: "Te he comprado estos guantes para que no __________ frío.",
        option1: "pasas",
        option2: "pasaras o pasases",
        option3: "hayas pasado",
        correct: "pases"
    },
    {
        phrase: "El año pasado te compré unos guantes para que no __________ frío.",
        option1: "pasaste",
        option2: "hubieras pasado",
        option3: "pases",
        correct: "pasaras"
    },
    {
        phrase: " No permito que nadie me __________ así.",
        option1: "habla",
        option2: "hablase",
        option3: "haya hablado",
        correct: "hable"
    },
    {
        phrase: " No coge el teléfono. Puede que __________ trabajando.",
        option1: "está",
        option2: "haya estado",
        option3: "estuviera",
        correct: "esté" 
    },
    {
        phrase: "No coge el teléfono. Puede que no lo __________ .",
        option1: "oye",
        option2: "ha oído",
        option3: "hubiera oído",
        correct: "haya oído",
    },
    {
        phrase: " Anoche no me cogió el teléfono. Puede que no lo __________ .",
        option1: "oyó",
        option2: "hubiese oído",
        option3: "oiga",
        correct: "oyera"
    },
    {
        phrase: "¡Mira, me han regalado entradas para el cine! Ojalá la película __________ buena.", 
        option1: "es",
        option2: "haya sido",
        option3: "hubiera sido",
        correct: "sea"
    },
    {
        phrase: "Mi abuelo murió y no pude despedirme de él. Ojalá lo __________ con más frecuencia.",
        option1: "visitara",
        option2: "haya visitado",
        option3: "he visitado",
        correct: "hubiera visitado"
    },
    {
        phrase: "Mi nieto nunca viene a verme. Ojalá me __________ con más frecuencia.",
        option1: "hubiera visitado",
        option2: "visite",
        option3: "visita",
        correct: "visitara o visitase"
    },
    {
        phrase: "He perdido todo mi dinero. Ojalá nunca se lo __________ .",
        option1: "he prestado",
        option2: "haya prestado",
        option3: "prestara o prestase",
        correct: "hubiera prestado"
    },
    {
        phrase: "Adiós, amigo. Ojalá nunca te __________ de mí.",
        option1: "hayas olvidado",
        option2: "olvidaras u olvidases",
        option3: "olvidas",
        correct: "olvides"
    },
    {
        phrase: " Es terrible que __________ tanta contaminación en esta ciudad.",
        option1: "haya habido",
        option2: "hubiera",
        option3: "hay",
        correct: "haya"
    },
    {
        phrase: "Me parece fatal que le __________ tu número a todo el mundo.",
        option1: "das",
        option2: "des",
        option3: "hubieras dado",
        correct: "hayas dado"
    },
    {
        phrase: "No puedo creerlo. Me parece fatal que le __________ mi número a ese tipo sin consultarme primero.",
        option1: "des",
        option2: "has dado",
        option3: "hubieras dado",
        correct: "hayas dado"
    },
    {
        phrase: "Me encanta que __________ el piano mientras leo.",
        option1: "huebiera tocado",
        option2: "tocara o tocase",
        option3: "toca",
        correct: "toque"
    },
    {
        phrase: "Me encantaba que __________ el violín mientras leía.",
        option1: "toque",
        option2: "hubiera tocado",
        option3: "tocaba",
        correct: "tocara"
    },
    {
        phrase: "Me encantaría que __________ el piano mientras leo.",
        option1: "tocas",
        option2: "toques",
        option3: "hayas tocado",
        correct: "tocaras o tocases"
    },
    {
        phrase: "Yo he traído mi violín. ¡Qué pena que tú no __________ tu violonchelo!",
        option1: "traigas",
        option2: "trajeras",
        option3: "hubieras traído",
        correct: "hayas traído"
    },
    {
        phrase: "Ayer traje mi violín. ¡Qué pena que tú no __________ tu violonchelo!",
        option1: "traigas",
        option2: "hayas traído",
        option3: "trajiste",
        correct: "trajeras"
    },
    {
        phrase: "Si tú no __________, yo no me habría asustado.",
        option1: "gritaras o gritases",
        option2: "hayas gritado",
        option3: "grites",
        correct: "hubieras gritado"
    },
    {
        phrase: "Si __________ algo de dinero, me iría un finde a la playa.",
        option1: "tengo",
        option2: "tenga",
        option3: "haya tenido",
        correct: "tuviera o tuviese"
    },
    {
        phrase: "Quiero un novio que me __________ todo lo que quiero.",
        option1: "compra",
        option2: "comprase",
        option3: "haya comprado",
        correct: "compre"
    },
    {
        phrase: "Se quedó soltera porque quería un novio que le __________ todo.",
        option1: "hubiera pagado",
        option2: "pagaba",
        option3: "pague",
        correct: "pagara o pagase"
    },
    {
        phrase: " Necesito un móvil que __________ fotos de alta calidad.",
        option1: "hiciera o hiciese",
        option2: "hace",
        option3: "hubiera hecho",
        correct: "haga"
    },
    {
        phrase: "Me gasté mucho dinero en un móvil porque quería que __________ fotos de alta calidad.",
        option1: "haga",
        option2: "hacía",
        option3: "haya hecho",
        correct: "hiciera o hiciese"
    },
    {
        phrase: "¡Vicente, estás aquí! No sabía que __________ .",
        option1: "volvieras",
        option2: "hayas vuelto",
        option3: "has vuelto",
        correct: "hubieras vuelto"
    },
    {
        phrase: "Es muy tarde, estoy preocupada. Espero que no __________ ningún accidente.",
        option1: "ha tenido",
        option2: "hubiera tenido",
        option3: "tenga",
        correct: "haya tenido"
    },
    {
        phrase: "Aunque __________, a mí me parecerás igual de guapo.",
        option1: "engordas",
        option2: "hayas engordado",
        option3: "hubieras engordado",
        correct: "engordes"
    },
    {
        phrase: "Has engordado 20 kg. Pero aunque __________, a mí me sigues pareciendo igual de guapo.",
        option1: "engordes",
        option2: "hubieras engordado",
        option3: "engordaras o engordases",
        correct: "hayas engordado"
    },
    {
        phrase: "Yo sé que ella no copió mi examen. Y aunque lo __________, la perdonaría porque es mi amiga. Pero no lo hizo.",
        option1: "copió",
        option2: "copie",
        option3: "copiara o copiase",
        correct: "hubiera copiado"
    },
    {
        phrase: "¿Quién ha cogido mi ordenador? Espero que no __________ tú.",
        option1: "has sido",
        option2: "hubiera sido",
        option3: "seas",
        correct: "hayas sido"
    },
    {
        phrase: "Jorge me ha regalado unas flores. Preferiría que __________ tú.",
        option1: "seas",
        option2: "hayas sido",
        option3: "fueras o fueses",
        correct: "hubieras sido"        
    },
    {
        phrase: "Mientras __________ trabajo y salud, no hay de qué preocuparse.",
        option1: "tenemos",
        option2: "tuviéramos o tuviésemos",
        option3: "hayamos tenido",
        correct: "tengamos"
    },
    {
        phrase: "Quiero meter mi dinero en una cuenta que __________ intereses.",
        option1: "da",
        option2: "diera",
        option3: "haya dado",
        correct: "dé"
    },
    {
        phrase: "Nunca tuvo un padre que le __________ consejos.",
        option1: "dé",
        option2: "da",
        option3: "ha dado",
        correct: "diera o diese"
    },
    {
        phrase: "¿A ti qué te importa lo que yo __________ ?",
        option1: "hago",
        option2: "hiciera",
        option3: "hubiera hecho",
        correct: "haga"
    },
    {
        phrase: "¿A ti qué te importa lo que yo __________ esta mañana?",
        option1: "había hecho",
        option2: "hiciera o hiciese",
        option3: "haga",
        correct: "haya hecho"
    },
    {
        phrase: "¡Enhorabuena! Me parece genial que __________ adoptar un niño.",
        option1: "habéis decidido",
        option2: "hubierais decidido",
        option3: "decidáis",
        correct: "hayáis decidido"
    },
    {
        phrase: "¡No __________ eso!",
        option1: "tocas",
        option2: "tocaras",
        option3: "hayas tocado",
        correct: "toques"
    },
    {
        phrase: "Espero que __________ la lección para la próxima vez.",
        option1: "aprendes",
        option2: "aprenderás",
        option3: "aprendieras",
        correct: "aprendas"
    },









]

showQuestion();

showOptions();

// console.log(`Current Phrase: ${phraseSelected}`)

//console.log(`total questions:${Object.keys(questions).length}`) // total questions

function showQuestion(){

    quijoteImg = document.getElementById('quijote');
    quijoteBox = document.getElementById('quijoteBox');

    if (questionsReplied.length<30){ //Corrected replied

        min = Math.ceil(0); 
        max = Math.floor(68); 
        do{  
            randomPhrase = Math.floor(Math.random() * (max - min + 1) + min);
            phraseBox.innerHTML = `<h2>${questions[randomPhrase].phrase}</h2>`;
            phraseSelected = randomPhrase;
            currentPhrase = questions[randomPhrase];

        } while(questionsReplied.includes(phraseSelected) === true)
    } else{
        resetBtn.style["display"] = "none";
        confetti({spread: 180,particleCount: 150}); // canvas-confetti
        restart();
        return
    }

    console.log(currentPhrase)
}

function showOptions(){
    
    let DisorderAnswersQuestion = {};
    // create keys array
    var keys = Object.keys(currentPhrase);
    // randomize keys array
    keys.sort(function(){return Math.random()- 0.5;});
    // save in new array
    keys.forEach(function(k) {
    DisorderAnswersQuestion[k] = currentPhrase[k];
    })


    // For each property of the object of the phrase that is shown, we select the value of the property. 
    for (property in DisorderAnswersQuestion) {

        let answer = DisorderAnswersQuestion[property]

        if(property !== "phrase"){ // If the property of the object is the phrase we do not print it
            let liLista = document.createElement('li');
            liLista.innerHTML = `<button onclick="checkAnswer(this)">${answer}</button>`; // we create a button with the value(the answer) of the object properties
            optionsList.appendChild(liLista); // We add the li to the ul
        }
    }
}

function checkAnswer(optionClicked){
    let answer = optionClicked.textContent // We get the content of the answer clicked

    if(currentPhrase.correct !== answer){
        fail(optionClicked);
        optionsList.style["pointer-events"] = "none"; //Making buttons unclickeable
           
        setTimeout(function(){restart()},2000)
        return
    } else{
        questionsReplied.push(randomPhrase);
        currentPhrase = {};
        optionsList.innerHTML = "";
        showQuestion();
        showOptions();
        quijote(positionQuijote,cuantoAvanzar);
        setTimeout(function(){defaultValueQuijote()},1100);
        positionQuijote+=cuantoAvanzar;
        numberCounter();
    }
    // console.log(questionsReplied);
}

function fail(optionClicked){
    quijoteBoxInitial = document.getElementById('quijoteBox');
    quijoteBoxInitial.setAttribute("style", "animation: shake; animation-duration: 1s;");

    optionClicked.setAttribute('id','wrongButton');
    correctPhrase = currentPhrase.correct;
    buttons = document.getElementsByTagName('button');
    let correctButton;

    for(i = 0; i < buttons.length; i++){
        if(buttons[i].outerText == correctPhrase){
            correctButton = buttons[i];
            correctButton.setAttribute('id','correctButton');
            return
        }
    }
}

// Create button to play again
function restart(){ 
    phraseBox.innerHTML = '<button id="restartBtn" onclick="restartGame()">Jugar de nuevo</button>';
    optionsList.innerHTML = "";
    resetBtn.style["display"] = "none";
    
}

function quijote(positionQuijote,cuantoAvanzar){
    let newPosition = positionQuijote + cuantoAvanzar - marginLeftQuijote;
    console.log(`New position: ${newPosition}`);
    quijoteImg.style.transform = `translateX(${newPosition}px)`;
    quijoteBox.setAttribute("style", "animation: shake 1s;");
}

function defaultValueQuijote(){
    quijoteBoxInitial = document.getElementById('quijoteBox');
    quijoteBoxInitial.setAttribute("style", "animation: none;");
}
   
function numberCounter(){
    let number = questionsReplied.length;
    countdown.innerHTML=`<h1>${number}/30</h1>`;
}

function startTest(){
    countdown.style["display"] = "flex";
    document.querySelectorAll('.image')[0].style["display"] = "block"
    phraseBox.style["display"] = "flex";
    document.querySelectorAll('.options')[0].style["display"] = "flex";
    resetBtn.style["display"] = "flex"
    document.querySelectorAll('.start')[0].style["display"] = "none";
    document.querySelectorAll('.iconFooter')[0].style["display"] = "none";


    positionQuijote = quijoteInitial.x;
    widePage = imageBox.clientWidth;
    millWidth = mill.clientWidth;
    quijoteSize = quijoteInitial.clientWidth;
    cuantoAvanzar = (widePage-millWidth-quijoteSize)/30;

    console.log(`widePage: ${widePage}`)
    console.log(imageBox);
    console.log(positionQuijote,widePage)
    console.log(`Cuanto avanzar: ${cuantoAvanzar}`);
    
}

function restartGame(){
   
    let newPositionQuijote = quijoteImg.x;
    console.log(`New position:${newPositionQuijote}`);

    quijoteImg.style.transform = `translateX(${marginLeftQuijote-newPositionQuijote}px)`;
    optionsList.style["pointer-events"] = "auto";
    optionsList.innerHTML = "";
    questionsReplied = [];
    startTest();
    showQuestion();
    showOptions();
    numberCounter()
}







