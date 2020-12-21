const slider =document.querySelector('.swiper-container');
let mySwiper;
function mobileSlider(){
  if (window.innerWidth <= 320 && slider.dataset.mobile =='false' ){
  mySwiper = new Swiper(slider, {
    
    slidesPerView:1.4,
    spaceBetween: 10,
    
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });
  slider.dataset.mobile ='true';
}
if(window.innerWidth > 320 ){
  slider.dataset.mobile ='false';
  if(slider.classList.contains('sweper-container-initialized')){
  mySwiper.destroy();
}
}
}
mobileSlider();
window.addEventListener('resize', () => {
  mobileSlider();
});


  document.addEventListener("DOMContentLoaded", function(event) {
const button =  document.querySelector('#btn');
const text = document.querySelector('.main-menu__button_text');
const expand = document.querySelector('.main-menu__button_expand');
var elements = document.querySelectorAll('.swiper-slide');

 button.addEventListener('click', function(){
   if (window.innerWidth >= 768 && window.innerWidth < 1120 ){

  if (text.innerHTML == 'Показать все') {
    text.innerHTML = 'Скрыть';
     expand.style.transform = 'rotate(180deg)';
for(var i=0; elements.length>0; i++){
const element=elements[i];
element.classList.remove('hidden_768');
}
    
  }
  else {
    text.innerHTML = 'Показать все';
    expand.style.transform = 'rotate(0deg)';
    for(var i=6; elements.length>0; i++){
      const element=elements[i];
    element.classList.add('hidden_768');
    }
  return false;
}
   }
   
    if (window.innerWidth >= 1120){ 
      if( text.innerHTML == 'Показать все') {
      text.innerHTML = 'Скрыть';
       expand.style.transform = 'rotate(180deg)';
      for(var i=0; elements.length>0; i++){
        const element=elements[i];
        element.classList.remove('hidden_1120');
      }
    }
    else {
      text.innerHTML = 'Показать все';
      expand.style.transform = 'rotate(0deg)';
      for(var i=8; elements.length>0; i++){
        const element=elements[i];
        element.classList.add('hidden_1120');
      }
      
    return false;
   }
  }
  
});
});