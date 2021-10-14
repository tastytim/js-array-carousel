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

  const primoTesto = `<div class="container-img ${activeClassOpacity}">
<div class="imgs-left">
<img src="${items[i]}" alt="img-${i}" />
</div>
<div class="text">
<h1>${title[i]}</h1>
<p>
${text[i]}
</p>
</div>
</div>`;

  const secondoTesto = `<div class="imgs-right">
<img class = "select-overlay ${activeClassOverlay} "src="${items[i]}" alt="img-right-0${i}" />
</div>`;

  containerLeftImgs.innerHTML += primoTesto;
  containerRightImgs.innerHTML += secondoTesto;
}

const arrowUp = document.querySelector(".fa-chevron-circle-up-custom");
const arrowDown = document.querySelector(".fa-chevron-circle-down-custom");

arrowUp.addEventListener("click", function () {
  const containerImg = document.querySelector(".opacityuno");
  const imgOverlay = document.querySelector(".overlay");

  contatore--;
  if (contatore < 0) {
    contatore = items.length - 1;
  }

  containerImg.classList.remove("opacityuno");
  imgOverlay.classList.remove("overlay");

  const allImg = document.querySelectorAll(".container-img");
  const allOverlay = document.querySelectorAll(".select-overlay");

  const newImg = allImg[contatore];
  const newOverlay = allOverlay[contatore];

  newImg.classList.add("opacityuno");
  newOverlay.classList.add("overlay");
});

arrowDown.addEventListener("click", function () {
  const containerImg = document.querySelector(".opacityuno");
  const imgOverlay = document.querySelector(".overlay");

  contatore++;
  if (contatore > items.length - 1) {
    contatore = 0;
  }

  containerImg.classList.remove("opacityuno");
  imgOverlay.classList.remove("overlay");

  const allImg = document.querySelectorAll(".container-img");
  const allOverlay = document.querySelectorAll(".select-overlay");

  const newImg = allImg[contatore];
  const newOverlay = allOverlay[contatore];

  newImg.classList.add("opacityuno");
  newOverlay.classList.add("overlay");
});
