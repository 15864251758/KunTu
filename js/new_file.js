$(function() {
	$(".left").click(function() {
		$(".center").animate({
			left: '-=299'
		})
		console.log(1)
	})
	$(".right").click(function() {
		$(".center").animate({
			left: '+=299'
		})

	})
})