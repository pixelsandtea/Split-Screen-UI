<?php	
	$currentAgent = $_SERVER['HTTP_USER_AGENT'];
	$mobileAgents = array('w3c ','acs-','alav','alca','amoi','audi','avan','benq','bird','blac','blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno','ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-','maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-','newt','noki','palm','pana','pant','phil','play','port','prox','qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar','sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-','tosh','tsm-','upg1','upsi','vk-v','voda','wap-','wapa','wapi','wapp','wapr','webc','winw','winw','xda ','xda-');
	$isMobile = '';
	if(in_array($currentAgent,$mobileAgents,true) || stripos($currentAgent,'iphone') || stripos($currentAgent,'ipod') || stripos($currentAgent,'ipad') || stripos($currentAgent,'windows mobile') || stripos($currentAgent,'android') || stripos($currentAgent,'msie 6') || stripos($currentAgent,'msie 7') || stripos($currentAgent,'msie 8')){
		$isMobile = true;
		exit();
	}
	else{
		$isMobile = false;
	}
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Split-Screen UI Demo</title>
	<link rel="stylesheet" href="stylesheet.css">
    <!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<?php
		if(!$isMobile){
			echo "<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'></script>
			<!--[if lt IE 7]><script type='text/javascript' src='scripts/sfhover.js'></script><![endif]-->
			<script type='text/javascript' src='scripts/jquery.easing.1.3.js'></script>
			<script type='text/javascript' src='scripts/split-screen-ui.js'></script>
			$(document).ready(function(){
				/***** ACCESSIBLE DROP-DOWN NAV MENU *****/
				$('nav ul li a').css({position: 'static'});
				$('nav ul ul').siblings('a').addClass('menuParent');
				$('nav ul li ul li a').focus(function(){
					$(this).parents('.parent').addClass('navFirstChild');
				});
				$('nav ul ul li a').focus(function(){
					$(this).parents('.children').addClass('navNextChild');
				});
				$('nav ul li ul li a').blur(function(){
					$(this).parents('.parent').removeClass('navFirstChild');
				});
				$('nav ul ul li a').blur(function(){
					$(this).parents('.children').removeClass('navNextChild');
				});
			});";
		}
	?>
