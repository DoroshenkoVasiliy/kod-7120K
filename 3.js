let proverka = document.querySelector("a");
let dokazat = document.querySelector("input");

proverka.className = "button";
dokazat.className = "first";
// proverka.onclick = showTags;
// dokazat.onclick = showTags;

function showTags() {
  this.classList.remove("first");
  this.classList.toggle("second");
  console.log(this.classList);
}

dokazat.addEventListener("click", showTags);
proverka.addEventListener("click", showTags);
// if (proverka) {
//     proverka.removeEventListener("click", showTags);}

// dokazat.addEventListener("click", function (event) {
//   dokazat.classList.toggle("second");
//   console.log(dokazat.classList);
// });
dokazat.addEventListener("transitionend", showTags);
