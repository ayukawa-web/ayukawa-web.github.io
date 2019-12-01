<!DOCTYPE html>
<html lang="ja">

<head profile="http://purl.org/net/ns/metaprof">
	
	<?php if(filter_input(INPUT_GET, 'dev') != "1"): ?>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-141403798-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-141403798-1');
		</script>
	<?php endif; ?>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="Content-Script-Type" content="text/javascript" />
	<meta name="keywords" content="あゆ川, 伊那, 伊那市, 鮎, あゆ, 鮎釣り, あゆ釣り, 馬刺し, 店, 居酒屋, 食事, 酒処, お酒, 長野県">
	<meta name="description" content="鮎釣りが大好きな店主が、自ら釣った鮎をお客様にお出しします。馬刺しも好評です。長野県伊那市にある居酒屋です。お気軽にお越し下さい。">
	<meta name="viewport" content="initial-scale=1.0" />
	<meta name="ROBOTS" content="noarchive">

	<?php //<link rel="shortcut icon" href="http://ayukawa.cc/favicon.gif"> ?>


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<?php if(filter_input(INPUT_GET, 'dev') == "1"): ?>
		<link type="text/css" rel="stylesheet" href="style.css?<?php echo date('His')?>" />
		<script type="text/javascript" src="my.js?<?php echo date('His')?>"></script>
	<?php else: ?>
		<link type="text/css" rel="stylesheet" href="style.css?190615" />
		<script type="text/javascript" src="default.js?190615"></script>
	<?php endif; ?>

	<script type="text/javascript" src="jquery.slideGallery.min.js?160617-2"></script>


	<link type="text/css" rel="stylesheet" href="libraries/flickity/flickity.css" />
	<script src="libraries/flickity/flickity.pkgd.min.js"></script>


	<link rel='dns-prefetch' href='//s.w.org' />
	<meta name='twitter:card' content='summary' />
	<meta name='og:title' content='酒処 あゆ川' />
	<meta name='og:description' content='' />


	<title>酒処 あゆ川</title>

</head>


<body>


<header id="header" class="clearfix">
	<div class="bg_wrapper"></div>
	<div class="wrapper">
		<div class="overlay">
			<div class="left"><span>自ら釣った鮎 & 国産馬刺しの酒処「あゆ川」</span></div>
			<div class="right">
				<p>ご予約・お問い合わせ</p>
				<a class="call" href="tel:0265-73-6211"><img src="images/contact.png" alt="0265-73-6211"></a>
			</div>
		</div>
		<div id="top"></div>
	</div>
</header>

<nav>
	<div id="menu" class="clearfix">
		<div class="goaisatsu"><a href="#goaisatsu"><img src="images/menu_goaisatsu.png" title="ご挨拶" /></a></div>
		<div class="oryouri"><a href="#oryouri"><img src="images/menu_oryouri.png" title="お料理" /></a></div>
		<div class="oshinagaki"><a href="#oshinagaki"><img src="images/menu_oshinagaki.png" title="お品書き" /></a></div>
		<div class="location"><a href="#location"><img src="images/menu_tenpo.png" title="店舗情報" /></a></div>
	</div>
</nav>

