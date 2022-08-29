import cardsDataBlue from "./data/mythicCards/blue/index.js";
import cardsDataBrown from "./data/mythicCards/brown/index.js";
import cardsDataGreen from "./data/mythicCards/green/index.js";
import ancientsData from "./data/ancients.js";

let randomBrownCards;
let randomBlueCards;
let randomGreenCards;

let nameActiveAncients;

let blue1, blue2, blue3, brown1, brown2, brown3, green1, green2, green3;
let st1blue1, st2blue2, st3blue3, st1brown1, st2brown2, st3brown3, st1green1, st2green2, st3green3;

let valueActiveDifficulty;

let stage1Array = [];
let stage2Array = [];
let stage3Array = [];

let deck = document.querySelector(".deck");
let lastCard = document.querySelector(".last-card");
let currentState = document.querySelector(".current-state");

function nullStColor() {
  st1green1 = 0;
  st1brown1 = 0;
  st1blue1 = 0;
  st2green2 = 0;
  st2brown2 = 0;
  st2blue2 = 0;
  st3green3 = 0;
  st3brown3 = 0;
  st3blue3 = 0;
}


//заполняем массивы уровней конкретными картами
function stageArrayNormal() {

  let stage1ArrayBrown = (JSON.parse(JSON.stringify(randomBrownCards))).splice(0, brown1);
  randomBrownCards.splice(0, brown1);
  let stage1ArrayBlue = (JSON.parse(JSON.stringify(randomBlueCards))).splice(0, blue1);
  randomBlueCards.splice(0, blue1);
  let stage1ArrayGreen = (JSON.parse(JSON.stringify(randomGreenCards))).splice(0, green1);
  randomGreenCards.splice(0, green1);

  stage1Array = stage1ArrayBrown.concat(stage1ArrayBlue, stage1ArrayGreen);  

  let stage2ArrayBrown = (JSON.parse(JSON.stringify(randomBrownCards))).splice(0, brown2);
  randomBrownCards.splice(0, brown2);
  let stage2ArrayBlue = (JSON.parse(JSON.stringify(randomBlueCards))).splice(0, blue2);
  randomBlueCards.splice(0, blue2);
  let stage2ArrayGreen = (JSON.parse(JSON.stringify(randomGreenCards))).splice(0, green2);
  randomGreenCards.splice(0, green2);

  stage2Array = stage2ArrayBrown.concat(stage2ArrayBlue, stage2ArrayGreen); 

  let stage3ArrayBrown = (JSON.parse(JSON.stringify(randomBrownCards))).splice(0, brown3);
  randomBrownCards.splice(0, brown3);
  let stage3ArrayBlue = (JSON.parse(JSON.stringify(randomBlueCards))).splice(0, blue3);
  randomBlueCards.splice(0, blue3);
  let stage3ArrayGreen = (JSON.parse(JSON.stringify(randomGreenCards))).splice(0, green3);
  randomGreenCards.splice(0, green3);

  stage3Array = stage3ArrayBrown.concat(stage3ArrayBlue, stage3ArrayGreen); 

  shuffle(stage1Array);
  shuffle(stage2Array);
  shuffle(stage3Array);

  stageValuesAtArray();

}

//рассчитываем в полученном массиве для стейджей, сколько каких карт по цветам у нас
function stageValuesAtArray() {

  nullStColor();

  stage1Array.forEach((el) => {
    if (el.color === 'green') {st1green1 = st1green1 + 1};
    if (el.color === 'brown') {st1brown1 = st1brown1 + 1};
    if (el.color === 'blue') {st1blue1 = st1blue1 + 1};
  });

  stage2Array.forEach((el) => {
    if (el.color === 'green') {st2green2 = st2green2 + 1};
    if (el.color === 'brown') {st2brown2 = st2brown2 + 1};
    if (el.color === 'blue') {st2blue2 = st2blue2 + 1};
  });

  stage3Array.forEach((el) => {
    if (el.color === 'green') {st3green3 = st3green3 + 1};
    if (el.color === 'brown') {st3brown3 = st3brown3 + 1};
    if (el.color === 'blue') {st3blue3 = st3blue3 + 1};
  });

  viewTrackerAtHTML();

}


