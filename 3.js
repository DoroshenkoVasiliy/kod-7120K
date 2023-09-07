let proverka = document.querySelector("a");
let dokazat = document.querySelector("input");

// proverka.onclick = showTags;
// dokazat.onclick = showTags;

function showTags(event) {
  const tags = event.currentTarget.tagName;
  alert("tags: " + tags);
}

// dokazat.addEventListener("click", showTags);
// proverka.addEventListener("click", showTags);
// if (proverka) {
//     proverka.removeEventListener("click", showTags);}

dokazat.className = "first";
dokazat.addEventListener("click", function (event) {
    
    dokazat.classList.remove("first");
    dokazat.classList.toggle("second");
    console.log(dokazat.classList);
});
dokazat.addEventListener("transitioned", function (event) {
    
    dokazat.classList.remove("first");
    dokazat.classList.toggle("second");})