<div id="container" class="clearfix">

	<div id="goaisatsu">
		
		<div class="orange-bar"></div>
		
		<div class="left-box">
			<div class="center">
				<img class="goaisatsu-ayu" src="images/goaisatsu-ayu.png" alt="" />
			</div>
			
			<p>当店の鮎は鮎釣りが大好きな店主が自ら釣り上げたもので、とても好評を頂いております。鮎釣りが解禁となる毎年6月下旬から9月半ばまで毎日釣りに行っています。</p>
			
			<div class="center">
				<img class="mobile" src="images/goaisatsu-photo1.jpg" alt="釣った鮎" />
			</div>
			
			<p>自ら釣り上げた鮎をお客様にお出しするのはこのあたりでは非常に珍しく、新鮮な鮎はひと味もふた味も違います。その味の違いを是非堪能してください。</p>
			<p>鮎は「香魚」とも呼ばれ、新鮮な鮎はスイカのような、キュウリのような良い香りがします。身がしっとりして柔らかで美味しく、内臓のほろ苦さはお酒に良く合います。</p>
			
			<p>店主こだわりの焼き方で焼く、その香り高く新鮮な鮎の「塩焼き」「一夜干し」などをお楽しみ下さい。</p>
			
			<div class="center">
				<img class="mobile" src="images/goaisatsu-photo2.jpg" alt="釣った鮎" />
			</div>
		</div>
		
		<div class="right-box">
			<img class="pc" src="images/goaisatsu-photo1.jpg" alt="釣った鮎" />
			<img class="pc" src="images/goaisatsu-photo2.jpg" alt="鮎の塩焼き" />
		</div>
		
		<div class="clearfix"></div>
		
		<div class="green-bar"></div>
		
		<div class="left-box">
			<div class="center">
				<img class="goaisatsu-basashi" src="images/goaisatsu-basashi.png" alt="" />
			</div>
			
			<p>馬刺しは食べたことがない方もいらっしゃるかと思いますが、当店ではとても人気です。</p>
			<p>当店の馬刺しは本場熊本から取り寄せています。本場の馬刺しは噛むほどに甘みを感じます。</p>
			<p>馬刺しの部位は「赤身」をはじめ、「ふたえご」「たてがみ」「ハラミ」もご用意しています。このほか、「ハツ」「タン」などの超希少部位も不定期ですが入荷いたします。</p>
			<p>本場の馬刺しを是非一度お試し下さい。</p>
						
			<div class="center">
				<img class="mobile" src="images/goaisatsu-photo3.jpg" alt="馬刺し" />
			</div>
			
			<p>当店では鮎だけでなく山菜も自ら採りに行っています。地場で採れる四季折々の素材を活かした料理をお出ししています。</p>
							
			<div class="center">
				<img class="mobile" src="images/goaisatsu-photo4.jpg" alt="山菜" />
			</div>
			
			<p>どうぞお気軽に足をお運び下さい。心よりお待ちしております。</p>
		</div>
		
		<div class="right-box">
			<img class="pc" src="images/goaisatsu-photo3.jpg" alt="馬刺し" />
			<img class="pc" src="images/goaisatsu-photo4.jpg" alt="山菜" />
		</div>
		
		<div class="clearfix"></div>
	</div>

	<div id="oryouri">
		<div class="gray-bar"></div>
		<img class="header" src="images/menu_oryouri_b.png" title="お料理" />
	</div>

	<div id="list1">
		<div class="wrap">
			<ul>
				<li><img src="images/meal_ayu_1.jpg?190522" data-url="images/meal_ayu_1.jpg" data-name="鮎の塩焼き" data-price="0" /></li>
				<li><img src="images/meal_1.jpg?190522" data-url="images/meal_1.jpg" data-name="お刺身盛合せ" data-price="0" /></li>
				<li><img src="images/meal_2.jpg?190522" data-url="images/meal_2.jpg" data-name="砂肝 醤油炒め" data-price="0" /></li>
				<li><img src="images/meal_3.jpg?190522" data-url="images/meal_3.jpg" data-name="馬刺し 四種盛り合わせ" data-price="0" /></li>
				<li><img src="images/meal_4.jpg?190522" data-url="images/meal_4.jpg" data-name="玉子焼き" data-price="0" /></li>
				<li><img src="images/meal_5.jpg?190522" data-url="images/meal_5.jpg" data-name="煮いかのぬた" data-price="0" /></li>
				<li><img src="images/sake_1.jpg?190522" data-url="images/sake_1.jpg" data-name="芋焼酎" data-price="0" /></li>
				<li><div class="partition"></div></li>
			</ul>
		</div>
	</div>

	<div id="centerBox">
		<div class="name"></div>
		<div class="price"></div>
		<img src="images/meal_ayu_1.jpg?190522" />
	</div>

	<div id="list2">
		<div class="wrap">
			<ul>
				<li><img src="images/meal_6.jpg?190522" data-url="images/meal_6.jpg" data-name="ほたるいか 刺身" data-price="0" /></li>
				<li><img src="images/meal_7.jpg?190522" data-url="images/meal_7.jpg" data-name="山賊焼き" data-price="0" /></li>
				<li><img src="images/meal_8.jpg?190522" data-url="images/meal_8.jpg" data-name="とり貝 刺身" data-price="0" /></li>
				<li><img src="images/meal_9.jpg?190522" data-url="images/meal_9.jpg" data-name="ふきのとうの天ぷら" data-price="0" /></li>
				<li><img src="images/meal_10.jpg?190522" data-url="images/meal_10.jpg" data-name="高野豆腐の揚げ出し" data-price="0" /></li>
				<li><img src="images/sake_2.jpg?190522" data-url="images/sake_2.jpg" data-name="お酒" data-price="0" /></li>
				<li><div class="partition"></div></li>
			</ul>
		</div>
	</div>


	<div id="oshinagaki">
		<div class="gray-bar"></div>
		<img class="header" src="images/menu_oshinagaki_b.png" title="お品書き" />

		<div class="bg">
			<div class="list">
				<img src="images/oshinagaki.png?190802" title="お品書き" />
			</div>
		</div>
	</div>




	<div id="location">
		<div class="gray-bar"></div>
		<img class="header" src="images/menu_tenpo_b.png" title="店舗情報" />
		
		<div class="imgs">
			<div><img src="images/ayu_2_450.jpg?190522"></div>
			<div><img src="images/ayu_3_450.jpg?190522"></div>
			<div><img src="images/ayu_1_450.jpg?190522"></div>
		</div>
		
		<div class="clearfix"></div>
		
		<div class="info">
			<h3>酒処 <img class="logo" src="images/ayukawa-logo_r.png" title="あゆ川" /> (あゆ川)</h3>
			<ul>
				<li>営業時間: 17:30 ～ 23:00 / 定休日: 日曜日 と 第一月曜日</li>
				<li>電話番号: <a href="tel:0265-73-6211">0265-73-6211</a></li>
				<li>店舗場所: 〒396-0024 長野県伊那市坂下3309</li>
			</ul>
		</div>

		<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d202.14474510031795!2d137.96168036790255!3d35.84125624394103!2m1!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71a6f11c2bce62fa!2z44GC44KG5bed!5e0!3m2!1sja!2sjp!4v1462786952611" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>

		<div id="fb-root"></div>
		<script>(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.0';
			fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));</script>

		<div>
			<div class="fb-page" data-href="https://www.facebook.com/ayukawa.ina" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
				<blockquote cite="https://www.facebook.com/ayukawa.ina" class="fb-xfbml-parse-ignore">
					<a href="https://www.facebook.com/ayukawa.ina">酒処 あゆ川</a>
				</blockquote>
			</div>
		</div>
	</div>


</div><!-- end container -->

<footer>
	<div class="wrap">
		<div class="left">
			<div>
				<img src="images/ayukawa-logo_r.png" title="あゆ川">
			</div>
		</div>

		<div class="right">
			<div class="background"></div>
			<div class="message">
				<p>お気軽にお越しください。</p>
				<p>お待ちしております。</p><br />
				<p>ご予約・お問い合わせ:</p>
				<p><a href="tel:0265-73-6211">0265-73-6211</a></p>
			</div>
			<div class="copy"><span>&copy; </span>酒処 あゆ川</div>
		<div class="clearfix"></div>
		</div>
			</div>
</footer>



</body>
</html>
