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
  validateForms('#consultation form');
  validateForms('#consultation-form');

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
new WOW().init();
    //для відправки форми на пошту
$('form').submit(function(e){
  e.preventDefault(); //відміна стандартної поведінки браузера
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find("input").val("");
    $('#consultation').fadeOut('slow');
    $('.overlay , #thanks').fadeIn('slow');
    $('form').trigger('reset');
  });
  return false;
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
          required: "enter your name",
          minlength: jQuery.validator.format("need minimum {0} leter")
        },
        phone:{
          required: "enter your phone",
          minlength: jQuery.validator.format("need minimum {0} numbers")
        },
        email: {
          required: "enter your email",
          email: " error   exsample - name@domain.com"
        }
      }
    
   });
  };