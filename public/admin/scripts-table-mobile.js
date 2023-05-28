$(document).ready(function() {
	//region - tabela - mobile
	$('.table-responsive-stack').find("th").each(function(i) {
		$('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">' + $(this).html() + ':</span> ');
		$('.table-responsive-stack-thead').hide();
	});

	$('.table-responsive-stack').each(function() {
		//var thCount = $(this).find("th").length;
		//var rowGrow = 100 / thCount + '%';
		////console.log(rowGrow);
		//$(this).find("th, td").css('flex-basis', rowGrow);
	});

	function flexTable() {
		if ($(window).width() < 768) {

			$(".table-responsive-stack").each(function(i) {
				$(this).find(".table-responsive-stack-thead").show();
				$(this).find('thead').hide();

				$(this).find(".table-td-acao .table-responsive-stack-thead").hide(); // oculta a palavra: Ações

				let texto = "Ações:";
				let elemento = $('span.table-responsive-stack-thead:contains("' + texto + '")');
				elemento.addClass('hide')

				$('.table-responsive-stack > tbody > tr > td').css({'border-width':'1px'});
			});

			// window is less than 768px   
		} else {

			$(".table-responsive-stack").each(function(i) {
				$(this).find(".table-responsive-stack-thead").hide();
				$(this).find('thead').show();
			});

		}
		// flextable   
	}

	flexTable();

	window.onresize = function(event) {
		flexTable();
	};
	//endregion - fim - tabela - mobile
	
});