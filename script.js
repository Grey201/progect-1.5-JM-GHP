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

window.onload = function () {
var button =  document.querySelector('#btn');
var text = document.querySelector('.main-menu__button_text');
var expand = document.querySelector('.main-menu__button_expand');

button.onclick = function(){
 
   if (window.innerWidth >= 768 && window.innerWidth < 1120 ){

  if (text.innerHTML == 'Показать все') {
    text.innerHTML = 'Скрыть';
     expand.style.transform = 'rotate(180deg)';

    
    ViewSonic.classList.remove('hidden_768');
    sony.classList.remove('hidden_768'); 
    apple.classList.remove('hidden_768');
    samsung.classList.remove('hidden_768');
    lenovo.classList.remove('hidden_768');
    hp.classList.remove('hidden_768');
  }
  else {
    text.innerHTML = 'Показать все';
    expand.style.transform = 'rotate(0deg)';
    ViewSonic.classList.add('hidden_768');
    sony.classList.add('hidden_768'); 
    apple.classList.add('hidden_768');
    samsung.classList.add('hidden_768');
    lenovo.classList.add('hidden_768');
    hp.classList.add('hidden_768');
    
  return false;
}
   }
   
    if (window.innerWidth >= 1120){ 
      if( text.innerHTML == 'Показать все') {
      text.innerHTML = 'Скрыть';
       expand.style.transform = 'rotate(180deg)';
      apple.classList.remove('hidden_1120');
      samsung.classList.remove('hidden_1120');
      lenovo.classList.remove('hidden_1120');
      
    }
    else {
      text.innerHTML = 'Показать все';
      expand.style.transform = 'rotate(0deg)';
      
      apple.classList.add('hidden_1120');
      samsung.classList.add('hidden_1120');
      lenovo.classList.add('hidden_1120');
      
      
    return false;
   }
  }
  
};
};