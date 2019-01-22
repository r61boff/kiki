$(function() {
	$('.my-slick__items').slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 2
	});
	// Custom JS
	$('.clients__slide input').change(function(){
		setTimeout(function(){
			$('.clients__slide input:checked ~ div .slick-prev').trigger('click');
		}, 1200);
	})
});
