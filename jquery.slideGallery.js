/*
jQuery Plugin - Slide Gallery
Author: Ari

===== HOW TO USE =====
<ul>
	<li><img /></li>
</ul>

という構造を持つ要素を指定する。

ex.
	$("#slide").slideGallery();

===== NOTICE =====
li要素を二倍に増やして空白を埋めるのである程度の数の要素が必要となる。


===== EPISODE =====
css の left をマイナスにしていき、一番左の画像の幅の分だけ左ずれたらその要素を最後尾に移動させるようにしたものを作ったが、
これだと画像の幅を超えて左に行ってしまったときの処理に困る。画像が最後尾に抜けた後、"left" を0にするが
マイナス分が最初の要素の幅ぴったりでないと、ガクッと瞬間移動してしまう。
今回のプラグインは瞬間移動がない。

*/

(function($){

$.fn.slideGallery = function(options) {

	//option
	var settings = $.extend(
		{
			'duration': 50, 	//速さ
			'direction' : 'left',	//向き
			'pauseonhover': true	//マウスオーバーでストップ
		}, options);
	

	
	//開始時のフェードインとプリロード
	var opening = function(obj){
		var d = new $.Deferred;

		var ul = obj.find('ul');
		var li = obj.find('li');


		// ul タグの幅を算出する
		var UL_WIDTH = 0;
		li.each(function(){
			UL_WIDTH += parseInt($(this).width());
		});

		//CSS
		obj.css({
			overflow: 'hidden'
		});
		ul.css({
			width: UL_WIDTH*2 + 'px', // ul.width() を二倍に
			position: 'relative',
			overflow: 'hidden'
		});
		
		if(settings.direction === 'left') {
			li.css({
				//display: 'inline',
				float: 'left'
			});
		} else if (settings.direction === 'right') {
			li.css({
				//display: 'inline',
				float: 'right'
			});
		}


		//クローンして UL に追加する
		li.each(function(){
			$(this).clone().appendTo(ul);
			//$(this).clone().css('display','inline').appendTo(ul);
		});

		//順番にフェードイン
		/*li.hide().each(function(key,value){
			$(this).delay(key*200).fadeIn('slow',function(){
				$(this).clone().css('display','inline').appendTo(ul);
			});
		});*/

		d.resolve();

		return d.promise();
	}


	var slide = function(obj) {

		var d = new $.Deferred;
		var ul = obj.children('ul');

		//ロード時のみ必要
		if(settings.direction == 'right'){
			ul.css('left',-1*ul.width()/2 + 'px');
		}

		var anim = function(){
			if(settings.direction == 'left') {
				ul.animate(
					{left: '-' + ul.width()/2 + 'px'},
					ul.width()/2 * settings.duration,
					'linear',
					function(){
						ul.css('left', 0);
						anim(); // Repeat
					}
				);
			} else if(settings.direction == 'right') {
				ul.animate(
					{left: '0px'},
					ul.width()/2 * settings.duration,
					'linear',
					function(){
						ul.css('left', -1*ul.width()/2 + 'px');
						anim();
					}
				);
			}
		}
		
		anim();

		return d.promise();
	}

	//処理の実行
	return this.each(function() {
		opening($(this)).then(slide($(this)));
	});



}
})(jQuery);