//перемешиваем карты
function randomCards() {

    let с =   JSON.parse(JSON.stringify(cardsDataGreen));

    shuffle(с); 

    randomGreenCards = JSON.parse(JSON.stringify(с));

    let a =   JSON.parse(JSON.stringify(cardsDataBrown));
    
    shuffle(a); 

    randomBrownCards = JSON.parse(JSON.stringify(a));

    let b =   JSON.parse(JSON.stringify(cardsDataBlue));
        
    shuffle(b); 

    randomBlueCards = JSON.parse(JSON.stringify(b));

}


//функция смешивания перетусовывания карт
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

//получаем имя выбранного древнего
function getStageAndColor() {

  let activeAncients = document.querySelector(".ancient-card.active");

  if(activeAncients.classList.contains('azathoth')) {
    nameActiveAncients = 'azathoth';
  } else if(activeAncients.classList.contains('cthulthu')) {
    nameActiveAncients = 'cthulhu';
  } else if(activeAncients.classList.contains('iogSothoth')) {
    nameActiveAncients = 'iogSothoth';
  } else if(activeAncients.classList.contains('shubNiggurath')) {
    nameActiveAncients = 'shubNiggurath';
  }

}

//получение переменных трекера в зависимости от имени древнего
function trackerValuesAncient() {

  blue1 = ancientsData.find(ancient => ancient.name === nameActiveAncients).firstStage.blueCards;
  blue2 = ancientsData.find(ancient => ancient.name === nameActiveAncients).secondStage.blueCards;
  blue3 = ancientsData.find(ancient => ancient.name === nameActiveAncients).thirdStage.blueCards;

  green1 = ancientsData.find(ancient => ancient.name === nameActiveAncients).firstStage.greenCards;
  green2 = ancientsData.find(ancient => ancient.name === nameActiveAncients).secondStage.greenCards;
  green3 = ancientsData.find(ancient => ancient.name === nameActiveAncients).thirdStage.greenCards;

  brown1 = ancientsData.find(ancient => ancient.name === nameActiveAncients).firstStage.brownCards;
  brown2 = ancientsData.find(ancient => ancient.name === nameActiveAncients).secondStage.brownCards;
  brown3 = ancientsData.find(ancient => ancient.name === nameActiveAncients).thirdStage.brownCards;

};

//выбираем уровень сложности
function difficulty() {

    let activeDifficulty = document.querySelector(".difficulty.active");

    if(activeDifficulty.classList.contains('veryeasy')) {
      valueActiveDifficulty = 'veryeasy';
    } else if(activeDifficulty.classList.contains('easy')) {
      valueActiveDifficulty = 'easy';
    } else if(activeDifficulty.classList.contains('normal')) {
      valueActiveDifficulty = 'normal';
    } else if(activeDifficulty.classList.contains('hard')) {
      valueActiveDifficulty = 'hard';
    } else if(activeDifficulty.classList.contains('veryhard')) {
      valueActiveDifficulty = 'veryhard';      
    }
}

