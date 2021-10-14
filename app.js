const items = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

const text = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  "Lorem ipsum",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

let contatore = 0;

// Abbiamo selezionati colonna destra e sinistra
const containerLeftImgs = document.querySelector(".container-img-left");
const containerRightImgs = document.querySelector(".container-img-right");

for (let i = 0; i < items.length; i++) {


  let activeClassOpacity = "";
  let activeClassOverlay = "";


  if (i === 0) {
    activeClassOverlay = "overlay";
    activeClassOpacity = "opacityuno";
  }


const primoTesto = 
`<div class="imgs-left ${activeClassOpacity}">
<img src="${items[i]}" alt="img-0${i}" />
</div>
<div class="text ${activeClassOpacity}">
<h1>${title[i]}</h1>
<p>
  ${text[i]}
</p>
</div>`;

const secondoTesto = `<div class="imgs-right">
<img src="${items[i]}" alt="img-right-0${i}" />
<div class="${activeClassOverlay}"></div>
</div><i class="fas fa-chevron-circle-up fa-chevron-circle-up-custom"></i>
<i class="fas fa-chevron-circle-up fa-chevron-circle-down-custom"></i>`;

containerLeftImgs.innerHTML += primoTesto;
containerRightImgs.innerHTML += secondoTesto;
}



const buttonUp = document.querySelector("fa-chevron-circle-up-custom");
const buttonUp = document.querySelector("fa-chevron-circle-down-custom");

buttonUp.addEventListener("click", function(){
   
});