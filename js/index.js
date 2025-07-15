// const buttonText = document.querySelector(".content-button__expand")
// const text = document.querySelector(".content-article__text")
    
// buttonText.addEventListener("click", function() { 
//        text.classList.toggle("expanded-height-text");
//         buttonText.classList.toggle("content-button__hidden");
//     if (buttonText.textContent === "Читать далее") { 
//         buttonText.textContent = "Скрыть";
//     }
//     else {
//         buttonText.textContent = "Читать далее";
//     }
// })

// const buttonBrands = document.querySelector(".brands-button__expand")
// const brandsList = document.querySelector(".brands-list")
    
// buttonBrands.addEventListener("click", function() { 
//        brandsList.classList.toggle("expanded-height-brands");
//         buttonBrands.classList.toggle("brands-button__hide");
//     if (buttonBrands.textContent === "Показать все") { 
//         buttonBrands.textContent = "Скрыть";
//     }
//     else {
//         buttonBrands.textContent = "Показать все";
//     }
// })

// const buttonTechnique = document.querySelector(".technique-button__expand")
// const techniqueList = document.querySelector(".technique-list")
    
// buttonTechnique.addEventListener("click", function() { 
//        techniqueList.classList.toggle("expanded-height-technique");
//         buttonTechnique.classList.toggle("technique-button__hide");
//     if (buttonTechnique.textContent === "Показать все") { 
//         buttonTechnique.textContent = "Скрыть";
//     }
//     else {
//         buttonTechnique.textContent = "Показать все";
//     }
// })






// Пробная весрия на свайпер


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








const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {

        mySwiper = new Swiper(slider, {
            loop: false,
            slideClass: 'swiper-slide',
                 pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                simulateTouch: true,

                touchRatio: 1,

                touchAngle: 45,

                grabCursor: true,

                slideToClickedSlide: true,

                slideToClickedSlide: true,


                keyboard: {

                    enabled: true,

                    onlyInViewport: true,

                    pageUpDown: true,
                },


                mousewheel: {
        
                    sensitivity: 1,

        
                    eventsTarget: '.swiper-container',
                },

                breakpoints: {
                    240: {
                        slidesPerView: 0.8, 
                    },

                    280: {
                        slidesPerView: 1,
                    },

                    320: {
                        slidesPerView: 1.35,  
                    },

                    400: {
                        slidesPerView: 1.7, 
                    },
        
                    480: {
                        slidesPerView: 2, 
                    },

                    600: {
                        slidesPerView: 2.5, 
                    }, 
        
                    755: {
                        slidesPerView: 3,
                    },

                    768: {
                        initialSlide: 0,
                        spaceBetween: 0,
                        enabled: false,
                        },
                },
                centeredSlides: false,
                watchOverflow: true,
                spaceBetween: 16,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 768) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('slider-initialized')) {

            mySwiper.destroy();
        }
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});