//очищаем массив карт для выбранного уровня сложности
function cleanCard() {

  if (valueActiveDifficulty === 'veryeasy') {

    let greenAdd = Array.from(randomGreenCards);
    greenAdd = greenAdd.filter((card) => card.difficulty === "normal");
    greenAdd.splice(0, greenAdd.length - 1);    

    randomGreenCards = randomGreenCards.filter((card) => card.difficulty === "easy");

    shuffle(randomGreenCards);

  let brownAdd = Array.from(randomBrownCards);
  brownAdd = brownAdd.filter((card) => card.difficulty === "normal");
  brownAdd.splice(0, brownAdd.length - 4);

  randomBrownCards = randomBrownCards.flat(1);
  // randomBrownCards = randomBrownCards.filter((card) => card.difficulty === "easy");
  randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "hard");
  randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "normal");
  randomBrownCards = randomBrownCards.flat(1);

  randomBrownCards = randomBrownCards.concat(brownAdd);

  shuffle(randomBrownCards);

    randomBlueCards = randomBlueCards.flat(1);
    randomBlueCards = randomBlueCards.filter((card) => card.difficulty !== "hard");
    randomBlueCards = randomBlueCards.filter((card) => card.difficulty !== "normal");
    randomBlueCards = randomBlueCards.flat(1);

  } else if (valueActiveDifficulty === 'easy') {

    randomGreenCards = randomGreenCards.filter((card) => card.difficulty !== "hard");
    randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "hard");
    randomBlueCards = randomBlueCards.filter((card) => card.difficulty !== "hard");

  }  else if (valueActiveDifficulty === 'normal') {

  } else if (valueActiveDifficulty === 'hard') {

    randomGreenCards = randomGreenCards.filter((card) => card.difficulty !== "easy");
    randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "easy");
    randomBlueCards = randomBlueCards.filter((card) => card.difficulty !== "easy");

  } else if (valueActiveDifficulty === 'veryhard') {

    //--------------------------------------------

    let greenAdd = Array.from(randomGreenCards);
    greenAdd = greenAdd.filter((card) => card.difficulty === "normal");
    greenAdd.splice(0, greenAdd.length - 1);

    randomGreenCards = randomGreenCards.filter((card) => card.difficulty === "hard");

    randomGreenCards = randomGreenCards.concat(greenAdd);

    shuffle(randomGreenCards);

    //--------------------------------------------

    let brownAdd = Array.from(randomBrownCards);
    brownAdd = brownAdd.filter((card) => card.difficulty === "normal");
    brownAdd.splice(0, brownAdd.length - 4);

    randomBrownCards = randomBrownCards.filter((card) => card.difficulty === "hard");

    randomBrownCards = randomBrownCards.concat(brownAdd);

    shuffle(randomBrownCards);

     //--------------------------------------------

    randomBlueCards = randomBlueCards.filter((card) => card.difficulty === "hard");

  }

}

//вывод трекера на страницу визуальный
function viewTrackerAtHTML() {

  currentState.innerHTML = "";

  currentState.innerHTML = `

<div class="stage-container">
  <span class="stage-text ">Первая стадия</span>
  <div class="dots-container">
    <div class="dot green">${st1green1}</div>
    <div class="dot brown">${st1brown1}</div>
    <div class="dot blue">${st1blue1}</div>
  </div>
</div>
<div class="stage-container">
  <span class="stage-text ">Вторая стадия</span>
  <div class="dots-container">
    <div class="dot green">${st2green2}</div>
    <div class="dot brown">${st2brown2}</div>
    <div class="dot blue">${st2blue2}</div>
  </div>
</div>
<div class="stage-container">
  <span class="stage-text ">Третья стадия</span>
  <div class="dots-container">
    <div class="dot green">${st3green3}</div>
    <div class="dot brown">${st3brown3}</div>
    <div class="dot blue">${st3blue3}</div>
  </div>
</div>
</div>
  
  `;

};

//слушаем клик на кнопке "замешать колоду"
let shuffleCardButton = document.querySelector(".shuffle-button");

shuffleCardButton.addEventListener('click', function() {

  if (typeof nameActiveAncients !== 'undefined' && typeof valueActiveDifficulty !== 'undefined') {       
    shuffleCard();
  } else if (typeof nameActiveAncients !== 'undefined' && typeof valueActiveDifficulty === 'undefined') {
    alert('вы не выбрали уровень сложности');
  } else if (typeof nameActiveAncients === 'undefined' && typeof valueActiveDifficulty !== 'undefined') {
    alert('вы не выбрали древнего');
  }
 
});

