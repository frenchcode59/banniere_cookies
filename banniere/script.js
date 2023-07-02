// je selectionne et stocke mon boutons success

const btnSuccess = document.querySelector(".btn-success");


// je selectionne et stocke ma div cookies 
const cookies =document.querySelector(".cookies")

// je cree l'action au click pour ma div cookies 

btnSuccess.addEventListener("click", function () {
    console.log("bouton cliqué");
    cookies.style.opacity = "0";
    
})