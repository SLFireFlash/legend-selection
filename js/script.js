

function allLegneds(){
    const menuBody =document.getElementById("menu-body")
    var meneEle ="<div class=\"legend-row-01 d-flex container justify-content-center\"><div class=\"class-01-body d-flex\"><div class=\"box\">legend</div><div class=\"box\">legend</div><div class=\"box\">legend</div><div class=\"box\">legend</div><div class=\"box\">legend</d></div></div><div class=\"class-02-body d-flex\"><div class=\"box\">legend 1</div><div class=\"box\">legend 2</div><div class=\"box\">legend 3</div><div class=\"box\">legend 4</div><div class=\"box\">legend 5</div><div class=\"box\">legend 6</div></div></div></div><div class=\"legend-row-02 d-flex \"><div class=\"class-03-body d-flex\"><div class=\"box\">legend 1</div><div class=\"box\">legend 2</div><div class=\"box\">legend 3</div><div class=\"box\">legend 4</div></div><div class=\"class-04-body d-flex\"><div class=\"box\">legend 1</div><div class=\"box\">legend 2</div><div class=\"box\">legend 3</div><div class=\"box\">legend 4</div></div><div class=\"class-05-body d-flex\"><div class=\"box\">legend 1</div><div class=\"box\">legend 2</div><div class=\"box\">legend 3</div><div class=\"box\">legend 4</div></div></div></div> ";
    menuBody.innerHTML = meneEle;
}

function LegnedClass01(){
    const classBody01 = document.querySelector(".class-01-body");
    const classBody02 = document.querySelector(".class-02-body");
    const classBody03 = document.querySelector(".class-03-body");
    const classBody04 = document.querySelector(".class-04-body");
    const classBody05 = document.querySelector(".class-05-body");
    classBody02.classList.remove("offitem");
    classBody02.classList.add("offitem");
    classBody03.classList.add("offitem");
    classBody04.classList.add("offitem");
    classBody05.classList.add("offitem");
}
function LegnedClass01(){
    const classBody01 = document.querySelector(".class-01-body");
    const classBody02 = document.querySelector(".class-02-body");
    const classBody03 = document.querySelector(".class-03-body");
    const classBody04 = document.querySelector(".class-04-body");
    const classBody05 = document.querySelector(".class-05-body");
    classBody01.classList.remove("offitem");
    classBody02.classList.add("offitem");
    classBody03.classList.add("offitem");
    classBody04.classList.add("offitem");
    classBody05.classList.add("offitem");
}
function LegnedClass02(){
    const classBody01 = document.querySelector(".class-01-body");
    const classBody02 = document.querySelector(".class-02-body");
    const classBody03 = document.querySelector(".class-03-body");
    const classBody04 = document.querySelector(".class-04-body");
    const classBody05 = document.querySelector(".class-05-body");
    classBody01.classList.add("offitem");
    classBody02.classList.remove("offitem");
    classBody03.classList.add("offitem");
    classBody04.classList.add("offitem");
    classBody05.classList.add("offitem");
}
function LegnedClass03(){
    const classBody01 = document.querySelector(".class-01-body");
    const classBody02 = document.querySelector(".class-02-body");
    const classBody03 = document.querySelector(".class-03-body");
    const classBody04 = document.querySelector(".class-04-body");
    const classBody05 = document.querySelector(".class-05-body");
    classBody01.classList.add("offitem");
    classBody02.classList.add("offitem");
    classBody03.classList.remove("offitem");
    classBody04.classList.add("offitem");
    classBody05.classList.add("offitem");
}
function LegnedClass04(){
    const classBody01 = document.querySelector(".class-01-body");
    const classBody02 = document.querySelector(".class-02-body");
    const classBody03 = document.querySelector(".class-03-body");
    const classBody04 = document.querySelector(".class-04-body");
    const classBody05 = document.querySelector(".class-05-body");
    classBody01.classList.add("offitem");
    classBody02.classList.add("offitem");
    classBody03.classList.add("offitem");
    classBody04.classList.remove("offitem");
    classBody05.classList.add("offitem");
}
function LegnedClass05(){
    const classBody01 = document.querySelector(".class-01-body");
    const classBody02 = document.querySelector(".class-02-body");
    const classBody03 = document.querySelector(".class-03-body");
    const classBody04 = document.querySelector(".class-04-body");
    const classBody05 = document.querySelector(".class-05-body");
    classBody01.classList.add("offitem");
    classBody02.classList.add("offitem");
    classBody03.classList.add("offitem");
    classBody04.classList.add("offitem");
    classBody05.classList.remove("offitem");
}

