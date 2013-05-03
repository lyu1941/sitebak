if(window.chrome) {
	$('.banner li').css('background-size', '100% 100%');
}

$('.banner').unslider({
	speed: 1000,               //  The speed to animate each slide (in milliseconds)
	delay: 8000,              //  The delay between slide animations (in milliseconds)
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	arrows: true,
	fluid: true,
	dots: true
});

