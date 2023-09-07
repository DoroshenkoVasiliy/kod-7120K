let nodeDiv = document.createElement("div");
nodeDiv.className = "first";
nodeDiv.innerHTML = "Объявление";

document.body.append(nodeDiv);

let nodeUl = document.querySelector("ul");
console.log(nodeUl);
nodeUl.before("Начало");
nodeUl.after("Конец");

let nodeLi = document.querySelector("li");
console.log(nodeLi.innerHTML);
console.log(nodeLi);
// nodeLi.innerHTML="First";
nodeLi.replaceWith(document.createElement("p"), "Вставка");

nodeDiv.classList.add("second");

nodeDiv.className="second"
console.log(nodeDiv.classList);
