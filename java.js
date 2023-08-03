function names(n,index=0) {
  let values = n.value; 
  let block=n.previousElementSibling; // div sel
  let rod=n.closest("div").id; //Родитель с Id
  let Rod=n.closest("div");
  // n= select

  console.log(values);
  if (values === "roman" && !(block.querySelector(".green"))) {
    block.insertAdjacentHTML(
      "beforeend",
      `
  <div class="green">
  <button class="but">X</button>
  </div>
  `
    );
  } else if (values === "vlad"  && !(block.querySelector(".blue"))) {
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="blue"><button class="but">X</button>
  </div>
  `
    )
    ;
  } else if (values === "kiril" && !(block.querySelector(".yellow"))) {
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="yellow"><button class="but">X</button>
  </div>
  `
    );
  } else if (values === "romank"  && !(block.querySelector(".orange"))) {
    block.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="orange"><button class="but">X</button>
  </div>
  `
    );
  }
  let a,b,c,d;
  if(block.querySelector('.green')){
     a=true
  }
  if(block.querySelector('.blue')){
     b=true
  }
  if(block.querySelector('.yellow')){
     c=true
  }
  if(block.querySelector('.orange')){
     d=true
  }

  if (a && b && c && d)
  {
    n.style.display="none";
  }else  if (a || b || c || d)
  {
    n.style.display="block";

  }
  if (a && b && c && d)
  {
    console.log("none");
    n.style.display="none";
  }

  document.getElementById(rod).onclick = function(e) {
    const btn = e.target.closest('.but');
    
    if (!btn) {
      return;
    }
    
    btn.parentElement.remove();
    n.style.display="block";
    // btn.closest('li').remove();
  }
  return index;
}
let index;

function lines(){
  let sizeW=Math.random()*12;
  let duration=Math.random()*3;
  let e=document.createElement('div')
  e.setAttribute('class','cirle');
  document.body.appendChild(e);
  e.style.width=2+sizeW+'px';
  e.style.left=Math.random() * +innerHeight+ "px";
  e.style.animationDirection=2+duration+"s";
  
  setTimeout(function(){
    document.body.removeChild(e)
  },5000);
}

setInterval(function(){
  lines();
},500);