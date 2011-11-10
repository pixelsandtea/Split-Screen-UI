/*************************************************************************************
The "Split-Screen UI" was developed as one-page website solution allowing the user to choose from several layout options while being able to see all the information they want to all at once.
Copyright (C) 2011 Benjamin Green, http://pixelsandtea.com

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Pixels & Tea, hereby disclaims all copyright
interest in the program "Split-Screen UI"
written by Benjamin Green.

signature of Benjamin Green, 4 November 2011
Pixels & Tea, Founder
**************************************************************************************/
$(document).ready(function(){
	var area1 = $('#area1');
	var area2 = $('#area2');
	var area3 = $('#area3');
	var area4 = $('#area4');
	$('#hideAll').parent('li').hide();
	$('nav').css('width', '657px'); $('nav li#panelOptions').show(); /* panel options hidden if javascript is disabled */
	$('.area').css('position', 'fixed'); /* define the css positioning using jquery so if the user has javascript disabled, these elements will sit comfortably at the bottom without overlapping  */
	$(area1).css('width', '0px', 'height', '0px');
	$(area1).css('top', '-1px');
	$(area1).css('left', '-2px');
	$(area2).css('width', '0px', 'height', '0px');
	$(area2).css('top', '-1px');
	$(area2).css('right', '-2px');	
	$(area3).css('width', '0px', 'height', '0px');
	$(area3).css('bottom', '-1px');
	$(area3).css('left', '-2px');
	$(area4).css('width', '0px', 'height', '0px');
	$(area4).css('bottom', '-1px');
	$(area4).css('right', '-2px');
	var ie6 = (navigator.appName == 'Microsoft Internet Explorer' && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf('MSIE 6.0') != -1);
	if(ie6){
		$(window).scroll(function() { /* ie6 fix for 'position:fixed' */
    		$('header').css('position','absolute');
			$('header').css('top', $(this).scrollTop() -2);
			$(area1).css('position', 'absolute');
			$(area1).css('top', $(this).scrollTop() -1);
			$(area1).css('left', $(this).scrollLeft() -2);
			$(area2).css('position', 'absolute');
			$(area2).css('top', $(this).scrollTop() -1);
			$(area2).css('right', $(this).scrollLeft() -2);
			$(area3).css('position', 'absolute');
			$(area3).css('bottom', $(this).scrollTop() -1);
			$(area3).css('left', $(this).scrollLeft() -2);
			$(area4).css('position', 'absolute');
			$(area4).css('bottom', $(this).scrollTop() -1);
			$(area4).css('right', $(this).scrollLeft() -2); /* the 4 areas must be positioned slightly off-screen to keep the borders that have been defined in css from showing when those areas are minimized */
		});
	}
	$('nav a').click(function(){
		callerID = $(this).attr('id');
		if(callerID !== 'hideAll'){
			$('body').css('overflow','hidden');
		}
		else{
			$('body').css('overflow','auto');
		}
	});
	function areaSize(area1Width,area1Height,area1Overflow,area2Width,area2Height,area2Overflow,area3Width,area3Height,area3Overflow,area4Width,area4Height,area4Overflow,option,animate){
		$(area1).animate({width: area1Width}, {queue:false, duration: 1100, easing: 'easeInOutCubic'});
		$(area1).animate({height: area1Height}, {queue:false, duration: 1100, easing: 'easeInOutCubic'});
		$(area2).animate({width: area2Width}, {queue:false, duration: 1100, easing: 'easeInOutCubic'});
		$(area2).animate({height: area2Height}, {queue:false, duration: 1100, easing: 'easeInOutCubic'});
		$(area3).animate({width: area3Width}, {queue:false, duration: 1100, easing: 'easeInOutCubic'});
		$(area3).animate({height: area3Height}, {queue:false, duration: 1100, easing: 'easeInOutCubic'});
		$(area4).animate({width: area4Width}, {queue:false, duration: 1100, easing: 'easeInOutCubic'});
		$(area4).animate({height: area4Height}, {queue:false, duration: 1100, easing: 'easeInOutCubic'});
		setTimeout(function(){
			$(area1).css('overflow-y', area1Overflow);
			$(area2).css('overflow-y', area2Overflow);
			$(area3).css('overflow-y', area3Overflow);
			$(area4).css('overflow-y', area4Overflow);
		},1101);
		$('nav li#panelOptions li').show();
		if(option!=='all'){
			$(option).parent('li').hide();
		}
		$('nav li#panelOptions li').css('margin-top',0);
		$('nav li#panelOptions li:visible:first').css('margin-top',2);
	}
	$('#showAll').click(function(){
		areaSize(window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto','#showAll');
	});
	$('#hideAll').click(function(){
		areaSize(0,0,'hidden',0,0,'hidden',0,0,'hidden',0,0,'hidden','#hideAll');
	});
	$('#navArea1').toggle( 
		function(){
			areaSize(window.innerWidth,window.innerHeight,'auto',0,0,'hidden',0,0,'hidden',0,0,'hidden','all');
		}, 
		function(){
			$('#hideAll').click();
		} 
	);
	$('#navArea2').toggle( 
		function(){
			areaSize(0,0,'hidden',window.innerWidth,window.innerHeight,'auto',0,0,'hidden',0,0,'hidden','all');
		},
		function(){
			$('#hideAll').click();
		} 
	);
	$('#navArea3').toggle( 
		function(){
			areaSize(0,0,'hidden',0,0,'hidden',window.innerWidth,window.innerHeight,'auto',0,0,'hidden','all');
		},  
		function(){
			$('#hideAll').click();
		} 
	);
	$('#navArea4').toggle( 
		function(){
			areaSize(0,0,'hidden',0,0,'hidden',0,0,'hidden',window.innerWidth,window.innerHeight,'auto','all');
		}, 
		function(){
			$('#hideAll').click();
		} 
	);
	/* the advanced stuff */
	$('#option3').click(function(){// area1 wide, area4 wide
		areaSize(window.innerWidth,window.innerHeight*0.5,'auto',0,0,'hidden',0,0,'hidden',window.innerWidth,window.innerHeight*0.5,'auto','#option3');
	});
	$('#option4').click(function(){// area1 tall, area4 tall
		areaSize(window.innerWidth*0.5,window.innerHeight,'auto',0,0,'hidden',0,0,'hidden',window.innerWidth*0.5,window.innerHeight,'auto','#option4');
	});	
	$('#option5').click(function(){// area1 wide, area3 wide
		areaSize(window.innerWidth,window.innerHeight*0.5,'auto',0,0,'hidden',window.innerWidth,window.innerHeight*0.5,'auto',0,0,'hidden','#option5');
	});
	$('#option6').click(function(){// area1 tall, area2 tall
		areaSize(window.innerWidth*0.5,window.innerHeight,'auto',window.innerWidth*0.5,window.innerHeight,'auto',0,0,'hidden',0,0,'hidden','#option6');
	});
	$('#option7').click(function(){// area2 wide, area4 wide
		areaSize(0,0,'hidden',window.innerWidth,window.innerHeight*0.5,'auto',0,0,'hidden',window.innerWidth,window.innerHeight*0.5,'auto','#option7');
	});
	$('#option8').click(function(){// area2 tall, area3 tall
		areaSize(0,0,'hidden',window.innerWidth*0.5,window.innerHeight,'auto',window.innerWidth*0.5,window.innerHeight,'auto',0,0,'hidden','#option8');
	});
	$('#option9').click(function(){// area2 wide, area3 wide
		areaSize(0,0,'hidden',window.innerWidth,window.innerHeight*0.5,'auto',window.innerWidth,window.innerHeight*0.5,'auto',0,0,'hidden','#option9');
	});
	$('#option10').click(function(){// area3 tall, area4 tall
		areaSize(0,0,'hidden',0,0,'hidden',window.innerWidth*0.5,window.innerHeight,'auto',window.innerWidth*0.5,window.innerHeight,'auto','#option10');
	});
	$('#option11').click(function(){// area1 wide, area3 quarter, area4 quarter
		areaSize(window.innerWidth,window.innerHeight*0.5,'auto',0,0,'hidden',window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto','#option11');
	});
	$('#option12').click(function(){// area1 tall, area2 quarter, area4 quarter
		areaSize(window.innerWidth*0.5,window.innerHeight,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto',0,0,'hidden',window.innerWidth*0.5,window.innerHeight*0.5,'auto','#option12');
	});
	$('#option13').click(function(){// area2 wide, area3 quarter, area4 quarter
		areaSize(window.innerWidth,window.innerHeight*0.5,'auto',0,0,'hidden',window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto','#option13');
	});
	$('#option14').click(function(){// area2 tall, area1 quarter, area3 quarter
		areaSize(window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto',0,0,'hidden','#option14');
	});
	$('#option15').click(function(){// area3 wide, area1 quarter, area2 quarter
		areaSize(window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth,window.innerHeight*0.5,'auto',0,0,'hidden','#option15');
	});
	$('#option16').click(function(){// area3 tall, area2 quarter, area4 quarter
		areaSize(0,0,'hidden',window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto','#option16');
	});
	$('#option17').click(function(){// area4 wide, area1 quarter, area2 quarter
		areaSize(window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight*0.5,'auto',0,0,'hidden',window.innerWidth,window.innerHeight*0.5,'auto','#option17');
	});
	$('#option18').click(function(){// area4 tall, area1 quarter, area3 quarter
		areaSize(window.innerWidth*0.5,window.innerHeight*0.5,'auto',0,0,'hidden',window.innerWidth*0.5,window.innerHeight*0.5,'auto',window.innerWidth*0.5,window.innerHeight,'auto','#option18');
	});
	var justClicked = '';
	$('nav a').click(function(event){
		justClicked = '#'+$(this).attr('id');
		$('#justClicked').val(justClicked);
		this.blur();
	});
	$(window).resize(function(){
		$(justClicked).click();
    });
});