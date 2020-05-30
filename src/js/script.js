  var slider = tns({
    container: '.carusel_slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    navPosition: "bottom"
  });
  document.querySelector('.slick-prev').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.slick-next').onclick = function () {
    slider.goTo('next');
  };
  /* $('input[name="phone"]').mask("+333(999) 999-999"); */
  $('[data-action="stop"]').fadeOut();
  validateForms('.form');
  validateForms('.form_overlay');

  $('[data-modal=consultation]').on('click',function(){
    $('.overlay,#consultation').fadeIn('slow');
 });
 $('.modal__close').on('click',function(){
    $('.overlay,#consultation,#thanks').fadeOut('slow');
 });
 $("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});
$(window).scroll(function(){
  if($(this).scrollTop() > 1000) {
    $('.up').fadeIn('slow');
  }else{
    $('.up').fadeOut('slow');
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
  });
});
  

  function validateForms(form){
  
    $(form).validate({
        
      rules: {
        name: {
          required: true,
          minlength: 2
      },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 6
      }
      },
      messages: {
        name: {
          required: "Введи погоняло індик",
          minlength: jQuery.validator.format("клоун тре мінімум {0} букви")
        },
        phone:{
          required: "Введи номер мудило",
          minlength: jQuery.validator.format("салабон в тебе шо домашній тре мінімум {0} цифр")
        },
        email: {
          required: "Введи мило лосю!",
          email: "Банєку.. Ти тупий ? це не мило от мило - name@domain.com"
        }
      }
    
   });
  };