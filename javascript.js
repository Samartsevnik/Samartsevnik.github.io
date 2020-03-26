$(document).ready(function(){
  $('.carousel_inner').slick({
  	autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt=""/></button>',
    
  });
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__active)', function() {
    $(this)
      .addClass('catalog__tab__active').siblings().removeClass('catalog__tab__active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
   function toggleSlider(item){
   	$(item).each(function(i){
   		$(this).on('click', function(g){
   			g.preventDefault();
   			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
   			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
   		})
   });
   }
   toggleSlider ('.catalog-item__link')
   toggleSlider ('.catalog-item_back')

  // Modals

  	$('[data-modal=consultation ]').on('click', function(){
  		$('.overplay, #consultation').fadeIn();

  	});
  	$('.modals__close').on('click', function(){
  		$('.overplay, #consultation , #order , #thanks').fadeOut();
  	});
  	
  	$('.catalog-item__btn').each(function(i){
  		$(this).on('click' , function(){
  			$('#order .modals__descr').text($('.catalog-item__subtitle').eq(i).text());
  			$('.overplay , #order').fadeIn();
  		})
  	});
  	$('.button_submit').on('click', function(){
  		$('#thanks , .overplay').fadeIn();
  	})
});

// let catalog__tab = document.getElementsByClassName('catalog__tab')[0]
// catalog__tab.addEventListener('click', ()=>{
// catalog__tab.classList.toggle('catalog__tab__active')
// });

