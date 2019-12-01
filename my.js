// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==//@@
// ***** http://closure-compiler.appspot.com/home

jQuery(document).ready(function($){

// Initialize
	var $window = $(window);


// Mobile かどうか判別する	
	var mobile = false;
	var width = $(window).width();
	if(width <= 480) mobile = true;
	
	// User Agent
	
	var ua = navigator.userAgent;
	if (ua.search(/iPhone/) != -1) mobile = true;
	/*else if(ua.search(/iPad/) != -1)
	else if(ua.search(/Android/) != -1)*/
	
	
// Open outside link in a new tab
	var hostname = location.hostname;
	$('a').not('[href^="http://' + hostname + '"], [href^="javascript"], [href^="#"]').attr("target", "_blank");


// Parallax
	//スマホだと、下のギャラリーと合わせると重い
	/*if(false )
	{
		$("#oshinagaki .bg").each(function(index,elem){
		
			var $self = $(this);
			var offsetPositions = $self.offset();
			var menu_height = $('#menu').outerHeight(true);
			$self.css('backgroundPosition', 'right top');
			$self.css('backgroundAttachment', 'scroll');

			$(window).scroll(function() {
					//要素の領域がブラウザに表示されている場合
					// if ( ($window.scrollTop() + $window.height()) > offsetPositions.top
					//		&& ( (offsetPositions.top + $self.height()) > $window.scrollTop() ) )
				if( ($window.scrollTop() > offsetPositions.top - menu_height )
				   && (offsetPositions.top + $self.height() > $window.scrollTop()) )
				{
					var offsetY = $window.scrollTop() - offsetPositions.top + menu_height;
					var positions = 'right ' + offsetY + 'px';
					$self.css('backgroundPosition', positions);
					
					//if(index===1) {
					//	console.log("offsetPositions.top:" + offsetPositions.top);
					//	console.log(index + ' offsetY : ' + offsetY + '    $window.scrollTop: ' + $window.scrollTop());
					//}
				}
				else if($window.scrollTop() <= offsetPositions.top) {
					var positions = 'right top';
					$self.css('backgroundPosition', positions);
					
					// Chrome はページロード直後、要素の位置・高さをうまく取得できないため、随時高さを取得させる
					offsetPositions = $self.offset();
				}
			});
		});
	}*/


// Navigation
	$("nav").each(function(){
		var $self = $(this);
		var offsetPositions = $self.offset();

		$(window).scroll(function() {
			//ナビゲーションバーを画面上部に固定させる

			//要素の領域がブラウザに表示されている場合
			if ( $window.scrollTop() >= offsetPositions.top )
			{
				$self.addClass("fixed");
				//$self.css('position', 'fixed');
				//$("header").css('margin-bottom', $self.outerHeight(true) + "px");
			}
			else
			{
				$self.removeClass("fixed");
				//$self.css('position', 'absolute');
				//$("header").css('margin-bottom', "0");
			}

			scroll_spy();

		});
	});

	$("nav div a").click(function(event){
		// 固定バーを最上部に表示しているので、アンカーで飛ばされる位置がこのバーに隠れてしまう
		event.preventDefault(); // デフォルト動作をキャンセル
		//console.log($(event.target));
		//console.log(event.target.tagName);
		if(event.target.tagName === 'IMG')
			$('html, body').animate({scrollTop: ( $($(event.target.parentNode).attr("href")).offset().top - $("nav").height() -19 ) }, 300);
		if(event.target.tagName === 'A')
			$('html, body').animate({scrollTop: ( $($(event.target).attr("href")).offset().top - $("nav").height() -19 ) }, 300);
		scroll_spy();
	});


	var scroll_spy = function() {

		//スクロールスパイを行い、現在の位置のボタンを押し込みにする
		if ( $window.scrollTop() >= ( $("#location").offset().top - $("nav").height() -20 ) ) {
			$('nav div').removeClass("current");
			$('nav div.location').addClass("current");
		}
		else if ( $window.scrollTop() >= ( $("#oshinagaki").offset().top - $("nav").height() -20 ) ) {
			$('nav div').removeClass("current");
			$('nav div.oshinagaki').addClass("current");
		}
		else if ( $window.scrollTop() >= ( $("#oryouri").offset().top - $("nav").height() -20 ) ) {
			$('nav div').removeClass("current");
			$('nav div.oryouri').addClass("current");
		}
		else if( $window.scrollTop() >= ( $("#goaisatsu").offset().top - $("nav").height() -20 ) )
		{
			$('nav div').removeClass("current");
			$('nav div.goaisatsu').addClass("current");
		}
		else {
			$('nav div').removeClass("current");
		}
	}
	
	
// Scroll View
	
	var ScrollView = function() {
		$("#list1 .wrap").slideGallery();
		$("#list2 .wrap").slideGallery({'direction':'right'});

		//ウィンドウのリサイズ時に中央の画像のサイズがおかしくなるので調節。
		var CENTER_BOX_WIDTH = $("#centerBox>img").width();
		var CENTER_BOX_HEIGHT = $("#centerBox>img").height();
		var CENTER_BOX_ASPECT = CENTER_BOX_HEIGHT / CENTER_BOX_WIDTH;
		
		//料理名
		$("#centerBox .name").text($("#list1 li:first-child img").attr("data-name"));
		//$("#centerBox .price").text('￥ ' + $("#list1 li:first-child img").attr("data-price"));

		//on changing window size
		$(window).resize(function() {
			CENTER_BOX_HEIGHT = $("#centerBox").width() * CENTER_BOX_ASPECT;
			$("#centerBox img").height(CENTER_BOX_HEIGHT);
		});
		
		//click
		$("#list1 li img, #list2 li img").click(function(){
			$("#centerBox img").attr("src", $(this).attr("src"));
			$("#centerBox img").height(CENTER_BOX_HEIGHT);

			$("#centerBox .name").text($(this).attr("data-name"));
			//$("#centerBox .price").text('￥ ' + $(this).attr("data-price"));
		});

		/*
		$("#centerBox .name").text($("#list1 li:first-child img").attr("data-name"));
		$("#centerBox .price").text('￥ ' + $("#list1 li:first-child img").attr("data-price"));
		*/
		
	};

	
	/*
	var ScrollView = function() {
		//settings
		//var IMAGE_WIDTH = $("#list1 li:first-child img").width();$("#list1 li:first-child").width()
		var SPEED = 30; //IMAGE_WIDTH/6; // 6 で割り切れない画像幅だとアニメーションが狂う
		
		// 横幅を求める
		var IMAGE_WIDTH = 160;
		var IMAGEs_WIDTH = 0;
		$("#list1 ul").children().each(function(i,e){
			IMAGEs_WIDTH += e.offsetWidth;
		});
		
		
		$("#list1 ul").width( IMAGEs_WIDTH + 'px' );
		//$("#list1 ul").width( $("#list1 ul").children().length * IMAGE_WIDTH + 'px' );
		//$("#list2 ul").width( $("#list2 ul").children().length * IMAGE_WIDTH + 'px' );
		var CENTER_BOX_WIDTH = $("#centerBox>img").width();
		var CENTER_BOX_HEIGHT = $("#centerBox>img").height();
		var CENTER_BOX_ASPECT = CENTER_BOX_HEIGHT / CENTER_BOX_WIDTH;
		$("#list2 ul").css("marginLeft", ($("#list1 ul").width() - CENTER_BOX_WIDTH) * -1);

		$("#centerBox .name").text($("#list1 li:first-child img").attr("data-name"));
		$("#centerBox .price").text('￥ ' + $("#list1 li:first-child img").attr("data-price"));

		//scroll functions
		var meal_scroll = function() {
			$("#list1 ul").animate({ marginLeft: '-=' + SPEED + 'px' }, 1000, "linear", function() {
				if( parseInt($("#list1 ul").css("marginLeft")) <= IMAGE_WIDTH * -1 ) {
					console.log("IN");
					$("#list1 ul").append($("#list1 ul li:first-child"));
					$("#list1 ul").css("marginLeft", 0);
				}
			});	
		}

		var meal_scroll_2 = function () {
			$("#list2 ul").animate({ marginRight: '-=' + SPEED + 'px' }, 1000, "linear", function() {
				if( parseInt($("#list2 ul").css("marginRight")) === IMAGE_WIDTH * -1 ) {
					$("#list2 ul").append($("#list2 ul li:first-child"));
					$("#list2 ul").css("marginRight", 0);
				}
			});
		}

		//scroll timer
		var timer = setInterval(meal_scroll, 1000);
		var timer_2 = setInterval(meal_scroll_2, 1000);
		

		//on changing window size
		$(window).resize(function() {
			CENTER_BOX_HEIGHT = $("#centerBox").width() * CENTER_BOX_ASPECT;
			$("#centerBox img").height(CENTER_BOX_HEIGHT);
		});

		//click
		$("#list1 li img, #list2 li img").click(function(){
			$("#centerBox img").attr("src", $(this).attr("data-url"));
			$("#centerBox img").height(CENTER_BOX_HEIGHT);

			$("#centerBox .name").text($(this).attr("data-name"));
			$("#centerBox .price").text('￥ ' + $(this).attr("data-price"));
		});
	};
	*/
	
	
// Flick
	// http://flickity.metafizzy.co
	$('#location .imgs').flickity({
		contain: true,
		freeScroll: true
	});

	

	
// Register	
	window.onload = function(){
		ScrollView();
		
		// Flick
		var WindowWidth = $(window).width();
		var ImageAspect = 300/450; //Height/Width
		if(mobile) $('#location .imgs img').height(WindowWidth * ImageAspect);
		$('#location .imgs').flickity('resize');
	}
	
	
	
// SNS
// jQuery.socialbutton [ http://itra.jp/jquery_socialbutton_plugin/ ]

	/*$(function() {
		$("#sns .twitter").socialbutton("twitter", {
			button : "horizontal"
			//text   : "つぶやきに含めるテキスト",
			//url    : "対象URL",
		}).width(100);

		$("#sns .facebook_like").socialbutton("facebook_like", {
			button : "button_count"
			//url    : "対象URL",
		}).width(110);

		$("#sns .facebook_share").socialbutton("facebook_share", {
			button : "button_count"
			//url    : "対象URL",
		}).width(100);

		$("#sns .google").socialbutton("google_plusone", {
			button : "medium"
			//url    : "対象URL",
			//count  : true,
		}).width(70);

		$("#sns .hatena").socialbutton("hatena", {
			button : "standard"
			//url    : "対象URL",
			//title  : "ページのタイトル",
		}).width(60);
	});
	*/


// タイマー

	// スクロール時にスクロールのスイッチをオン
	/*var didScroll = false;
	$(window).scroll(function() {
		didScroll = true;
	});

	// スクロール時に cal_height() を実行すると重くなる可能性が高いので、setInterval する。
	var timer = setInterval(function(){
		if(didScroll) {
			didScroll = false;

			// Amazon
			//cal_height();

			// Arrow
			if ($(window).scrollTop() > 200) arrow.fadeIn(200);
			else arrow.fadeOut(200);
		}
	}, 250);



// Go Top Arrow
	
	var arrow = $('#go-top');

	// Animate the scroll to top
	arrow.click(function(event) {
		event.preventDefault(); // デフォルト動作をキャンセル
		$('html, body').animate({scrollTop: 0}, 300);
	});*/




// Amazon Scroll
	/*
	var sidebar_height = $('#sidebar').height();
	var amazon_height = 1200;
	var left_height = $('#left').height() + 800;

	var cal_height = function () {
		left_height = $('#left').height() + 800;
		//console.log('left: ' + left_height + "\nside_base: " + sidebar_height + "\nsb+ama*1: " + (sidebar_height + amazon_height) );
		if( left_height > (sidebar_height + amazon_height) ) $('.amazon_1' + '.pc').show(0);
		if( left_height > (sidebar_height + amazon_height * 2) ) $('.amazon_2' + '.pc').show(0);
		if( left_height > (sidebar_height + amazon_height * 3) ) $('.amazon_3' + '.pc').show(0);
	}

	// 一度行う
	cal_height();
	*/


// Image Slider (jsfiddle http://jsfiddle.net/yjdjh/9/)
/*	function ImageSlider() { //class

		// !!! need to be set.
		var image_width = 300;
		var CycleTime = 4000;
		var SlideNumber = 3;

		var images = $("#image-slider > div.wrap > div.posts").children("a").length;
		var is_Down = false; // Mouse is down now or not.

		// set setInterval
		var timerId = setInterval(timer, CycleTime);

		// div.posts の長さを決定
		$("#image-slider > div.wrap > div.posts").css("width", images * image_width);

		$("#slider").slider({
			min: 0,
			max: (images - 3) * image_width,
			animate: true,
			slide: function(event, ui) {
				$("#image-slider > div.wrap > div.posts").css("marginLeft", ui.value * -1);
			},
			change: function(event, ui) {
				$("#image-slider > div.wrap > div.posts").animate({ marginLeft: ui.value * -1}, 500, "swing", function(){

				});
			}
		}).mousedown(function() {
			clearInterval(timerId);
			is_Down = true;
		});

		// For fear while Mouse button is pressed, but the cursor moved out of the element where the Mouse button is pressed.
		// the following method is very good.
		$(document).mouseup(function() {
			if(is_Down == true){
				var current_value = $("#slider").slider("value");
				var newCV = compare(current_value);
				$("#slider").slider("value", newCV);

				is_Down = false;
				timerId = setInterval(timer, CycleTime);

				//clearInterval(timerId); // !Important
				//timerId = setInterval(timer, CycleTime);
			}
		});

		// When my site is inactive(out focus), setInterval is cancelled. ブラウザの負荷軽減になるか。
		// これらの方法は、スクロールバーを押している時にアニメーションがあると、スクロールバーの押し続けがキャンセルされてしまう。

		// the following method is native javascript.
		/*window.onfocus = onFocus;
		window.onblur = onBlur
		function onFocus(){
			clearInterval(timerId);
			timerId = setInterval(timer, 4000);
		}
		function onBlur(){
			clearInterval(timerId);
		}*/

		// Method 2, using jQuery.
		/*$(window).focus(function(){
			clearInterval(timerId);
			timerId = setInterval(timer, CycleTime);
		}).blur(function(){
			clearInterval(timerId);
		}); */

/*		function timer() {
			var current_value = $("#slider").slider("value");
			var newCV = compare(current_value);
			if (newCV < (images - 3) * image_width) $("#slider").slider("value", newCV + image_width * SlideNumber);
			if (newCV == (images - 3) * image_width) $("#slider").slider("value", 0);
		}
*/
		/****
		*	スライドしたバーが手前の画像と次の画像のどちらに近いかを比較。
		*	小数の整数化については、Re:浮動小数点数を整数にする高速（？）な方法<http://javascript.g.hatena.ne.jp/edvakf/20090203/1233678994>
		****/
/*		function compare(cv) {
			var no_images, distance, newCV = 0;
			// no_images is the number of previous images.
			// "~~" ia a function that convert a value to a 32bit integer.
			no_images = ~~ (cv / image_width);
			// distance from the previous image margin.
			distance = cv - image_width * no_images;
			// which values(next image, or previous image) is this near?
			(distance < image_width / 2) ? newCV = image_width * no_images : newCV = image_width * (no_images + 1);
			return newCV;
		}
	}

	//Creat a instance
	var Image_Slider = new ImageSlider();
*/


});
