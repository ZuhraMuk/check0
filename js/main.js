// DOM. Селекторы Native JS
//!1) Найдите все HTML-теги mark, которые находятся в div с классом .row и задайте им класс .selected .

// let mark = document.getElementsByTagName("mark");
// console.log(mark);
// for (let i = 0; i < mark.length; i++) {
//   mark[i].classList.add("selected");
// }

//!2) Обратитесь к элементу с классом .last и добавьте ему текст "Last but not least".

// Native JS События

// let lastInnerT = document.getElementsByClassName("last")[0];
// lastInnerT.innerText = "Last but not least";
// console.log(lastInnerT);

//!3) Создайте обработчик события, который при нажатии на div элемент выводит через alert() id либо class вашего элемента

// let showAlert = document.getElementsByTagName("div");
// for (let i = 0; i < showAlert.length; i++) {
//   showAlert[i].id == true
//     ? alert(`id:${showAlert[i].id}`)
//     : alert(`class:${showAlert[i].className}`);
// }

//!4) Создайте в HTML button. Навесьте на этот элемент обработчик события, который
// при нажатии на кнопку удаляет эту кнопку.

// let btn = document.createElement("button");
// btn.innerText = "Delete button";
// document.body.append(btn);
// btn.addEventListener("click", () => {
//   btn.remove();
// });

//5) Навесьте на событие движения мыши обработчик, который будет выводить в консоль
// координаты движения. Примечание: выводите их как x и y.
// Событие надо «повесить» на document

// document.addEventListener("mousemove", e => {
//   console.log(`clientX:${e.clientX}, clientY:${e.clientY}`);
// });

//6) Создайте кнопку и нумерованный список с 6 li элементами в HTML. Навесьте на кнопку обработчик события, который при нажатии проходится циклом по элементам списка и меняет их цвет на зеленый.
// let ol = document.createElement("ol");
// let li = document.createElement("li");
// li.innerText = "li";
// let li2 = document.createElement("li");
// li2.innerText = "li1";
// let li3 = document.createElement("li");
// li3.innerText = "li2";
// let li4 = document.createElement("li");
// li4.innerText = "li3";
// let li5 = document.createElement("li");
// li5.innerText = "li4";
// let li6 = document.createElement("li");
// li6.innerText = "li5";
// document.body.append(ol);
// ol.append(li, li2, li3, li4, li5, li6);

// let btn = document.createElement("button");
// btn.innerText = "click";
// document.body.append(btn);
// let olLi = ol.children;

// // console.log(olLi);
// for (let i = 0; i < ol.length; i++) {
//   btn.addEventListener("click", () => {
//     console.log(olLi);
//   });
// }
