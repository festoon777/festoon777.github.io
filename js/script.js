function init_gals()
{
	///////// gallery	
	$('.photo1').find('span').css({opacity:0});	
	$('.photo1 > a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.5},400);								
	}, function(){
		$(this).find('span').stop().animate({opacity:0},400);								
	});	
	
	///////// gallery	
	$('.video1').find('span').css({opacity:0});	
	$('.video1 > a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.5},400);								
	}, function(){
		$(this).find('span').stop().animate({opacity:0},400);								
	});
	
} //init_gals() end

function showSplash(){
	setTimeout(function () {
		$('.splash').css({display:'block'}).stop().animate({opacity:1},800,'swing');
		$('.kand').stop().animate({opacity:0},800,'swing', function(){ $(this).css({display:'none'}); });
	}, 500);
	
};
function hideSplash(){ 

  	$('.splash').stop().animate({opacity:0},800,'swing', function(){ $(this).css({display:'none'}); });
	$('.kand').css({display:'block'}).stop().animate({opacity:1},800,'swing');
   
};
function hideSplashQ(){	

	$('.splash').css({display:'none', opacity:0});
	$('.kand').css({display:'block', opacity:1});
	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});
	
	/////// icons
	$(".icons li").find("a").css({opacity:0.3});
	$(".icons li a").hover(function() {
		$(this).stop().animate({opacity:1 }, 400, 'easeOutBack');		    
	},function(){
	    $(this).stop().animate({opacity:0.3 }, 400, 'easeOutBack' );		   
	});
	
	// slider
	$('.slider')._TMS({
			show:0,
			pauseOnHover:false,
			duration:400,
			preset:'diagonalExpand',
            easing:"easeInOutExpo",
			pagination:true,//'.pagination',true,'<ul></ul>'
			pagNums:false,
			slideshow:5000,
			numStatus:false,
			banners:'custom',    // false 'fromLeft', 'fromRight', 'fromTop', 'fromBottom', 'fade'
			waitBannerAnimation:true,
			bannerEasing:'easeInOutExpo',
			bannerDuration:1000
	});	
	
	
		
 });  ////////




$(window).load(function() {
						
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 11,
		verticalDragMinHeight: 152,
		verticalDragMaxHeight: 152
	});	
	
	////// submenu
	$('ul#menu').superfish({
      delay:       600,
      animation:   {opacity:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });
	

	
	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',top:-600});
		   $('.kand').css({display:'none',opacity:0});
        },
        actFu:function(_){
			if(_.curr){
				_.curr.css({display:'block', top:-600}).stop().animate({top:0},800, 'easeInOutExpo');	                
			}   
			if(_.prev){
				_.prev.stop().animate({top:600},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
			}
            		
			//console.log(_.pren, _.n);			
            if ( (_.n == 0) && (_.pren != -1) ){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
            }
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_HOME',
        hoverIn:function(li){            
			$('> a .txt1',li).stop().animate({top:50},400,'easeOutExpo');
			$('> a .txt2',li).stop().animate({top:0},400,'easeOutExpo');
        },
        hoverOut:function(li){  
		     if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('> a .txt1',li).stop().animate({top:0},400,'easeOutExpo');
				$('> a .txt2',li).stop().animate({top:-50},400,'easeOutExpo'); 
			 };			       
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});

	}, 0);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});