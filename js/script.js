$(document).ready(function () {

	
	$('.carousel-list').slider({picStep: 2});
	

	var anketa = {
		fio: 'Максимова Ольга Николаевна',
		pic: 'img/pic.jpg',
		job: 'Графический дизайнер',
		why: ['Мне нравится этим заниматься', 
			  'Хочу научиться &laquo;оживлять&raquo; то, что нарисую', 
			  'Хочу зарабатывать больше, чем сейчас'],
		tel: '+38 050 1680123',
		feedback: 'Могу помочь с дизайном )'
	};
	
	 
	var htmlText = $('#anketaTempl').html();
	var content = tmpl(htmlText, anketa);
	$('.anketa_wrapper').append(content);
	
	
});