let main = document.querySelector("main");
let calcultorContainer = document.createElement('div');

let screen = document.createElement('p');
let gridcontainer = document.createElement('grid');
let oparators = ["(",")","%","AC","/","x","-","+","=","."]
//define number divisions
for(let i=0; i<10; i++){
    let number = document.createElement('p');
    number.textContent = i.toString();
    number.className = "touch"+i.toString();
}
//define operator divisions
let parenthesL = document.createElement('p');
parenthesL.textContent="(";
parenthesL.className="operator";
let parenthesR = document.createElement('p');
parenthesR.textContent=")";
parenthesR.className="operator";
let poucentage =document.createElement('p');
poucentage.textContent="%";
poucentage.className="operator";
let ac =document.createElement('p');
ac.textContent="AC";
ac.className="operator";
let num7 = document.createElement("p");
num7.textContent ="7";
num7.className ="number";
let num8 = document.createElement("p");
num8.textContent ="8";
num8.className ="number";
let num9 = document.createElement("p");
num9.textContent ="9";
num9.className ="number";
let divide =document.createElement('p');
divide.textContent="/";
divide.className="operator";
let num4 = document.createElement("p");
num4.textContent ="4";
num4.className ="number";
let num5 = document.createElement("p");
num5.textContent ="5";
num5.className ="number";
let num6 = document.createElement("p");
num6.textContent ="6";
num6.className ="number";
let multiplie =document.createElement('p');
multiplie.textContent="x";
multiplie.className="operator";
let num1 = document.createElement("p");
num1.textContent ="1";
num1.className ="number";
let num2 = document.createElement("p");
num2.textContent ="2";
num2.className ="number";
let num3 = document.createElement("p");
num3.textContent ="3";
num3.className ="number";
let minus  =document.createElement('p');
minus.textContent="-";
minus.className="operator";
let num0 = document.createElement("p");
num0.textContent ="0";
let plus =document.createElement('p');
plus.textContent="+";
plus.className="operator";
equal  =document.createElement('p');
equal.textContent="=";
equal.className="equal";
dot =document.createElement('p');
dot.textContent=".";
//css calculatorcontainer
calcultorContainer.style.width= "53vw";
calcultorContainer.style.borderRadius ="5px";
calcultorContainer.style.border ="3px solid #dadce0";
calcultorContainer.style.padding ="20px";
//css grid
gridcontainer.style.display="grid";
gridcontainer.style.gridTemplateColumns="1fr 1fr 1fr 1fr";
gridcontainer.style.justifyItems ="center";
gridcontainer.style.width ="inherit";
gridcontainer.style.gap ="10px";
gridcontainer.style.height ="fit-content";

// grid append children 
gridcontainer.append(parenthesL,parenthesR,poucentage,ac);
gridcontainer.append(num7,num8,num9,divide);
gridcontainer.append(num4,num5,num6,multiplie);
gridcontainer.append(num1,num2,num3,minus);
gridcontainer.append(num0,dot,equal,plus);
//css touches
for (let op of gridcontainer.children) {
    if (op.className == "operator") {
        op.style.backgroundColor = "#dadce0";
      }else if(op.className == "number"){
          op.style.backgroundColor ="#f1f3f4";
      }else if(op.className =="equal"){
          op.style.backgroundColor ="#4285f4";
      }
        op.style.width = "61%";
        op.style.textAlign ="center";
        op.style.borderRadius="5px";
        op.style.padding = "20px";
        op.style.fontSize = "30px";
        op.style.margin = "0px"
        op.style.textWeigth="bold";
        op.className+=" key";// affect the class "key" to all the keys
  }
// event listners
num1.addEventListener("click", function() {
    screen.textContent += "1";
  });
  for (let op of gridcontainer.children) {
    op.addEventListener("click", function() {
        screen.textContent += op.textContent;
      });
  }

//css screen 

screen.style.height ="100px";
screen.style.borderRadius="5px";
screen.style.width="inherit";
screen.style.textAlign="right";
screen.style.fontSize="40px";
screen.style.borderRadius ="5px";
screen.style.border ="3px solid #dadce0";
//affect to main
calcultorContainer.appendChild(screen);
calcultorContainer.appendChild(gridcontainer);
main.appendChild(calcultorContainer);


