var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active"); 
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}

//Слайдер проектов
const projectSlider = new Swiper('.projects-slider', {
  // Optional parameters
  loop: true,
  slidesPerView:3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

//Слайдер отзывов
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView:3,
  spaceBetween: 30,
  
  autoplay: {
    delay: 5000,
  },
// Responsive breakpoints
breakpoints: {
  280: {
    slidesPerView: 1,
    spaceBetween: 30
  },
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 30
  },
  // when window width is >= 480px
  768: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  // when window width is >= 640px
  992: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}
});

  document.querySelector(".header-burger").addEventListener("click", () => { 
    document.querySelector(".header-burger").classList.toggle("burger_active");
    document.querySelector(".header-top__menu").classList.toggle("burger_active");
    document.querySelector(".header-top__contacts").classList.toggle("burger_active");
    document.querySelector("body").classList.toggle("lock");
    
    
   });

   var windowBtn = document.querySelectorAll('.popup_btn');
   var overlay = document.querySelector('.window-overlay');
   windowBtn.forEach((el) => {
     el.addEventListener('click',(e)=> {
let path=e.currentTarget.getAttribute('data-popup');
overlay.classList.add('window-overlay__visible');
document.querySelector('[data-target="popup"]').classList.add('window-dialog__visible');
     });
   });

   var close = document.querySelector('.window-close');
   close.addEventListener('click',(e)=> {
overlay.classList.remove('window-overlay__visible');
document.querySelector('[data-target="popup"]').classList.remove('window-dialog__visible');
    });
 
   