//---- Variable Declarations-----//
var but1 = $('button').eq(0);
var $window = $(window);
var $document = $(document);
var header = $('header');
var bgslide = $('div#slideshow'); 
var shareBut = $('#firDiv a');
var collCat = $('div#mainDiv');
var imgSlide = $('div#imgslide');
var fslbut = imgSlide.children().eq(0);
var sslbut = fslbut.next();
var dots = $('div#imgslide .dot');
var iconTop = $('header ul li#third img');
var sebut = $('header ul li#fourth button');
var sebar = $('header ul li#fourth input[type="text"]');
var textslide = $('#inforight .rightinfos');
var collrols = $('.collect .collects');
var footer = $('footer');
// ------------------------------//
// Animations and Transitions ---//
	
$(function(){

	// $('html, body').scrollTop(0);
	// header.hide().slideDown(1000);
	// bgslide.hide().delay(1000).fadeIn(1500);
	// shareBut.hide().delay(2000).fadeIn(500);
	// collCat.hide().delay(3000).fadeIn(50);
	// if($window.scrollTop() > 800)
	// {
	// 	header.show().slideUp(600);
	// }

  });
//-------------------------------//
// Image Slide Start
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);
//Image Slide End

//Smooth Slid function----------//

  $("a").eq(0).on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
		
      // Store hash
      var hash = this.hash;
      console.log($(this).offset())
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
//-----------------------------//
//imgSlide Start--------------//
	var count = 1;
	dots.eq(count-1).css('backgroundColor','#4d4d4d');
	autoPlay();
		sslbut.on('click',function(e)
		{
			count++;
			imgSlide.css({
				'backgroundImage': 'url("Images/slide/2 ('+count+').jpg")',
				'transition':' 0.6s ease'
			});
			 
			dots1(count-1);

			if(count>14) {count = 0}
			
		});
		fslbut.on('click', function(e)
		{	
			count--;
			imgSlide.css({
				'backgroundImage': 'url("Images/slide/2 ('+count+').jpg")',
				'transition':' 0.6s ease'
			});
			console.log(count);
			dots1(count-1); 	
			if(count<2){count = 16}
		});

		function dots1(num)
		{	
			dots.css('backgroundColor','#bbb');
			dots.eq(num).css('backgroundColor','#4d4d4d');
		}
		
		dots.on('click',function(e)
		{
			
			var ids = $('div#imgslide #'+count+'');
			ids.css('backgroundColor','#bbb');
			$(this).css('backgroundColor','#4d4d4d');
			count = $(this).attr('id');

			imgSlide.css({
				'backgroundImage': 'url("Images/slide/2 ('+count+').jpg")',
				'transition':' 0.6s ease'
			});
		});
		var another = 1;
	
		function autoPlay()
		{
		 
			dots.css('backgroundColor','#bbb');

			var ids = $('div#imgslide #'+count+'');
			ids.css('backgroundColor','#4d4d4d');
			imgSlide.css({
				'backgroundImage': 'url("Images/slide/2 ('+count+').jpg")',
				'transition':' 0.6s ease'
			});
			count++;
			if(count>14) {count = 1}
			setTimeout(autoPlay, 5000);
		}
//----------------------------//
// Image Hover----------------//
console.log(iconTop.attr('src'));
iconTop.on('mouseover',function(e)
{
	$(this).attr('src','Images/ico2.png');
})
iconTop.on('mouseleave',function(e)
{
	$(this).attr('src','Images/ico.png');
})

//----------------------------//
// serarch hover--------------//

sebut.on('mouseover', function(e)
{
	sebar.css({'border':'1px solid #00996b','border-width':'1px 0px 1px 0px'})
})
sebut.on('mouseleave', function(e)
{
	sebar.css({'border':'1px solid white'})
})
sebar.on('focus',function(e)
{	
	$(this).css({
		'width': '300px',
		'transitionDuration' :'.5s'
		})
})
sebar.on('blur', function()
{
	$(this).css({
		'width': '150px',
		'transitionDuration' :'.5s'
		})
})
//---------------------------//

// Slide Texts ---------------//

	textslide.on('click',function()
	{
		$(this).animate({
			'marginLeft': '+=50%',

		},500,'linear',function()
		{
			$(this).remove();
			
		})
		console.log('clicked');
	})

//---------------------------//


//--Try Outs-----------------//
	for(var i=0;i<=6;i++)
	{
		var y = i+1
		collrols.eq(i).css({
			'backgroundImage':'url("Images/pics/1 ('+y+').jpg")',
			'backgroundSize' : '120% auto',
			'backgroundRepeat': 'no-repeat'

		});
	}



//---------------------------//
//- Footer Start-------------//

	var $width = $document.height();

	var newwidth = $width - footer.height();


	// $window.on('scroll',function(e)
	// {
	// 	console.log('windows width: '+ $width);
	// 	console.log('windows.width - fiiter: '+ newwidth);
	// 	console.log($(this).scrollTop());



	// 	if($(this).scrollTop() >= 2550)
	// 	{
	// 		footer.slideDown();
	// 	}
	// 	else
	// 	{
	// 		footer.slideUp();
	// 	}
	// 	sebar.attr('placeholder',$width +"+"+newwidth+"+"+$(this).scrollTop());
	// })



//---------------------------//