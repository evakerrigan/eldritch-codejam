import cardsDataBlue from "./data/mythicCards/blue/index.js";
import cardsDataBrown from "./data/mythicCards/brown/index.js";
import cardsDataGreen from "./data/mythicCards/green/index.js";
import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";

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
  console.log('%cMyProject%cline:26%cобнуление всего и новый перезапуск рассчетов', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px')

  console.log('0 nullStColor //обнуляем 9 переменных');

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

console.log('5 stageArrayNormal //заполняем массивы уровней конкретными картами');

  let stage1ArrayBrown = (JSON.parse(JSON.stringify(randomBrownCards))).splice(0, brown1);
  randomBrownCards.splice(0, brown1);
  let stage1ArrayBlue = (JSON.parse(JSON.stringify(randomBlueCards))).splice(0, blue1);
  randomBlueCards.splice(0, blue1);
  let stage1ArrayGreen = (JSON.parse(JSON.stringify(randomGreenCards))).splice(0, green1);
  randomGreenCards.splice(0, green1);

  stage1Array = stage1ArrayBrown.concat(stage1ArrayBlue, stage1ArrayGreen);  

  // console.log('%cMyProject%cline:24%cgreen1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(95, 92, 51);padding:3px;border-radius:2px', green1)
  // console.log('%cMyProject%cline:24%cbrown1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(95, 92, 51);padding:3px;border-radius:2px', brown1)
  // console.log('%cMyProject%cline:24%cblue1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(95, 92, 51);padding:3px;border-radius:2px', blue1)

  // console.log('%cMyProject%cline:24%crandomGreenCards.length', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(161, 23, 21);padding:3px;border-radius:2px', randomGreenCards.length)
  // console.log('%cMyProject%cline:24%crandomBrownCards.length', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(161, 23, 21);padding:3px;border-radius:2px', randomBrownCards.length)
  // console.log('%cMyProject%cline:24%crandomBlueCards.length', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(161, 23, 21);padding:3px;border-radius:2px', randomBlueCards.length)

  // console.log('%cMyProject%cline:21%crandomGreenCards-st1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomGreenCards)
  // console.log('%cMyProject%cline:21%crandomBrownCards-st1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBrownCards)
  // console.log('%cMyProject%cline:21%crandomBlueCards-st1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBlueCards)

  // console.log('%cMyProject%cline:24%cstage1ArrayGreen', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', stage1ArrayGreen)
  // console.log('%cMyProject%cline:24%cstage1ArrayBrown', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', stage1ArrayBrown)
  // console.log('%cMyProject%cline:24%cstage1ArrayBlue', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', stage1ArrayBlue)

  // console.log('%cMyProject%cline:33%cstage1Array', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(178, 190, 126);padding:3px;border-radius:2px', stage1Array)

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

  stageValuesAtArray();

}

