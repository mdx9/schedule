function names(n,index=0) {
  let values = n.value; 
  let block=n.previousElementSibling; // div sel
  let rod=n.closest("div").id; //Родитель с Id
  let Rod=n.closest("div");
  // n= select

  if (rod!==idex){
    index=0;
    idex=rod;
  }

  if (index<4){
  if (values === "roman" && !(block.querySelector(".green"))) {
    index++;
    block.insertAdjacentHTML(
      "beforeend",
      `
  <div class="green">
  <button class="but">X</button>
  </div>
  `
    );
  } else if (values === "vlad"  && !(block.querySelector(".blue"))) {
    index++;
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="blue"><button class="but">X</button>
  </div>
  `
    )

    ;
  } else if (values === "kiril" && !(block.querySelector(".yellow"))) {
    index++;
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="yellow"><button class="but">X</button>
  </div>
  `
    );
  } else if (values === "romank"  && !(block.querySelector(".orange"))) {
    index++;
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="orange"><button class="but">X</button>
  </div>
  `
    );
  }}
  console.log("index= " + index);
  if (index===4){
    n.style.display="none";
    index=0;
  }
  return index;
}


function clear(knopka) {
  console.log(this);
  console.log(knopka);
  // let green = block.querySelector("[class=green]");
  // if (green!==null){
  // green.parentNode.removeChild(green);
  // }
  // let blue = block.querySelector("[class=blue]");
  // if (blue!==null){
  // blue.parentNode.removeChild(blue);
  // }
  // let yellow = block.querySelector("[class=yellow]");
  // if (yellow!==null){
  // yellow.parentNode.removeChild(yellow);
  // }
  // let orange = block.querySelector("[class=orange]");
  // if (orange!==null){
  // orange.parentNode.removeChild(orange);
  // }

}
let index;
var idex=0;
let knopka = document.getElementsByClassName("but");
if (knopka){
  console.log(knopka);
console.log(knopka[0]);
  knopka.addEventListener("click", clear);
}

