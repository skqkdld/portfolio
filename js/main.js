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

	// 

	for (let i = 0; i < 2; i++){
        $('.project_modal_click').eq(i).click(function(){
            $('.project_modal').eq(i).fadeIn(1000);        
        });
    }

	for (let i = 0; i < 2; i++){
        $('.project_modal_img img').eq(i).click(function(){
            $('.project_modal').fadeOut(500);         
        });
    }


	for (let i = 0; i < 8; i++){
        $('.click_modal').eq(i).click(function(){
            $('.design_modal').eq(i).fadeIn(1000);        
        });
    }

	for (let i = 0; i < 14; i++){
        $('.design_modal_img img').eq(i).click(function(){
            $('.design_modal').fadeOut(500);         
        });
    }


	// 카드뉴스모달

	document.querySelector('.modal_btn2').addEventListener('click', function () {
        document.querySelector('.card_modal_container').style.transform = 'translate(-100vw)';
    });

    document.querySelector('.modal_btn3').addEventListener('click', function () {
        document.querySelector('.card_modal_container').style.transform = 'translate(-200vw)';
    });

	document.querySelector('.modal_btn4').addEventListener('click', function () {
        document.querySelector('.card_modal_container').style.transform = 'translate(-300vw)';
    });

    document.querySelector('.modal_btn5').addEventListener('click', function () {
        document.querySelector('.card_modal_container').style.transform = 'translate(-400vw)';
    });

	document.querySelector('.modal_btn6').addEventListener('click', function () {
        document.querySelector('.card_modal_container').style.transform = 'translate(-500vw)';
    });

    document.querySelector('.modal_btn1').addEventListener('click', function () {
        document.querySelector('.card_modal_container').style.transform = 'translate(0vw)';
    });

	
});
