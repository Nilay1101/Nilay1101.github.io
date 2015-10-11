/**
    * Mobile
    * Responsive Menu
    * Header Fixed
    * Project Isotope
    * Isotope
    * Animation
    * Process Bar
    * Counter
    * Process Circle
    * Contact Form
    * Gmap
    * View Port
    * Parallax
    * Preloader
    * Slider
    * Tabs
    * Toggle Left
    * Toggles
    * Carousel
    * Recent Carousel
    * Gallery Carousel
    * Team Carousel
    * Slide
    * Testimonial
    * Dropdown
    * Top Search 
    * Go Top
*/

;(function($) {

   'use strict'

   var htmlWeb = "";

    // Mobile
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // Responsive Menu
	var ResponsiveMenu = {

      menuType: 'desktop',

      initial: function(winWidth) {
         ResponsiveMenu.menuWidthDetect(winWidth);
         ResponsiveMenu.menuBtnClick();
         ResponsiveMenu.parentMenuClick();
      },

      menuWidthDetect: function(winWidth) {
         var currMenuType = 'desktop';

         if ( $( window ).width() <= 978 ) {
            currMenuType = 'mobile';
         } // change menu type

         if ( currMenuType !== ResponsiveMenu.menuType ) {
            ResponsiveMenu.menuType = currMenuType;

            if ( currMenuType === 'mobile' ) {
               var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
               $('#header').find('.header-wrap').after($mobileMenu);
               var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
               hasChildMenu.children('ul').hide();
               hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
               $('.btn-menu').removeClass('active');
             } 
             else {
               var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
               $desktopMenu.find('.submenu').removeAttr('style');
               $('#header').find('.wrap-nav').append($desktopMenu);
               $('.btn-submenu').remove();
             }
         } // clone and insert menu
      },

      menuBtnClick: function() {
         $('.btn-menu').on('click', function () {
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
            return false;
         });
      }, // click on moblie button

      parentMenuClick: function() {
         $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            if ( $(this).has('ul') ) {
               e.stopImmediatePropagation()
               $(this).next('ul').slideToggle(300);
               $(this).toggleClass('active');
            }
            return false;
         });
      } // click on sub-menu button
    };

    // Header Fixed
	var headerFixed = function() {
        $('header').css({"width" : "100%"});
        var bSpace, bBody;

        function defaultHeader () {
            if(!$('body').hasClass('boxed')) {
                if( $('body .top').length === 0 )
                    $('header').css("position" , "relative").stop().animate({
                        "top": "0", "width" : "100%"
                    },1000);
                else
                    $('header').css("position" , "absolute").stop().animate({
                        "top": $('body .top').height(), "width" : "100%"
                    },1000);
            }
            else {
                if( $('body .top').length === 0 ) {
                    $('header').css({"position" : "relative", "width" : $('body.boxed').width()}).stop().animate({
                        "top": "0"
                    },200);
                }
                else {
                    $('header').css("position" , "absolute").stop().animate({
                        "top": $('body .top').height(), "width" : "100%", "margin" : 0
                    },1000);
                }
            }
        }

        function setupFixHeader () {
            if(!$('body').hasClass('boxed')) {
                $('header').css("position" , "fixed").stop().animate({
                    "top": "0", "width" : "100%"
                },200);
            }
            else {
                if( $('body .top').length === 0 ) {
                    $('header').css({"width" : "100%"});
                    $('header').css({"position" : "fixed", "width" : $('body.boxed').width()}).stop().animate({
                        "top": "0"
                    },200);
                }
                else {
                    bSpace = ( document.documentElement.clientWidth - $('body.boxed').width() ) /2;
                    bBody = $('body.boxed').width();

                    $('header').css({"position" : "fixed", "width" : $('body.boxed').width()}).stop().animate({
                        'margin' : '0 ' + bSpace, "top": "0"
                    },200);
                }
            }
        }

        defaultHeader();
        if(document.documentElement.clientWidth >= 479) {
            if ( $('body').hasClass('header-sticky')) {
                $(window).scroll(function() {
                    if($(window).scrollTop() > 70 ) {
                        setupFixHeader();
                    }
                    else {
                        defaultHeader();
                    }
                });
            }
        }

        $( window ).resize(function() {
            if( $( window ).width() <= 978)
                defaultHeader();
        });
	};

    // Project Isotope
	var projectIsotope = function() {
		if ( $().isotope ) {
			var $container = $('.project-wrap');

			$container.imagesLoaded(function(){
				$container.isotope({
					itemSelector: '.project-item',
					transitionDuration: '1s'
				});
			});

			$('.project-filter li').on('click',function() {
				var selector = $(this).find("a").attr('data-filter');

				$('.project-filter li').removeClass('active');
				$(this).addClass('active');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	};

    // Isotope
    var blogIsotope = function() {
        if ( $().isotope ) {
            var $this = $('.section.blog-posts .items .row');
            $this.imagesLoaded(function(){
                $this.isotope({ filter: '*' });
            });
        };
    };

    // Animation
	var rollAnimation = function() {
        if ( isMobile.any() == null ) {
    		$('.idea-animation').each( function() {
    			var el = $(this),
    				rollClass  = el.data('animation'),
    				rollDelay  = el.data('animation-delay'),
    				rollOffset = el.data('animation-offset');

    			el.css({
    				'-webkit-animation-delay':  rollDelay,
    				'-moz-animation-delay':     rollDelay,
    				'animation-delay':          rollDelay
    			});
    			
    			el.waypoint(function() {
    				el.addClass('animated').addClass(rollClass);
    			},{
    				triggerOnce: true,
    				offset: rollOffset
    			});
    		});
        }
	};

    // Process Bar
	var progressBar = function() {
		$('.progress-bar').on('on-appear', function() {
			$(this).each(function() {
				var percent = $(this).data('percent');

				$(this).find('.progress-animate').animate({
					"width": percent + '%'
				},3000);

				$(this).parent('.roll-progress').find('.perc').addClass('show').animate({
					"width": percent + '%'
				},3000);
			});
		});
	};

    // Counter
	var counter = function() {
		$('.roll-counter').on('on-appear', function() {
			$(this).find('.numb-count').each(function() {
				var to = parseInt($(this).attr('data-to')), speed = parseInt($(this).attr('data-speed'));
				if ( $().countTo ) {
					$(this).countTo({
						to: to,
						speed: speed
					});
				}
			});
		});
	};

    // Process Circle
    var progressCircle = function() {
		$('.roll-progress-circle').on('on-appear', function() {
			$(this).each(function() {
				if ( $().easyPieChart && isMobile.any() == null ) {
		            $(this).easyPieChart({
			            lineWidth: 5,
			            barColor: '#000',
			            trackColor: '#fff',
			            scaleColor: false,
			            animate: 3000,
			            lineCap: 'square',
			            onStep: function(from, to, value) {
			                $(this.el).find('.inner-circle span:eq(1)').text(~~value);
			            }
		            });
		        }
			});
		});
    };

    // Contact Form
	var ajaxContactForm = function() {
      // http://www.bitrepository.com/a-simple-ajax-contact-form-with-php-validation.html
      $('.contact-form').each(function() {
         var $this = $(this); 
         $this.submit(function() {
            var str = $this.serialize();
            $.ajax({
               type: "POST",
               url:  $this.attr('action'),
               data: str,
               success: function(msg) {
                  // Message Sent? Show the 'Thank You' message and hide the form
                  var result;
                  if(msg == 'OK') {
                     result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
                  } else {
                     result = msg;
                  }
                  result = '<div class="result">' + result + '</div>';
                  $this.find('.note').html(result);
               }
            });
            return false;
         }); // submit

      }); // each contactform
    }; 

    // Gmap
    var gmapSetup = function() {
        if ( $().goMap ) {
            $("#map").goMap({ // load map
                markers: [{  
                    address: 'Carrington Dr, Lincoln LN6 0DE, United Kingdom', 
                    title: 'My company',
                }],
                scrollwheel: false, 
                disableDoubleClickZoom: false,
                zoom: 15,
                maptype: 'ROADMAP'
            });
        }
    };

    var ajaxSubscribe = {
        obj: {
            subscribeEmail    : $('#subscribe-email'),
            subscribeButton   : $('#subscribe-button'),
            subscribeMsg      : $('#subscribe-msg'),
            subscribeContent  : $("#subscribe-content"),
            dataMailchimp     : $('#subscribe-form').attr('data-mailchimp'),
            success_message   : '<div class="notification_ok">Thank you for joining our mailing list.<br>Please check your email for a confirmation link.</div>',
            failure_message   : '<div class="notification_error">There was a problem processing your submission.</div>',
            noticeError       : '<div class="notification_error">{msg}</div>',
            noticeInfo        : '<div class="notification_error">{msg}</div>',
            basicAction       : 'mail/subscribe.php',
            mailChimpAction   : 'mail/subscribe-mailchimp.php'
        },

        eventLoad: function() {
            var objUse = ajaxSubscribe.obj;

            $(objUse.subscribeButton).on('click', function() {
                if ( window.ajaxCalling ) return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if ( isMailchimp ) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },

        ajaxCall: function(action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                    subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function (responseData, textStatus, jqXHR) {
                    if ( responseData.status ) {
                        objUse.subscribeContent.fadeOut(500, function () {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                        case "email-required":
                            messageDiv.html(objUse.noticeError.replace('{msg}','Email is required.'));
                            break;
                        case "email-err":
                            messageDiv.html(objUse.noticeError.replace('{msg}','Email invalid.'));
                            break;
                        case "duplicate":
                            messageDiv.html(objUse.noticeError.replace('{msg}','Email is duplicate.'));
                            break;
                        case "filewrite":
                            messageDiv.html(objUse.noticeInfo.replace('{msg}','Mail list file is open.'));
                            break;
                        case "undefined":
                            messageDiv.html(objUse.noticeInfo.replace('{msg}','undefined error.'));
                            break;
                        case "api-error":
                            objUse.subscribeContent.fadeOut(500, function () {
                                messageDiv.html(objUse.failure_message);
                            });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Connection error');
                },
                complete: function (data) {
                    window.ajaxCalling = false;
                }
            });
        }
    };

    // View Port
	var detectViewport = function() {
		$('[data-waypoint-active="yes"]').waypoint(function() {
			$(this).trigger('on-appear');
		}, { offset: '90%', triggerOnce: true });
	};

    // Parallax
    var parallax = function() {
        if ( $().parallax && isMobile.any() == null ) {
            $('.form-search').parallax("50%", 0.4);
            $('.section.parallax2.parallax').parallax("50%", 0.4);
            $('.section.parallax1.parallax').parallax("50%", 0.4);
            //$('.parallax-bg2').parallax("50%", 0.5);
        }
    };

    // Preloader
    var removePreloader = function() {
        $('.loader').fadeOut('slow',function () {
            $(this).remove();
        });
    };

    // Slider
    var rollSlider = function() {
        if ( $().flexslider ) {
            $('.roll-slider').each(function() {
                var $this = $(this);
                var easing = ( $this.data('effect') == 'fade' ) ? 'linear' : 'easeInOutExpo';

                $this.find('.flexslider').flexslider({
                   animation      :  $this.data('effect'),
                   direction      :  $this.data('direction'), // vertical
                   pauseOnHover   :  true,
                   useCSS         :  false,
                   easing         :  'easeInOutQuint',
                   animationSpeed :  500,
                   slideshowSpeed :  10000,
                   controlNav     :  true,
                   directionNav   :  true,
                   slideshow      :  true,
                   prevText       :  '<div class="slide-prev"></div>',
                   nextText       :  '<div class="slide-next"></div>',
                   smoothHeight   :  true
                }); // flexslider
            });
        }
    };

    // Tabs
    var tabs = function() {
        $('.roll-tabs').each(function() {
            $(this).children('.content-tab').children().hide();
            $(this).children('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click', function(e) {  
                var liActive = $(this).index(),
                    contentActive = $(this).siblings().removeClass('active').parents('.roll-tabs').children('.content-tab').children().eq(liActive);

                contentActive.addClass('active').fadeIn('slow');
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.roll-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
                e.preventDefault();
            });
        });
    };

    // Toggle Left
    var toggles = function() {
        var args = {duration: 600};
        $('.roll-toggle .toggle-title.active').siblings('.toggle-content').show();

        $('.roll-toggle.enable .toggle-title').on('click', function() {
            $(this).closest('.roll-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.roll-accordion .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.roll-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion
    };

    // Toggles
    var toggles_1 = function() {
        var args = {easing : 'easeOutExpo', duration: 600};
        $('.roll-toggle .toggle-title.active').siblings('.toogle-content').show();
       
        $('.roll-toggle .toggle-title').on('click', function() {
            $(this).closest('.roll-toggle').find('.toggle-content').slideDown('slow');
            //$(this).toggleClass('active');
            $(this).closest('.roll-toggle').next().find('.toggle-content').slideToggle(args);
        });
    }

    // Carousel
    var rollCarousel = function() {
        $('.roll-carousel.courses-carousel').each(function(){
            if ( $().owlCarousel ) {
                var margin = $(this).data('margin');
                var item = $(this).data('item');               
                $(this).find('.owl-carousel').owlCarousel({
                    loop: true,
                    nav: true,
                    autoplay:true,                    
                    dots: false,                     
                    responsive:{
                        0:{
                            items: 1, margin: 0
                        },
                        767:{
                            items: 2, margin: margin
                        },
                        991:{
                            items: item, margin: margin
                        }
                    }
                });
            }
        });
    };

    // Recent Carousel
    var rollRecentCarousel = function() {
        $('.roll-carousel.recent-carousel').each(function(){
            if ( $().owlCarousel ) {
                $(this).find('.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: true,
                    dots: false, 
                    autoplay:true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 2
                        }
                    }
                });
            }
        });
    };

    // Gallery Carousel
    var galleryCarousel = function() {
        $('.roll-carousel.gallery-carousel').each(function(){
            if ( $().owlCarousel ) {
                $(this).find('.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: false,                     
                    autoplay:true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 2
                        },
                        991:{
                            items: 4
                        }
                    }
                });
            }
        });
    };

    // Team Carousel
    var teamCarousel = function() {
        $('.roll-carousel.team-carousel').each(function(){
            if ( $().owlCarousel ) {
                $(this).find('.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: true,
                    dots: false,                     
                    autoplay: false,                    
                    responsive:{
                        0:{
                            items: 1, margin: 0
                        },
                        767:{
                            items: 2
                        },
                        991:{
                            items: 4
                        }
                    }
                });
            }
        });
    };

    // Slide
    var beSmart_slider = function() {
      if ( $().flexslider ) {
        $('.bemart-slider').each(function() {
            var $this = $(this);
            var easing = ( $this.data('effect') == 'fade' ) ? 'linear' : 'easeInOutExpo';
            $this.find('.flexslider').flexslider({
               animation      :  $this.data('effect'),
               direction      :  $this.data('direction'), // vertical
               pauseOnHover   :  true,
               useCSS         :  false,
               easing         :  easing,
               animationSpeed :  500,
               slideshowSpeed :  5000,
               controlNav     :  false,
               directionNav   :  true,
               slideshow      :  true,
               smoothHeight   :  true
            }); // flexslider
         }); // or-slider each
      }
    };

    // Testimonial
    var testimonial = function() {
        if ( $().bxSlider ) {
            $('.testimonials.v2 ul').bxSlider({
                controls:false,
                speed: 1000,
                pager : false,
                animation: "slide",
                auto: true
            });
        }
    };

    // Dropdown
    var dropList = function() {
        $('.drop-list').each(function() {
            var menuDrop = $(this).children('.nav-dropdown'),
                activeDrop = $(this).find('.drop-wrap');

            menuDrop.on('click',function() {
                var drop = $(this).children('.dropdown');
                $('.drop-list .dropdown').removeClass('show');

                if ( drop.is(".show") ) {
                    //drop.removeClass('show');
                    activeDrop.removeClass('active');
                } else {
                    drop.addClass('show');
                    activeDrop.addClass('active');
                }

                return false;
            });

            $(document).on('click',function() {
                menuDrop.children('.dropdown').removeClass('show');
                activeDrop.removeClass('active');
            });
        });
    };

    // Twitter
    var twitter = function () {
        if ( $().tweet ) {
            $('.list-tiwtter').each(function () {
                var $this = $(this);
                $this.tweet({
                    username: $this.data('username'),
                    join_text: "auto",
                    avatar_size: null,
                    count: $this.data('number'),
                    template: "{text} {time}",
                    loading_text: "loading tweets...",
                    modpath: $this.data('modpath')      
                }); // tweet

                $this.ready( function () {
                    $('.list-tiwtter .tweet_list li').addClass('hide');
                    var twHtml = '', twLength = $('.widget-recent-tweets .tweet_list li').length;
                    for (var i = 0; i < twLength; i++) {
                        twHtml += $('.widget-recent-tweets .tweet_list li')[i].outerHTML;
                    }

                    $($('.list-tiwtter .tweet_list li')[0]).removeClass('hide');
                    $($('.list-tiwtter .tweet_list li')[1]).removeClass('hide');

                    $('.widget-recent-tweets .tweet_list').css(
                        'height', 
                            $($('.list-tiwtter .tweet_list li')[0]).outerHeight() + 
                            $($('.list-tiwtter .tweet_list li')[1]).outerHeight() + 'px'
                    );

                    setInterval(function () {
                        if( $('.widget-recent-tweets .tweet_list li').length === 2 )
                            $('.widget-recent-tweets .tweet_list').append(twHtml);

                        $($('.list-tiwtter .tweet_list li')[2]).removeClass('hide');

                        $('.widget-recent-tweets .tweet_list').css(
                            'height', 
                                $($('.list-tiwtter .tweet_list li')[1]).outerHeight() + 
                                $($('.list-tiwtter .tweet_list li')[2]).outerHeight() + 'px'
                        );

                        $('.widget-recent-tweets .tweet_list li:first-child').animate({
                            "padding-bottom" : "0","height": "0", "opacity":"0", "margin-top" : "-15px"
                        }, 1300, function () {
                            $($('.widget-recent-tweets .tweet_list li')[0]).remove();
                        })

                    }, 6000);
                });
            }); // lastest-tweets each
        };
    };

    // Calendar
    var calendar = function () {
        if($().datepicker)
            $('#datepicker').datepicker({inline: true});
    }

    // Retina Logos
    var retinaLogos = function() {
      var retina = window.devicePixelRatio > 1 ? true : false;

        if(retina) {
            $('.header .logo').find('img').attr({src:'./images/logo@2x.png',width:'176',height:'42'});
            $('.home-dark .header .logo').find('img').attr({src:'./images/logo_2@2x.png',width:'176',height:'42'});
            $('.home-3 .header .logo').find('img').attr({src:'./images/logo_3@2x.png',width:'176',height:'42'});

            $('.bottom .copyright a').find('img').attr({src:'./images/logo@2x.png',width:'176',height:'42'});
            $('.home-dark .bottom .copyright a').find('img').attr({src:'./images/logo_s_2@2x.png',width:'176',height:'42'});
            $('.home-3 .bottom .copyright a').find('img').attr({src:'./images/logo_s_3@2x.png',width:'176',height:'42'});
        }
    };

    // Top Search 
    var topSearch = function () {
        $('.top .contact-info li.search a').on('click', function () {
            if(!$('.top-search').hasClass( "show-search" ))
                $('.top-search').addClass('show-search');
            else
                $('.top-search').removeClass('show-search');
        });
    }

    var swClick = function () {
        function activeLayout () {
            $( ".switcher-container" ).on( "click", "a.un-activebox", function() {
                $(this).addClass('active');
                $('body').addClass('boxed');
                $('.header').css('width', '100%');
                projectIsotope();
            }).on( "click", "a.active.box", function() {
                $(this).removeClass('active').addClass('un-activebox');
                $('body').removeClass('boxed');
                return false;
            }).on( "click", "a.un-activemargin", function() {
                $(this).addClass('active');
                $('body').addClass('body-margin');
                return false;
            }).on( "click", "a.active.vmargin", function() {
                $(this).removeClass('active').addClass('un-activemargin');
                $('body').removeClass('body-margin');
                return false;
            }).on( "click", "a.sw-arrow", function() {
                $(this).addClass('active');
                $('.switcher-container .sw-form, .switcher-container .pattern').css('display', 'block');
                return false;
            }).on( "click", "a.sw-arrow.active", function() {
                $(this).removeClass('active');
                $('.switcher-container .sw-form, .switcher-container .pattern').css('display', 'none');
                return false;
            })          
        }

        function activePattern () {
            $('.sw-pattern').on('click', function () {
                $('body').css({'background': 'url("' + $(this).data('image') + '")', 'background-size' : '30px 30px' });
                return false
            })
        }

        activeLayout();
        activePattern();
    }

    var setColorText = function () {
        //set color for text in content
        if($('.infomation.text-center h3').length === 1) {
            var hiText = $('.infomation.text-center h3').closest('.section').css("background-color").toString();
            if(hiText === "rgb(91, 91, 91)")
                $('.infomation.text-center h3').css('color', "#fff");
        }
    }

    var responsiveVideo= function() {
        if ( $().fitVids ) {
            $('.container').fitVids();
        }
    };

    // Go Top
    var goTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        }); 
      
        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

   	// Dom Ready
	$(function() {
        ResponsiveMenu.initial($(window).width());
        $(window).resize(function() {
            ResponsiveMenu.menuWidthDetect($(this).width());
        });
        projectIsotope();
        blogIsotope();
        rollAnimation();
        progressBar();
        counter();
        progressCircle();
        ajaxContactForm();
        ajaxSubscribe.eventLoad();
        rollSlider();
        tabs();
        toggles();
        rollCarousel();
        rollRecentCarousel();
        beSmart_slider();
        testimonial();
        dropList();
        galleryCarousel();        
        teamCarousel();
	    detectViewport();
        calendar();
        twitter();
        retinaLogos();
        topSearch();
        headerFixed();
        swClick();
        setColorText();
        responsiveVideo();
        goTop();
        $(window).bind('load', function() {
            parallax();
			gmapSetup();
            removePreloader();
    	});
   	});
})(jQuery);