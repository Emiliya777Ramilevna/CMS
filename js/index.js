const buttonText = document.querySelector(".content-button__expand")
const text = document.querySelector(".content-article__text")
    
buttonText.addEventListener("click", function() { 
       text.classList.toggle("expanded-height-text");
        buttonText.classList.toggle("content-button__hidden");
    if (buttonText.textContent === "Читать далее") { 
        buttonText.textContent = "Скрыть";
    }
    else {
        buttonText.textContent = "Читать далее";
    }
})


const buttonBrands = document.querySelector(".brands-button__expand")
const brandsList = document.querySelector(".brands-list")
    
buttonBrands.addEventListener("click", function() { 
       brandsList.classList.toggle("expanded-height-brands");
        buttonBrands.classList.toggle("brands-button__hide");
    if (buttonBrands.textContent === "Показать все") { 
        buttonBrands.textContent = "Скрыть";
    }
    else {
        buttonBrands.textContent = "Показать все";
    }
})


const buttoTechnique = document.querySelector(".technique-button__expand")
const techniqueList = document.querySelector(".technique-list")
    
buttoTechnique.addEventListener("click", function() { 
       techniqueList.classList.toggle("expanded-height-technique");
        buttoTechnique.classList.toggle("technique-button__hide");
    if (buttoTechnique.textContent === "Показать все") { 
        buttoTechnique.textContent = "Скрыть";
    }
    else {
        buttoTechnique.textContent = "Показать все";
    }
})
