$(document).ready(function() {
	var occurencesCounter=1;
	var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			 // caluculate height for dog image for mobile 
			 var heightValue=0;
			 heightCalculator();
			 //code for fixed header start
			var headerHeightValue=0;
			$(window).load(function(){
				headerHeightCalculator();
			});
			
			//code for fixed header end
			$(window).resize(function(){
			   heightCalculator();
				//code for fixed header start
				//headerHeightCalculator();
			  //code for fixed header end
			});
			function heightCalculator(){
				 heightValue=$('.gel-section .features').height();
				
				$('.dog-image-container img').css('height',heightValue);				
			}
			//code for setting margin-top due to fixed header
			
		//code for fixed header start
			function headerHeightCalculator(){
				headerHeightValue=$('header').outerHeight();
				//alert(headerHeightValue);
				$('.gel-section').css('margin-top',headerHeightValue);			
			}
		//code for fixed header end
			//filling dates funtion
			formDateFilling();

			function formDateFilling(){
				var monthsHtml="",daysHtml="",yearsHtml="";
				//filling  months
			for(var i=0;i<monthsArray.length;i++){
				monthsHtml=monthsHtml+"<li>"+monthsArray[i]+"</li>";
			}
			$('.months').html(monthsHtml);
			
			//filling days
			for(var i=1;i<32;i++){
				daysHtml=daysHtml+"<li>"+i+"</li>";
			}
			$('.days').html(daysHtml);

			//filling years
			for(var i=2010;i<2017;i++){
				yearsHtml=yearsHtml+"<li>"+i+"</li>";
			}
			$('.years').html(yearsHtml);
			}

			


			// add more occurneces
			$('.add-more-occurences').click(function(){
				occurencesCounter=occurencesCounter+1;
				console.log(occurencesCounter);
				if(occurencesCounter<4){					
					var txt='<div class="dropdown-list"><div class="month-list dropdown" ><p data-toggle="collapse" data-target="#month'+occurencesCounter+'">Month</p><ul id="month'+occurencesCounter+'" class="collapse dropdown-main-ul"><li><ul class="months"></li></ul></div><div class="day-list dropdown" ><p data-toggle="collapse" data-target="#day'+occurencesCounter+'">Day</p> <ul id="day'+occurencesCounter+'" class="collapse dropdown-main-ul"><li><ul class="days"></li></ul></div><div class="year-list dropdown" ><p data-toggle="collapse" data-target="#year'+occurencesCounter+'">Year</p> <ul id="year'+occurencesCounter+'" class="collapse dropdown-main-ul"><li><ul class="years"></li></ul></div></div>';
					$('.infection-occurences .dropdown-container').append(txt);
					formDateFilling();
				}
				else{
					$('.add-more-occurences span').css('ponter-events','none');
				}
					$('.dropdown ul ul li').click(function(){
					var valueOfSelection=$(this).text();
					$(this).parents('.dropdown').find('p').text(valueOfSelection);
					$(this).parents('.dropdown-main-ul').removeClass('collapse in');
					$(this).parents('.dropdown-main-ul').addClass('collapse');
					});
					$( "#infect li").unbind( "click" );			
				
			$('#infect li').bind("click", function(){ 
				var valueOfSelection=$(this).text();
				$(this).parent().parent().find('p').text(valueOfSelection);
				$(this).parent().removeClass('collapse in');
				$(this).parent().addClass('collapse');
			});
					$('.dropdown p').click(function(){					
					if(!$(this).siblings('.dropdown-main-ul').hasClass('in')){
						$('.in').not($(this).parents('.dropdown-main-ul')).removeClass('in');							
					}					
					});
					$( "#infect").siblings('p').unbind( "click" );
					$('#infect').siblings('p').bind("click", function(){ 
						$('.in').not($(this).siblings('#infect')).removeClass('in');
					});
				
				  
				});
			//dropdwon click
				$('.dropdown p').click(function(){					
					if(!$(this).siblings('.dropdown-main-ul').hasClass('in')){
						$('.in').not($(this).parents('.dropdown-main-ul')).removeClass('in');							
					}					
				});
				$( "#infect").siblings('p').unbind( "click" );
				$('#infect').siblings('p').bind("click", function(){ 
					$('.in').not($(this).siblings('#infect')).removeClass('in');
				});
				
			//dropdown selection			
			$('.dropdown ul ul li').click(function(){				
				$('.months,.years,.days').parents('.dropdown-main-ul').addClass('collapse');
				var valueOfSelection=$(this).text();
				$(this).parents('.dropdown').find('p').text(valueOfSelection);
				$(this).parents('.dropdown-main-ul').removeClass('collapse in');
				$(this).parents('.dropdown-main-ul').addClass('collapse');

			});			

			$( "#infect li").unbind( "click" );			
				
			$('#infect li').bind("click", function(){ 
				var valueOfSelection=$(this).text();
				$(this).parent().parent().find('p').text(valueOfSelection);
				$(this).parent().removeClass('collapse in');
				$(this).parent().addClass('collapse');
			});

			//scroll on click of navigation menu links
			$('.nav-link-wrapper a').click(function () {
				$('html, body').animate({
					/*if header is fixed start*/
					scrollTop: $($(this).attr('href')).offset().top-headerHeightValue
					/*if header is fixed end*/
					//scrollTop: $($(this).attr('href')).offset().top
				}, 500);
				return false;
			});

			//change of checkbox iamge on click
			$('.chkbox-container span,.chkbox-container p').click(function(){
				$(this).parent().toggleClass('optionSelected');	
				if($(this).parent().hasClass('optionSelected')){
					$(this).parent().find('img').attr('src','img/chk-chkbox.png');		
				}
				else{
					$(this).parent().find('img').attr('src','img/chkbox.png');			
				}
				
			});
			//print
			$('.print').click(function(){
				$('.print-section').show();
				var w = window.open();
				var html = $(".print-section").html();
				var text="<style>@media print{@page{size: auto;margin: 0mm;}}</style>"

				$(w.document.body).html(html+text);
				w.print();
				//$(w.document.body).html("");
				
			});

			//summary generation
			//summary generation
			$('.submit-container span').click(function(){
				$('.ask-vet-dog-container img').css('margin-top','-50px');
				$('.overlay').show();
				var symptomString="",seasonString="",dateString="";			
				$('.dropdown-list').each(function(i, obj) {					
					var month="",day="",year="";

					if($(obj).find('.month-list').find('p').text()){
						 month=$(obj).find('.month-list').find('p').text();
					}
					if($(obj).find('.day-list').find('p').text()){
						 day=$(obj).find('.day-list').find('p').text();
					}
					if($(obj).find('.year-list').find('p').text()){
						 year=$(obj).find('.year-list').find('p').text();
					}
					
					var suffix="", dateArray=[];
					switch(parseInt(day)) {
						case 1:
						case 21:
						case 31:
							suffix="st";
							break;
						case 2:
						case 22:
							suffix="nd";
							break;
						case 3:
						case 23:
							suffix="rd";
							break;
						default:
							suffix="th";
					}
					if(day=="Day"){
						suffix="";
					}
					if(month!="Month" && day!="Day" && year!="Year"){
						dateString= dateString+month+' '+ day + suffix+','+' '+year +', ';							
					}					
					else{
						dateString=dateString;
					}
					
				});
				var noOfEarInfections= $('.infection-number .dropdown p').text().replace(/\s|&nbsp;/g, '');
						
				$('.signs-select-list .optionSelected').each(function(i, obj) {
					var symptom=$(obj).find('p').text();
					if(symptom!=""){
						symptomString=symptomString + symptom +', ';	
					}
					else{
						symptomString=symptomString;
					}				
					
				
				});
				$('.seasons-select-list .optionSelected').each(function(i, obj) {
					var season=$(obj).find('p').text();
					
					if(season!=""){
						seasonString=seasonString+ season +', ';
					}

					else{
						seasonString=seasonString;
					}
				
				});
				 dateString = dateString.substr(0, dateString.length-2);

				if(symptomString==""){
						symptomString="";
				}
				else if(symptomString.lastIndexOf(',')== symptomString.indexOf(',')){
					symptomString=symptomString.substr(0, symptomString.length-2);
				}
				else{
					symptomString=symptomString.substr(0, symptomString.length-2);
				 symptomString = symptomString.slice( 0, symptomString.lastIndexOf( "," ) ) + " and"  + symptomString.substring( symptomString.lastIndexOf( "," )+1 );
				}
				if(seasonString==""){
						seasonString="";
				}
				else if(seasonString.lastIndexOf(',')== seasonString.indexOf(',')){
					seasonString=seasonString.substr(0, seasonString.length-2);
				}
				else{

					 seasonString=seasonString.substr(0, seasonString.length-2);
				 seasonString = seasonString.slice( 0, seasonString.lastIndexOf( "," ) ) + " and"  + seasonString.substring( seasonString.lastIndexOf( "," )+1 );
				}
				$('.summary-form').hide();
				$('.sum-dates').text('').text(dateString);
				$('.sum-symptoms').text('').text(symptomString);
				$('.sum-infections').text('').text(noOfEarInfections);
				$('.sum-seasons').text('').text(seasonString);
				$('.form-summary').show();
				$(window).scrollTop($('.form-summary').offset().top-headerHeightValue);
				
				

			});
		  
        });
		
		
		
		