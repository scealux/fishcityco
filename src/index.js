import "./styles.css";
import * as cHange from "./contentChanger.js";

//----Nav----
let userBut = document.getElementById("user");
userBut.addEventListener("click", (e) => console.log(e));

let logoBut = document.getElementById("logo") ;
logoBut.addEventListener("click", (e) => console.log({e}));

let barsBut = document.getElementById("bars");
barsBut.addEventListener("click", () => toggleSidebar(barMenu));

//--------Bottom--------
let bottomContent = document.getElementById("container");
  //----Panels----
  //--Main Menu--
  let barMenu = document.getElementById("barMenu");
    let addRBut = document.getElementById("addResource");
      addRBut.addEventListener("click", () => toggleSidebar(addMenu));
    
  //--Add Resource Menu--
  let addMenu = document.getElementById("addMenu");
    let closeAddSubmitBut = document.getElementById("closeX");
      closeAddSubmitBut.addEventListener("click", () => toggleSidebar(addMenu));
    let addSubmitBut = document.getElementById("submitResource");
      addSubmitBut.addEventListener("click", (event) => event.preventDefault());

function setAddNewNode(){
  console.log("sheep");
}

function toggleSidebar(which){
  which.classList[1] ?
  which.classList = "sidebar" :
  which.classList = "sidebar menuOpen"; 
}

function toggleCollapse(){

}

function changeMain(){

}

function nodeSelected(){

}

function loadSaved(){

}

function searchResults(){
  
}
