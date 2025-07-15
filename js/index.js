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

const buttonTechnique = document.querySelector(".technique-button__expand")
const techniqueList = document.querySelector(".technique-list")
    
buttonTechnique.addEventListener("click", function() { 
       techniqueList.classList.toggle("expanded-height-technique");
        buttonTechnique.classList.toggle("technique-button__hide");
    if (buttonTechnique.textContent === "Показать все") { 
        buttonTechnique.textContent = "Скрыть";
    }
    else {
        buttonTechnique.textContent = "Показать все";
    }
})


// let swiperInstance = null;
// function initOrDestroySwiper() {
//     const isMobile = window.innerWidth <= 767;
//     if (isMobile && !swiperInstance) {
//         swiperInstance = new
//         Swiper(".swiper-container", {
//             slidesPerView: "auto",
//             spaceBetween: 10,
//             pagination: {
//                 el: ".swiper-pagination",
//                 clickable: true,
//             },
//         });
//     } else if (!isMobile && swiperInstance) {
//         swiperInstance.destroy(true, true);
//         swiperInstance = null;
//     }
// }

// document.addEventListener('DOMContentLoaded', initOrDestroySwiper);

// window.addEventListener("resize", initOrDestroySwiper);