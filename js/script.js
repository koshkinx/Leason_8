// 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
//     Дані виводяться в стилізований список,  можете підключити bootstrap чи написати свої стилі.
//  При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повино бути
//  данні які введено і час створення в форматі день, номер місяця, рік і час години хвилини.

function onClick() {
  let container = document.getElementById("container");
  let text1 = document.getElementById("text1");
  let divData = document.createElement("div");
  let div1 = document.createElement("div");
  div1.className = "div1";
  div1.innerHTML = text1.value;
  if (text1.value.length == 0) return;
  divData.innerHTML = new Date().toLocaleString();
  divData.style.marginLeft = "10px";
  let div = document.createElement("div");
  div.className = "divA";
  div.style.display = "flex";
  div.appendChild(div1);
  div.appendChild(divData);
  const allElements = document.getElementsByClassName("divA");

  if (allElements.length <= 4) {
    container.appendChild(div);
  } else {
    container.firstChild.remove();
    container.appendChild(div);
  }
}
let butya = document.getElementById("butya");
butya.style.color = "red";
butya.style.borderRadius = "10%";
butya.style.border = "0";
butya.style.padding = "5px 10px";
butya.style.backgroundColor = "black";

// 2) створити массив обєктів і на сонові нього вивести на сторінку лінки в яких знаходяться зображення
// і alt для зображення, стилізувати задовільно, кількість обєктів в массиві більше 3
let images = [
  {
    imgPath: "/img/черепашки.jpg",
    alt: "ninjia",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frezka.ag%2Ffranchises%2F1745-vse-multfilmy-pro-cherepashek-nindzya%2F&psig=AOvVaw0Q2eoxdx-r4zrDgx_OB4Dd&ust=1673589942395000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC57sKuwfwCFQAAAAAdAAAAABAE",
  },
  {
    imgPath: "/img/batman.jpg",
    alt: "batman",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstore.epicgames.com%2Fru%2Fp%2Fbatman-arkham-knight&psig=AOvVaw3BpePFrH35pKjWZDB1ydDW&ust=1673607136560000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKC2qMnuwfwCFQAAAAAdAAAAABAE",
  },
  {
    imgPath: "/img/superman.jpg",
    alt: "superman",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ign.com%2Farticles%2Fhow-supermans-secret-identity-became-one-of-dcs-most-convoluted-storylines&psig=AOvVaw0NQUJB_OrzvMbGc1sFv0wY&ust=1673607702496000&source=images&cd=vfe&ved=2ahUKEwj7xonW8MH8AhWSzosKHaGkBswQjRx6BAgAEAo",
  },
  {
    imgPath: "/img/captain.jpg",
    alt: "captain",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwikiofnerds.com%2Firon-man-and-captain-america-may-be-return-in-secret-wars%2F&psig=AOvVaw20j0s8WOI67G45PhPZ8DkU&ust=1673609075766000&source=images&cd=vfe&ved=2ahUKEwj9ovPk9cH8AhWPkf0HHc9DBGUQjRx6BAgAEAo",
  },
];

let linki = document.getElementById("linki");
let first = document.createElement("a");
let second = document.createElement("a");
let third = document.createElement("a");
let four = document.createElement("a");

let imgF = document.createElement("img");
let imgS = document.createElement("img");
let imgT = document.createElement("img");
let imgFr = document.createElement("img");

first.setAttribute("href", images[0].href);
imgF.setAttribute("alt", images[0].alt);
imgF.setAttribute("src", images[0].imgPath);

second.setAttribute("href", images[1].href);
imgS.setAttribute("alt", images[1].alt);
imgS.setAttribute("src", images[1].imgPath);

third.setAttribute("href", images[2].href);
imgT.setAttribute("alt", images[2].alt);
imgT.setAttribute("src", images[2].imgPath);

four.setAttribute("href", images[3].href);
imgFr.setAttribute("alt", images[3].alt);
imgFr.setAttribute("src", images[3].imgPath);

first.style.display = "contents";
second.style.display = "contents";
third.style.display = "contents";
four.style.display = "contents";
imgF.style.width = "20%";
imgS.style.width = "20%";
imgT.style.width = "20%";
imgFr.style.width = "20%";
linki.style.display = "inline-flex";
linki.style.justifyContent = "space-evenly";
linki.style.paddingTop = "50px";
first.appendChild(imgF);
linki.appendChild(first);
second.appendChild(imgS);
linki.appendChild(second);
third.appendChild(imgT);
linki.appendChild(third);
four.appendChild(imgFr);
linki.appendChild(four);

// 3) Створити таблицю за допомогою js з полями імя, місто,  курс і заповнити її даними також за допомогою js.
//   В таблиці повино бути мінімум 2 рядки

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let body = document.querySelector("body");
let fullTable = document.createElement("div");
table.appendChild(thead);
table.appendChild(tbody);
linki.after(fullTable);
fullTable.appendChild(table);
fullTable.style.display = "flex";
fullTable.style.justifyContent = "center";
fullTable.style.paddingTop = "50px";
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Ім'я";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Місто";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Курс";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

let row_2 = document.createElement("tr");
let row_2_data_1 = document.createElement("td");
row_2_data_1.innerHTML = "Степан Бандера";
let row_2_data_2 = document.createElement("td");
row_2_data_2.innerHTML = "Львів";
let row_2_data_3 = document.createElement("td");
row_2_data_3.innerHTML = "повний";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);

let row_3 = document.createElement("tr");
let row_3_data_1 = document.createElement("td");
row_3_data_1.innerHTML = "Богдан Хмельницький";
let row_3_data_2 = document.createElement("td");
row_3_data_2.innerHTML = "Дніпро";
let row_3_data_3 = document.createElement("td");
row_3_data_3.innerHTML = "короткий";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);