//кнопка для запуска замешивания карт, запускающая действия после выбора параметров
function shuffleCard() {
  randomCards(); //перемешиваем карты
  cleanCard();
  stageArrayNormal(); //заполняем массивы уровней конкретными картами
  stageValuesAtArray(); //рассчитываем в полученном массиве для стейджей, сколько каких карт по цветам
  deck.style.backgroundImage = "url(./assets/mythicCardBackground.png)";
  lastCard.style.backgroundImage = "";

}

//слушаем клик по карте древнего
let ancientCard = document.querySelectorAll(".ancient-card");
let items = ancientCard;

for (let item of items) {
  item.addEventListener('click', function() {
    nullStColor();
    for (let i=0; i<items.length; i++) {
      items[i].classList.remove('active');
    }  
    item.classList.add('active');
    getStageAndColor();
    trackerValuesAncient();
    deck.style.backgroundImage = "";
    lastCard.style.backgroundImage = "";
    currentState.innerHTML = "";    
  })  
}

//слушаем клик по уровню сложности
let difficultyItem = document.querySelectorAll(".difficulty");
let numbers = difficultyItem;

for (let number of numbers) {
  number.addEventListener('click', function() {
    for (let i=0; i<numbers.length; i++) {
      numbers[i].classList.remove('active');
    }  
    number.classList.add('active');
    difficulty();
    nullStColor();
    currentState.innerHTML = "";
    deck.style.backgroundImage = "";
    lastCard.style.backgroundImage = "";
  })  
}

//слушаем клик по колоде карт для отображения карты
deck.addEventListener('click', function() {

  let url;

  if (stage3Array.length > 0) {    

        if (stage1Array.length > 0) {

          console.log('id:', `${stage1Array[stage1Array.length-1].id},`, ' цвет карты:', `${stage1Array[stage1Array.length-1].color},`, ' сложность:', `${stage1Array[stage1Array.length-1].difficulty}`);
          url = stage1Array[stage1Array.length-1].cardFace;
          lastCard.style.backgroundImage = `url(./assets/MythicCards/${url}.png)`;   
          stage1Array.pop(); 
          stageValuesAtArray();

        } else if (stage2Array.length > 0) {

          console.log('id:', `${stage2Array[stage2Array.length-1].id},`, 'цвет карты:', `${stage2Array[stage2Array.length-1].color},`, ' сложность:', `${stage2Array[stage2Array.length-1].difficulty}`);
          url = stage2Array[stage2Array.length-1].cardFace;
          lastCard.style.backgroundImage = `url(./assets/MythicCards/${url}.png)`;
          stage2Array.pop();
          stageValuesAtArray();

        } else if (stage3Array.length > 1) {

          console.log('id:', `${stage3Array[stage3Array.length-1].id},`, 'цвет карты:', `${stage3Array[stage3Array.length-1].color},`, ' сложность:', `${stage3Array[stage3Array.length-1].difficulty}`);
          url = stage3Array[stage3Array.length-1].cardFace;
          lastCard.style.backgroundImage = `url(./assets/MythicCards/${url}.png)`;
          stage3Array.pop();
          stageValuesAtArray();

        } else if (stage3Array.length = 1) {

          console.log('id:', `${stage3Array[stage3Array.length-1].id},`, 'цвет карты:', `${stage3Array[stage3Array.length-1].color},`, ' сложность:', `${stage3Array[stage3Array.length-1].difficulty}`);
          url = stage3Array[stage3Array.length-1].cardFace;
          deck.style.backgroundImage = "";
          lastCard.style.backgroundImage = `url(./assets/MythicCards/${url}.png)`;
          stage3Array.pop();
          stageValuesAtArray();

        } else {
          lastCard.style.backgroundImage = "";
        }
    
      
}

});
