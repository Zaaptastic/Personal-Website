var main = function(){

	/* Controls display of project content windows
	
	*/
	$('.project-button').click(function(){
		$('.info-frame-container').fadeIn(250);
		$('#fadeaway').addClass('grayout');
	});

	$('.close').click(function(){
		$('.info-frame-container').fadeOut(250);
		$('#fadeaway').removeClass('grayout');
	});

	$(document).keyup(function(event){
		if (event.which === 27){
			$('.info-frame-container').fadeOut(250);
			$('#fadeaway').removeClass('grayout');
		}

	});

	/* Creates effects on page load
	*/


	$(document).ready(function(){
		$('#description').hide();
		$('#description').slideDown(500);
		$('#down-arrow').hide();
		$('#down-arrow').slideDown(500);
	})

	/* Controls down-arrow for scrolling
	*/

	$('#down-arrow').click(function(){
		$('html, body').animate({
    		scrollTop: $('#overviews').offset().top
		}, 1000);
	});

	$('#down-arrow').hover(function(){
		$('#down-arrow').animate({bottom: '15px'},500)
	},function(){
		$('#down-arrow').animate({bottom: '25px'},500)
	});

	/* Controls resume sections by switching the visible section based on user selection
	*/

	$('#show-education').click(function(){
		$('.current-section').removeClass('current-section');
		$(this).addClass('current-section');
		if ($('#edu-info').hasClass('visible') === false){
			$('.visible').slideUp(500);
			$('.visible').removeClass('visible');
			$('#edu-info').slideDown(500);
			$('#edu-info').addClass('visible');
		}
	});

	$('#show-skills').click(function(){
		$('.current-section').removeClass('current-section');
		$(this).addClass('current-section');
		if ($('#skills-info').hasClass('visible') === false){
			$('.visible').slideUp(500);
			$('.visible').removeClass('visible');
			$('#skills-info').slideDown(500);
			$('#skills-info').addClass('visible');
		}
	});

	$('#show-work').click(function(){
		$('.current-section').removeClass('current-section');
		$(this).addClass('current-section');
		if ($('#work-info').hasClass('visible') === false){
			$('.visible').slideUp(500);
			$('.visible').removeClass('visible');
			$('#work-info').slideDown(500);
			$('#work-info').addClass('visible');
		}
	});

	$('#show-other').click(function(){
		$('.current-section').removeClass('current-section');
		$(this).addClass('current-section');
		if ($('#other-info').hasClass('visible') === false){
			$('.visible').slideUp(500);
			$('.visible').removeClass('visible');
			$('#other-info').slideDown(500);
			$('#other-info').addClass('visible');
		}
	});

};


$(document).ready(main);