</head>
<body>
<header class="container">
	<nav>
    	<ul>
			<li><a href="#area1" id="navArea1">My Portfolio</a></li>
			<li><a href="#area2" id="navArea2">About The Split-Screen UI</a></li>
			<li><a href="#area3" id="navArea3">FAQ</a></li>
			<li><a href="#area4" id="navArea4">Contact Me</a></li>
			<li id="panelOptions">
				<a>Panel Layout Options</a>
				<ul class="parent">
					<li><a href="#" id="showAll"><div class="icon"><div class="subIcon subIconQuarter navArea1Icon"></div><div class="subIcon subIconQuarter navArea2Icon"></div><div class="subIcon subIconQuarter navArea3Icon"></div><div class="subIcon subIconQuarter navArea4Icon"></div></div>Show All</a></li>
					<li><a href="#" id="hideAll"><div class="icon" id="hideAllIcon"></div>Hide All</a></li>
            		<li><a href="#" id="option3"><div class="icon"><div class="subIcon subIconWide navArea1Icon"></div><div class="subIcon subIconWide navArea4Icon"></div></div>Portfolio Wide, Contact Wide</a></li>
            		<li><a href="#" id="option4"><div class="icon"><div class="subIcon subIconTall navArea1Icon"></div><div class="subIcon subIconTall navArea4Icon"></div></div>Portfolio Tall, Contact Tall</a></li>
            		<li><a href="#" id="option5"><div class="icon"><div class="subIcon subIconWide navArea1Icon"></div><div class="subIcon subIconWide navArea3Icon"></div></div>Portfolio Wide, FAQ Wide</a></li>
            		<li><a href="#" id="option6"><div class="icon"><div class="subIcon subIconTall navArea1Icon"></div><div class="subIcon subIconTall navArea2Icon"></div></div>Portfolio Tall, About Tall</a></li>
            		<li><a href="#" id="option7"><div class="icon"><div class="subIcon subIconWide navArea2Icon"></div><div class="subIcon subIconWide navArea4Icon"></div></div>About Wide, Contact Wide</a></li>
            		<li><a href="#" id="option8"><div class="icon"><div class="subIcon subIconTall navArea3Icon"></div><div class="subIcon subIconTall navArea2Icon"></div></div>About Tall, FAQ Tall</a></li>
            		<li><a href="#" id="option9"><div class="icon"><div class="subIcon subIconWide navArea2Icon"></div><div class="subIcon subIconWide navArea3Icon"></div></div>About Wide, FAQ Wide</a></li>
                	<li><a href="#" id="option10"><div class="icon"><div class="subIcon subIconTall navArea3Icon"></div><div class="subIcon subIconTall navArea4Icon"></div></div>FAQ Tall, Contact Tall</a></li>
            		<li><a href="#" id="option11"><div class="icon"><div class="subIcon subIconWide navArea1Icon"></div><div class="subIcon subIconQuarter navArea3Icon"></div><div class="subIcon subIconQuarter navArea4Icon"></div></div>Portfolio Wide, FAQ Small, Contact Small</a></li>
            		<li><a href="#" id="option12"><div class="icon"><div class="subIcon subIconTall navArea1Icon"></div><div class="subIcon subIconQuarter navArea2Icon"></div><div class="subIcon subIconQuarter navArea4Icon"></div></div>Portfolio Tall, About Small, Contact Small</a></li>
            		<li><a href="#" id="option13"><div class="icon"><div class="subIcon subIconWide navArea2Icon"></div><div class="subIcon subIconQuarter navArea3Icon"></div><div class="subIcon subIconQuarter navArea4Icon"></div></div>About Wide, FAQ Small, Contact Small</a></li>
            		<li><a href="#" id="option14"><div class="icon"><div class="subIcon subIconQuarter navArea1Icon"></div><div class="subIcon subIconTall navArea2Icon"></div><div class="subIcon subIconQuarter navArea3Icon navArea3IconUp"></div></div>About Tall, Portfolio Small, FAQ Small</a></li>
            		<li><a href="#" id="option15"><div class="icon"><div class="subIcon subIconQuarter navArea1Icon"></div><div class="subIcon subIconQuarter navArea2Icon"></div><div class="subIcon subIconWide navArea3Icon"></div></div>FAQ Wide, Portfolio Small, About Small</a></li>
            		<li><a href="#" id="option16"><div class="icon"><div class="subIcon subIconTall navArea3Icon"></div><div class="subIcon subIconQuarter navArea2Icon"></div><div class="subIcon subIconQuarter navArea4Icon"></div></div>FAQ Tall, About Small, Contact Small</a></li>
            		<li><a href="#" id="option17"><div class="icon"><div class="subIcon subIconQuarter navArea1Icon"></div><div class="subIcon subIconQuarter navArea2Icon"></div><div class="subIcon subIconWide navArea4Icon"></div></div>Contact Wide, Portfolio Small, About Small</a></li>
            		<li><a href="#" id="option18"><div class="icon"><div class="subIcon subIconQuarter navArea1Icon"></div><div class="subIcon subIconTall navArea4Icon"></div><div class="subIcon subIconQuarter navArea3Icon navArea3IconUp"></div></div>Contact Tall, Portfolio Small, FAQ Small</a></li>
				</ul>
			</li>
		</ul>
    </nav>
</header>
<div id="container">
	<div class="intro">
    	<img src="logo.png" id="logo" title="Addicted to Creativity." alt="Pixels &amp; Tea" />
		<h1>Split-Screen-UI Using jQuery</h1><p>Click anyone of the links in the navigation bar above, or all of them and try the different options from the drop-down menu too.</p><p>Cool isn't it? I think so anyway. This is probably my most "mad scientist" experiment yet, I know it's very different and unconvential though that's what being a designer is all about.</p><p>Speaking to the whole web development community, as much as I was always raised to share my toys, please don't over-use this, I'd hate for it to become known as that annoying split-screen web thingy. Otherwise, feel free to use it and adapt it as you wish. Ta very much!</p>
	</div>
    <div id="tutorial">
    	<h1>Installation Instructions</h1><p><strong>Step One: The Four Areas</strong><br />This currently only supports up to four areas, though it is possible to add more should you wish, though then it'll start getting more and more complicated and so I won't go into that right now. Add each area to the end of your document before the closing &lt;&#47;body&gt; tag using the following format:</p>
        <pre>
&lt;div class="area" id="area1"&gt;
	&lt;div class="content"&gt;
		&lt;!-- AREA1 CONTENT --&gt;
	&lt;&#47;div&gt;
&lt;&#47;div&gt;
            
&lt;div class="area" id="area2"&gt;
	&lt;div class="content"&gt;
		&lt;!-- AREA2 CONTENT --&gt;
	&lt;&#47;div&gt;
&lt;&#47;div&gt;&hellip;and so on&hellip;
        </pre>
        <p><strong>Step Two: Leave The Styling Alone</strong><br />At the moment all four areas will be sitting at the bottom of the page looking like an ordinary section of the page and you should leave that as is for the benefit of the "JavaScript Off" kinda folks.</p><p><strong>Step Three: Add The Supporting Files</strong><br />If you haven't got a '/scripts/' directory immediately below your root level then you should add one and copy the contents of this '/scripts/' directory to yours. And you'll also need the stylesheet.css stored at the root level too. This controls the styling for the insides of each area, ensuring that there's no overflow and no floating elements outside of the areas which is, aesthetically, very important. It also adds support for the drop-down navigation menu.</p><strong>Step Four: The Nav Menu</strong><br />Write your navigation menu just like I've done below:</p>
        <pre>