//рассчитываем в полученном массиве для стейджей, сколько каких карт по цветам у нас
function stageValuesAtArray() {

  console.log('6 stageValuesAtArray //рассчитываем в полученном массиве для стейджей, сколько каких карт по цветам');

  nullStColor();

  stage1Array.forEach((el) => {
    if (el.color === 'green') {st1green1 = st1green1 + 1};
    if (el.color === 'brown') {st1brown1 = st1brown1 + 1};
    if (el.color === 'blue') {st1blue1 = st1blue1 + 1};
  });
  // console.log('%cMyProject%cline:88%cst1green1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', st1green1)
  // console.log('%cMyProject%cline:88%cst1brown1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', st1brown1)
  // console.log('%cMyProject%cline:88%cst1blue1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  // 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', st1blue1)

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

  console.log('1 randomCards //перемешиваем карты');
  console.log('%cMyProject%cline:162%ccardsDataGreen', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  'color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px', cardsDataGreen)
  console.log('%cMyProject%cline:162%ccardsDatBrown', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  'color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px', cardsDataBrown)
  console.log('%cMyProject%cline:162%ccardsDataBlue', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  'color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px', cardsDataBlue)

    let с =   JSON.parse(JSON.stringify(cardsDataGreen));

    shuffle(с); 

    randomGreenCards = JSON.parse(JSON.stringify(с));

    //randomGreenCards = c.sort(()=>Math.random()-0.5);
    console.log('%cMyProject%cline:21%crandomGreenCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomGreenCards)

    let a =   JSON.parse(JSON.stringify(cardsDataBrown));
    
    shuffle(a); 

    randomBrownCards = JSON.parse(JSON.stringify(a));

    //randomBrownCards = a.sort(()=>Math.random()-0.5);
    console.log('%cMyProject%cline:21%crandomBrownCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBrownCards)

    let b =   JSON.parse(JSON.stringify(cardsDataBlue));
        
    shuffle(b); 

    randomBlueCards = JSON.parse(JSON.stringify(b));

    //randomBlueCards = b.sort(()=>Math.random()-0.5);
    console.log('%cMyProject%cline:21%crandomBlueCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBlueCards)

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };


}

//получаем имя выбранного древнего
function getStageAndColor() {

  console.log('3 getStageAndColor //получаем имя выбранного древнего');

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

  console.log('%cMyProject%cline:37%cnameActiveAncients', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  'color:#fff;background:rgb(131, 175, 155);padding:3px;border-radius:2px', nameActiveAncients);
}

//получение переменных трекера в зависимости от имени древнего
function trackerValuesAncient() {

  console.log('4 trackerValuesAncient //получение переменных трекера в зависимости от имени древнего');

  blue1 = ancientsData.find(ancient => ancient.name === nameActiveAncients).firstStage.blueCards;
  blue2 = ancientsData.find(ancient => ancient.name === nameActiveAncients).secondStage.blueCards;
  blue3 = ancientsData.find(ancient => ancient.name === nameActiveAncients).thirdStage.blueCards;

  green1 = ancientsData.find(ancient => ancient.name === nameActiveAncients).firstStage.greenCards;
  green2 = ancientsData.find(ancient => ancient.name === nameActiveAncients).secondStage.greenCards;
  green3 = ancientsData.find(ancient => ancient.name === nameActiveAncients).thirdStage.greenCards;

  brown1 = ancientsData.find(ancient => ancient.name === nameActiveAncients).firstStage.brownCards;
  brown2 = ancientsData.find(ancient => ancient.name === nameActiveAncients).secondStage.brownCards;
  brown3 = ancientsData.find(ancient => ancient.name === nameActiveAncients).thirdStage.brownCards;

  //stageArrayNormal();

};

//выбираем уровень сложности
function difficulty() {

  console.log('2 difficulty //выбираем уровень сложности');

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

    console.log('%cMyProject%cline:94%cvalueActiveDifficulty', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', valueActiveDifficulty)

}

//очищаем массив карт для выбранного уровня сложности
function cleanCard() {
  console.log('2A cleanCard //очищаем массив карт для выбранного уровня сложности');

  if (valueActiveDifficulty === 'veryeasy') {

    console.log('2A cleanCard //выбран уровень veryeasy');

    // let greenAdd = Array.from(randomGreenCards);
    // greenAdd = greenAdd.filter((card) => card.difficulty === "normal");
    // greenAdd.splice(0, greenAdd.length - 1);
    // console.log('%cMyProject%cline:296%cgreenAdd', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    // 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    // 'color:#fff;background:rgb(254, 67, 101);padding:3px;border-radius:2px', greenAdd)

    //randomGreenCards = randomGreenCards.filter((card) => card.difficulty === "easy");
    randomGreenCards = randomGreenCards.filter((card) => card.difficulty !== "hard");
    //randomGreenCards = randomGreenCards.filter((card) => card.difficulty !== "normal");

    //randomGreenCards = randomGreenCards.concat(greenAdd);

  //  let randomBrownCards1 = randomBrownCards.filter((card) => card.difficulty !== "hard" && card.difficulty !== "normal");
  //  console.log('%cMyProject%cline:313%crandomBrownCards1', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBrownCards1)
  console.log('%cMyProject%cline:304%crandomGreenCards-розовый', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
  'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
  'color:#fff;background:rgb(254, 67, 101);padding:3px;border-radius:2px', randomGreenCards)


  randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "hard");
  randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "normal");

   //randomBrownCards =  JSON.parse(JSON.stringify(randomBrownCards1));
   console.log('%cMyProject%cline:316%crandomBrownCards-розовый', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(252, 157, 154);padding:3px;border-radius:2px', randomBrownCards)
    // randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "normal");


    randomBlueCards = randomBlueCards.filter((card) => card.difficulty !== "hard");
    randomBlueCards = randomBlueCards.filter((card) => card.difficulty !== "normal");


    console.log('%cMyProject%cline:304%crandomBlueCards-розовый', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(252, 157, 154);padding:3px;border-radius:2px', randomBlueCards)

  } else if (valueActiveDifficulty === 'easy') {

    console.log('2A cleanCard //выбран уровень easy');

    randomGreenCards = randomGreenCards.filter((card) => card.difficulty !== "hard");
    randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "hard");
    randomBlueCards = randomBlueCards.filter((card) => card.difficulty !== "hard");

    console.log('%cMyProject%cline:21%crandomGreenCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomGreenCards)
    console.log('%cMyProject%cline:21%crandomBrownCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBrownCards)
    console.log('%cMyProject%cline:21%crandomBlueCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBlueCards)

  }  else if (valueActiveDifficulty === 'normal') {

    console.log('2A cleanCard //выбран уровень normal');

    console.log('%cMyProject%cline:21%crandomGreenCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomGreenCards)
    console.log('%cMyProject%cline:21%crandomBrownCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBrownCards)
    console.log('%cMyProject%cline:21%crandomBlueCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBlueCards)

  } else if (valueActiveDifficulty === 'hard') {

    console.log('2A cleanCard //выбран уровень hard');

    randomGreenCards = randomGreenCards.filter((card) => card.difficulty !== "easy");
    randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "easy");
    randomBlueCards = randomBlueCards.filter((card) => card.difficulty !== "easy");

    console.log('%cMyProject%cline:21%crandomGreenCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomGreenCards)
    console.log('%cMyProject%cline:21%crandomBrownCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBrownCards)
    console.log('%cMyProject%cline:21%crandomBlueCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBlueCards)

  } else if (valueActiveDifficulty === 'veryhard') {

    console.log('2A cleanCard //выбран уровень veryhard');

    randomGreenCards = randomGreenCards.filter((card) => card.difficulty !== "easy");
    randomBrownCards = randomBrownCards.filter((card) => card.difficulty !== "easy");
    randomBlueCards = randomBlueCards.filter((card) => card.difficulty !== "easy");

    console.log('%cMyProject%cline:21%crandomGreenCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomGreenCards)
    console.log('%cMyProject%cline:21%crandomBrownCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBrownCards)
    console.log('%cMyProject%cline:21%crandomBlueCards', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(114, 83, 52);padding:3px;border-radius:2px', randomBlueCards)

  }

}



//вывод трекера на страницу визуальный
function viewTrackerAtHTML() {

  console.log('7 viewTrackerAtHTML //вывод трекера на страницу визуальный');  

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
    //randomCards();
    getStageAndColor();
    trackerValuesAncient();
    deck.style.backgroundImage = "url(./assets/mythicCardBackground.png)";
    lastCard.style.backgroundImage = "";
    //viewTrackerAtHTML();
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
  })  
}


//слушаем клик по колоде карт для отображения карты
deck.addEventListener('click', function() {
  console.log('кликнули по колоде');

  let url;

  if (stage1Array.length > 0) {

    url = stage1Array[stage1Array.length-1].cardFace;
    console.log('%cMyProject%cline:318%curl', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(131, 175, 155);padding:3px;border-radius:2px', url)

    lastCard.style.backgroundImage = `url(./assets/MythicCards/${url}.png)`;
    console.log('%cMyProject%cline:326%c`url(./assets/MythicCards/${url}.png)`', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(3, 101, 100);padding:3px;border-radius:2px', `"url(./assets/MythicCards/${url}.png)"`)

    stage1Array.pop();
    console.log('%cMyProject%cline:322%cstage1Array', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 
    'color:#fff;background:rgb(38, 157, 128);padding:3px;border-radius:2px', stage1Array)

    stageValuesAtArray();

  } 
  else if (stage2Array.length > 0) {
    url = stage2Array[stage2Array.length-1].cardFace;
    lastCard.style.backgroundImage = `url(./assets/MythicCards/${url}.png)`;
    stage2Array.pop();
    stageValuesAtArray();
  } else if (stage3Array.length > 1) {
    url = stage3Array[stage3Array.length-1].cardFace;
    lastCard.style.backgroundImage = `url(./assets/MythicCards/${url}.png)`;
    stage3Array.pop();
    stageValuesAtArray();
  } else if (stage3Array.length = 1) {
    url = stage3Array[stage3Array.length-1].cardFace;
    deck.style.backgroundImage = "";
    lastCard.style.backgroundImage = `url(./assets/MythicCards/${url}.png)`;
    stage3Array.pop();
    stageValuesAtArray();
  } else {
    lastCard.style.backgroundImage = "";
  }

});


