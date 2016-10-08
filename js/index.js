$(function() {
	$(".none1,.head4-font2").mouseover(function() {
		$(".head4-font2").css("display", "block")
	})
	$(".none1,.head4-font2").mouseout(function() {
		$(".head4-font2").css("display", "none")
	})
	$(".none2,.head4-font3").mouseover(function() {
		$(".head4-font3").css("display", "block")
	})
	$(".none2,.head4-font3").mouseout(function() {
		$(".head4-font3").css("display", "none")
	})
	$(".none3,.head4-font4").mouseover(function() {
		$(".head4-font4").css("display", "block")
	})
	$(".none3,.head4-font4").mouseout(function() {
		$(".head4-font4").css("display", "none")
	})
	$(".none5,.head4-font5").mouseover(function() {
		$(".head4-font5").css("display", "block")
	})
	$(".none5,.head4-font5").mouseout(function() {
		$(".head4-font5").css("display", "none")
	})
	$(".cp1").mouseover(function() {
		var w = $(".cp1").width()
		$(".cp1").width(w * 1.5)
		$(".cp1").css("top", 622)
		$(".cp1").css("left", 360)
		$(".cp1").css("z-index", 999)

	})
	$(".cp1").mouseout(function() {
		var w = $(".cp1").width()
		$(".cp1").width(w / 1.5)
		$(".cp1").css("top", 666)
		$(".cp1").css("left", 416)
		$(".cp1").css("z-index", 1)
	})
	$(".cp2").mouseover(function() {
		var w = $(".cp2").width()
		$(".cp2").width(w * 1.5)
		$(".cp2").css("top", 780)
		$(".cp2").css("left", 155)
		$(".cp2").css("z-index", 999)
	})
	$(".cp2").mouseout(function() {
		var w = $(".cp2").width()
		$(".cp2").width(w / 1.5)
		$(".cp2").css("top", 860)
		$(".cp2").css("left", 210)
		$(".cp2").css("z-index", 1)
	})
	if(isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
		$(".head4-font2").css("left", 20)

		$(".head4-font3").css("left", 334)
		$(".head4-font4").css("left", 547)
		$(".head4-font5").css("left", 1015)
		$(".head4 img").css("margin-left", -6)
		$(".head4").css("padding-left", 27)
	}
})