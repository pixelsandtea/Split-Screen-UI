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
	
	/***** PREVENT IMAGES FROM BEING DRAGGED TO DESKTOP / DOWNLOADS FOLDER *****/
	document.ondragstart = function(){
		return false;
	};
	
	/***** CONTACT FORM VALIDATION *****/
	var contactName = $('#contactName');
	var contactNameInfo = $('#contactNameInfo');
	var email1 = $('#email1');
	var email1Info = $('#email1Info');
	var email2 = $('#email2');
	var email2Info = $('#email2Info');
	var subject = $('#subject');
	var subjectInfo = $('#subjectInfo');
	var message = $('#message');
	var messageInfo = $('#messageInfo');
	var humanCheck = $('#humanCheck');
	var mathsNumber1 = $('#mathsNumber1');
	var mathsNumber2 = $('#mathsNumber2');
	var answer = $('#answer');
	var answerInfo = $('#answerInfo');
	var send = $('#send');
	// adds valid and remove error classes to variables when validation functions are called
	function showError(obj,objInfo,msg){
		$("label[for='"+obj.attr('id')+"']").attr('class','error');
		obj.attr('class','error');
		objInfo.attr('class','error');
		objInfo.text(msg);
	};
	//adds valid and remove error classes to variables when validation functions are called
	function showValid(obj,objInfo,msg){
		$("label[for='"+obj.attr('id')+"']").attr('class','valid');
		obj.attr('class','valid');
		objInfo.attr('class','valid');
		objInfo.text(msg);
	};
	sendBlocking = false;
	nameFocusCount = 0;
	//On focus
	contactName.focus(function(){
		if(nameFocusCount < 1){
			nameFocusCount = nameFocusCount + 1;
			sendBlocking = true;
			setTimeout(function(){
				sendBlocking = false;
			}, 5000);
		}
		if($(this).val() == 'First and last names'){
			contactName.val('');			
		}
		contactName.blur(function(){
			$(this).val($(this).val().replace(/\s{2,}/g,' '));
			if($(this).val().charAt(0) === ' '){
				$(this).val($(this).val().substring(1));
			}
			if($(this).val().charAt($(this).val().length-1) === ' '){
				$(this).val($(this).val().slice(0,-1));
			};
			validateName();
		});
	});
	email1.focus(function() {
		if($(this).val() == 'example@your-domain.com') {
			email1.val('');
		}
		email1.blur(function(){
			$(this).val($(this).val().replace(/\s{1,}/g,''));
			validateEmail1();
		});
	});
	email2.focus(function() {
		if(email2.val() == 'example@your-domain.com') {
			email2.val('');			
		}
		email2.blur(function(){
			$(this).val($(this).val().replace(/\s{1,}/g,''));
			validateEmail2();
		});
	});
	$(email1).bind('cut copy paste',function(event){
		event.preventDefault();
		$('#contactForm p').html("Everything you see in this form is required for contacting me.<br /><span>Copy, cut and paste functions have been disabled in the 'email' inputs in order to reduce incorrect email contacts.</span>");
		return false;
	});
	$(email2).bind('cut copy paste',function(event){
		event.preventDefault();
		$('#contactForm p').html("Everything you see in this form is required for contacting me.<br /><span>Copy, cut and paste functions have been disabled in the 'email' inputs in order to reduce incorrect email contacts.</span>")
		return false;
	});
	subject.focus(function() {
		if($(this).val() == 'Whatever you like, but keep it clean.'){
			subject.val('');			
		}
		subject.keydown(function(){
			if(subject.val().length >= 10){
				subjectInfo.text(78 - subject.val().length + ' of 78 characters remaining.');
			}
			if(subject.val().length > 67){
				subjectInfo.attr('class','error');
			}
			if(subject.val().length <= 67){
				subjectInfo.removeClass('error');
			}
			else{
				subjectInfo.text('');
			}
		});
		subject.blur(function(){
			$(this).val($(this).val().replace(/\s{2,}/g,' '));
			if($(this).val().charAt(0) === ' '){
				$(this).val($(this).val().substring(1));
			}
			if($(this).val().charAt($(this).val().length-1) === ' '){
				$(this).val($(this).val().slice(0,-1));
			};
			validateSubject();
		});
	});
	message.focus(function(){
		if($(this).val() == 'All I need is a relatively concise explanation of what you want to know.'){
			message.val('');			
		}
		message.blur(function(){
			var intIndexOfMatch = message.val().indexOf('  ');
			while (intIndexOfMatch != -1){
  				message.val(message.val().replace('  ',' '));
  				intIndexOfMatch = message.val().indexOf('  ');
			}
			if($(this).val().charAt(0) === ' '){
				$(this).val($(this).val().substring(1));
			}
			if($(this).val().charAt($(this).val().length-1) === ' '){
				$(this).val($(this).val().slice(0,-1));
			};
			validateMessage();
		});
	});
	answer.focus(function(){
		if(answerInfo.text !== ''){
			$(this).addClass('refocused');
		}
		$(this).blur(function(){
			validateMaths();
		});
	});
	$('input:not(#answer)').keydown(function(){
		$(this).removeClass('error');
		$(this).removeClass('valid');
	});
	$('textarea').keydown(function(){
		$(this).removeClass('error');
		$(this).removeClass('valid');
	});
	//validation functions	
	function validateName(){
		if(contactName.val().length < 5 || contactName.val() == 'First and last names' || contactName.val().indexOf(' ') == -1){
			showError(contactName,contactNameInfo,'Both your first and last names are required.');
			if(contactName.val().length == 0 || contactName.val() == 'First and last names'){
				contactName.val('First and last names');
			}
			return false;
		}
		else {//if it's valid
			var firstName = contactName.val().split(' ',1);
			firstName = String(firstName);
			if(firstName.length < 3 || firstName.indexOf('.') !== -1){
				firstName = contactName.val();
			}
			showValid(contactName,contactNameInfo,'Hello ' + firstName + ', thanks for filling in this form.');
			return true;
		};
	};
	function validateEmail1() {		
		//if it's NOT valid
		if(email1.val().length == 0 || email1.val() == 'example@your-domain.com'){
			email1.val('example@your-domain.com');
			showError(email1,email1Info,'Your email address is required in order for me to reply to you.');
			return false;
		}
		//testing regular expression
		var emailFilter = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i;
		//if it's valid email
		if(emailFilter.test(email1.val())) {
			showValid(email1,email1Info,'');
			if(email2.hasClass('error') || email2.hasClass('valid')){
				validateEmail2();
			}
			return true;
		}
		else{
			showError(email1,email1Info,"This email address has an invalid format, please double-check you've typed it correctly.");
			return false;
		};
	};
	function validateEmail2(){
		if(email2.val().length == 0 || email2.val() == 'example@your-domain.com'){
			email2.val('example@your-domain.com');
			showError(email2,email2Info,"This must match the previous email entry.");
			return false;
		}
		if(email1.val() !== email2.val()){
			showError(email2,email2Info,"This email address does not match it's first instance, please double-check you've typed it correctly in both fields.");
			return false;
		}
		else{
			showValid(email2,email2Info,'');
			return true;
		};
		validateEmail1();
	};
	function validateSubject(){
		if(subject.val().length < 2 || subject.val() == 'Whatever you like, but keep it clean.'){
			subject.val('Whatever you like, but keep it clean.');
			showError(subject,subjectInfo,"Your message requires a subject at least two characters long.");
			return false;
		}
		else{
			showValid(subject,subjectInfo,subjectInfo.text());
			return true;
		}
	}
	function validateMessage(){
		//it's NOT valid
		if(message.val().length == 0 || message.val() == 'All I need is a relatively concise explanation of what you want to know.'){
			message.val('All I need is a relatively concise explanation of what you want to know.');
			showError(message,messageInfo,'You need to write something in this box.');
			return false;
		}
		if(message.val().length < 10 || message.val().indexOf(' ') == -1){
			showError(message,messageInfo,'Please be more specific.');
			return false;
		}
		//it's valid
		else{
			showValid(message,messageInfo,'');
			return true;
		};
	};
	function validateMaths(){
		if(answer.val().length < 1){
			showError(answer,answerInfo,"It's a neccessary check. I like my contacts to be human.");
			return false;
		}
		realAnswer = parseInt(mathsNumber1.html()) + parseInt(mathsNumber2.html());
		userAnswer = parseInt(answer.val());
		if(isNaN(userAnswer)){
			showError(answer,answerInfo,"This isn't algebra, please answer using numbers only.");
			return false;
		}
		if(userAnswer != realAnswer){
			showError(answer,answerInfo,"Sorry that's an incorrect answer, please try again.");
			return false;
		}
		else{
			showValid(answer,answerInfo,'');
			return true;
		}
	};
	//On submit
	$('#contactForm').submit(function(){
		if(validateName() & validateEmail1() & validateEmail2() & validateWeb() & validateSubject() & validateMessage() & validateMaths()){
			if(humanCheck.val().length == 0 && sendBlocking === false){
				return true;
			}
			else{
				window.location.href = "http://www.google.com";
			};
		}
		else{
			return false;
		}
	});
});