&lt;nav&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;a href="#area1" id="navArea1"&gt;My Portfolio&lt;&#47;a&gt;&lt;&#47;li&gt;
		&lt;li&gt;&lt;a href="#area2" id="navArea2"&gt;About The Split-Screen UI&lt;&#47;a&gt;&lt;&#47;li&gt;
		&lt;li&gt;&lt;a href="#area3" id="navArea3"&gt;FAQ&lt;&#47;a&gt;&lt;&#47;li&gt;
		&lt;li&gt;&lt;a href="#area4" id="navArea4"&gt;Contact Me&lt;&#47;a&gt;&lt;&#47;li&gt;
		&lt;li id="panelOptions"&gt;
			&lt;a&gt;Panel Layout Options&lt;&#47;a&gt;
			&lt;ul class="parent"&gt;
				&lt;li&gt;&lt;a href="#" id="showAll"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconQuarter navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea2Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea3Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;Show All&lt;&#47;a&gt;&lt;&#47;li&gt;
				&lt;li&gt;&lt;a href="#" id="hideAll"&gt;&lt;div class="icon" id="hideAllIcon"&gt;&lt;&#47;div&gt;Hide All&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option3"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconWide navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconWide navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;Portfolio Wide, Contact Wide&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option4"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconTall navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconTall navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;Portfolio Tall, Contact Tall&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option5"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconWide navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconWide navArea3Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;Portfolio Wide, FAQ Wide&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option6"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconTall navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconTall navArea2Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;Portfolio Tall, About Tall&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option7"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconWide navArea2Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconWide navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;About Wide, Contact Wide&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option8"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconTall navArea3Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconTall navArea2Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;About Tall, FAQ Tall&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option9"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconWide navArea2Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconWide navArea3Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;About Wide, FAQ Wide&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option10"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconTall navArea3Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconTall navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;FAQ Tall, Contact Tall&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option11"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconWide navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea3Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;Portfolio Wide, FAQ Small, Contact Small&lt;&#47;a&gt;&lt;&#47;li&gt;
        			&lt;li&gt;&lt;a href="#" id="option12"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconTall navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea2Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;Portfolio Tall, About Small, Contact Small&lt;&#47;a&gt;&lt;&#47;li&gt;
            			&lt;li&gt;&lt;a href="#" id="option13"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconWide navArea2Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea3Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;About Wide, FAQ Small, Contact Small&lt;&#47;a&gt;&lt;&#47;li&gt;
            			&lt;li&gt;&lt;a href="#" id="option14"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconQuarter navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconTall navArea2Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea3Icon navArea3IconUp"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;About Tall, Portfolio Small, FAQ Small&lt;&#47;a&gt;&lt;&#47;li&gt;
            			&lt;li&gt;&lt;a href="#" id="option15"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconQuarter navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea2Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconWide navArea3Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;FAQ Wide, Portfolio Small, About Small&lt;&#47;a&gt;&lt;&#47;li&gt;
            			&lt;li&gt;&lt;a href="#" id="option16"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconTall navArea3Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea2Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;FAQ Tall, About Small, Contact Small&lt;&#47;a&gt;&lt;&#47;li&gt;
            			&lt;li&gt;&lt;a href="#" id="option17"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconQuarter navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea2Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconWide navArea4Icon"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;Contact Wide, Portfolio Small, About Small&lt;&#47;a&gt;&lt;&#47;li&gt;
            			&lt;li&gt;&lt;a href="#" id="option18"&gt;&lt;div class="icon"&gt;&lt;div class="subIcon subIconQuarter navArea1Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconTall navArea4Icon"&gt;&lt;&#47;div&gt;&lt;div class="subIcon subIconQuarter navArea3Icon navArea3IconUp"&gt;&lt;&#47;div&gt;&lt;&#47;div&gt;Contact Tall, Portfolio Small, FAQ Small&lt;&#47;a&gt;&lt;&#47;li&gt;
			&lt;&#47;ul&gt;
		&lt;&#47;li&gt;
	&lt;&#47;ul&gt;
&lt;&#47;nav&gt;
        </pre>
        </div>
	</div>
	<div class="area" id="area1">
    	<div class="content">
        	<!--AREA 1 CONTENT-->
        </div>
	</div>
	<div class="area" id="area2">
    	<div class="content">
        	<!--AREA 2 CONTENT-->
		</div>
    </div>
	<div class="area" id="area3">
    	<div class="content">
        	<!--AREA 3 CONTENT-->
        </div>
	</div>
	<div class="area" id="area4">
    	<div class="content">
        	<!--AREA 4 CONTENT-->
		</div>
	</div>
</body>
</html>