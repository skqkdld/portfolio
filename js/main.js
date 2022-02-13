$(document).ready(function () {

var text = document.getElementById("typeStyle");

var typewriter = new Typewriter(text, {
    loop: true
});

typewriter.typeString('WELCOME')
    .pauseFor(2000)
    .deleteAll()
    .typeString('MY PORTFOLIO')
    .pauseFor(2000)
    .deleteChars(2)
    .start();

$('.click').mouseover(function () {
    $('.click button').text('MBTI');
});

$('.click').mouseout(function () {
    $('.click button').text('Click');
});

$('.click').click(function () {
    $('.modal').fadeIn();
});

$('.modal_click').click(function () {
    $('.modal2').fadeIn();
});

$('.close_btn').click(function () {
    $('.modal').fadeOut();
});

$('.modal_click').mouseover(function () {
    $('.modal_click').text('???');
});

$('.modal_click').mouseout(function () {
    $('.modal_click').text('Click');
});

// /////////////////


// document.querySelector('.btn2').addEventListener('click', function () {
//     document.querySelector('.container').style.transform = 'translate(-100vw)';
// });
// document.querySelector('.btn3').addEventListener('click', function () {
//     document.querySelector('.container').style.transform = 'translate(-200vw)';
// });
// document.querySelector('.btn1').addEventListener('click', function () {
//     document.querySelector('.container').style.transform = 'translate(0vw)';
// });
	
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});

});
