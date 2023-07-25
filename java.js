let minus31 = document.getElementById("-31");
let first = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eit = document.getElementById("8");
let nine = document.getElementById("9");
let ten = document.getElementById("10");
let first1 = document.getElementById("11");
let first2 = document.getElementById("12");
let first3 = document.getElementById("13");
let firtst4 = document.getElementById("14");
let firtst5 = document.getElementById("15");
let firts6 = document.getElementById("16");
let firtst7 = document.getElementById("17");
let firtst8 = document.getElementById("18");
let firtst9 = document.getElementById("19");
let two0 = document.getElementById("20");
let two1 = document.getElementById("21");
let two2 = document.getElementById("22");
let two3 = document.getElementById("23");
let two4 = document.getElementById("24");
let two5 = document.getElementById("25");
let two6 = document.getElementById("26");
let two7 = document.getElementById("27");
let two8 = document.getElementById("28");
let two9 = document.getElementById("29");
let three0 = document.getElementById("30");
let three1 = document.getElementById("31");
let plus1 = document.getElementById("+1");
let plus2 = document.getElementById("+2");
let plus3 = document.getElementById("+3");

function names(n, block) {
  let values = n.value;
  index++;
  if (values === "roman") {
    res = "true";
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="green">
  </div>
  `
    );
  } else if (values === "vlad") {
    res = "true";
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="blue">
  </div>
  `
    );
  } else if (values === "kiril") {
    res = "true";
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="yellow">
  </div>
  `
    );
  } else if (values === "romank") {
    res = "true";
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="orange">
  </div>
  `
    );
  }
  console.log("name res= " + res);
  console.log("name index= " + index);
}

function html(block, click, index) {
  click++;
  if (index < 1 && (click === 1 || res === "true")) {
    block.insertAdjacentHTML(
      "beforeend",
      `
  <div class="sel">
  <select id="selected" onchange="names(this,block)">
  <option></option>
  <option value="roman">Roman</option>
  <option value="vlad" >Vlad</option>
  <option value="kiril" >Kiril</option>
  <option value="romank" >Roman K.</option>
  </select>
  </div>
  `
    );
  }
  res = 0;
  return [click, index];
}
function clear() {
  let green = block.querySelector("[class=green]");
  green.parentNode.removeChild(green);
  let blue = block.querySelector("[class=blue]");
  blue.parentNode.removeChild(blue);
  let yellow = block.querySelector("[class=yellow]");
  yellow.parentNode.removeChild(yellow);
  let orange = block.querySelector("[class=orange]");
  orange.parentNode.removeChild(orange);

  let paras = block.getElementsByClassName("sel");
  while (paras[0]) {
    paras[0].parentNode.removeChild(paras[0]);
  }
  click = 0;
  index = 0;
}
function blocki() {
  if (block !== this) {
    switc = true;
  }
  if (switc == true) {
    nyl();
  }
  block = this;
  [click, index] = html(block, click, index);

  console.log("unik= " + unik);
  if (click === 1 && unik === 0) {
    block.insertAdjacentHTML(
      "afterend",
      `
    <button id="but">Очистить</button>
  `
    );

    unik = "КОНЕЦ";
  }
  console.log("click= " + click);
  console.log("index= " + index);
  console.log(block);
  let knopka = document.getElementById("but");
  knopka.addEventListener("click", clear);
}
let block;
let click = 0;
var res = 0;
var index = 0;
let unik = 0;
let switc = false;
function nyl() {
  index = 0;
  res = 0;
  click = 0;
  unik = 0;
  switc = false;
}
minus31.addEventListener("click", blocki);
first.addEventListener("click", blocki);
two.addEventListener("click", blocki);
three.addEventListener("click", blocki);
four.addEventListener("click", blocki);
five.addEventListener("click", blocki);
six.addEventListener("click", blocki);
seven.addEventListener("click", blocki);
eit.addEventListener("click", blocki);
nine.addEventListener("click", blocki);
ten.addEventListener("click", blocki);
first1.addEventListener("click", blocki);
first2.addEventListener("click", blocki);
first3.addEventListener("click", blocki);
firtst4.addEventListener("click", blocki);
firtst5.addEventListener("click", blocki);
firts6.addEventListener("click", blocki);
firtst7.addEventListener("click", blocki);
firtst8.addEventListener("click", blocki);
firtst9.addEventListener("click", blocki);
two0.addEventListener("click", blocki);
two1.addEventListener("click", blocki);
two2.addEventListener("click", blocki);
two3.addEventListener("click", blocki);
two4.addEventListener("click", blocki);
two5.addEventListener("click", blocki);
two6.addEventListener("click", blocki);
two7.addEventListener("click", blocki);
two8.addEventListener("click", blocki);
two9.addEventListener("click", blocki);
three0.addEventListener("click", blocki);
three1.addEventListener("click", blocki);
plus1.addEventListener("click", blocki);
plus2.addEventListener("click", blocki);
plus3.addEventListener("click", blocki);
