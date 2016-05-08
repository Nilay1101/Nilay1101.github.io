/*global jQuery:false */

/*
 * Kose - Fullscreen Portfolio HTML Template
 * By UXbarn
 * Themeforest Profile: http://themeforest.net/user/UXbarn?ref=UXbarn
 * Demo URL: http://themes.uxbarn.com/redirect.php?theme=kose_html
 * Created: February 17, 2014
 * Version: 1.1.1
 */

jQuery(document).ready(function($) {
	"use strict";
	
	// ---------------------------------------------- //
	// Global Read-Only Variables (DO NOT CHANGE!)
	// ---------------------------------------------- //
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
	var androidversion = parseFloat(ua.slice(ua.indexOf('android') + 8));
	var isSafari = !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome;
	var siteWidth = $(window).width();
	// ---------------------------------------------- //
	
	
	
	
	
	// ---------------------------------------------- //
	// Core Scripts
	// ---------------------------------------------- //

	// Initialize custom functions
	renderGoogleMaps();
	initMobileMenu();

	// Attach custom scrollbar
	attachCustomScrollbar();
	
	// Initialize Foundation framework
	$(document).foundation();
	
	// Force displaying tabs element after JS has been loaded
	$('#content-container .section-container').addClass('display-block');
	
	// This fix is only for IE
	if (msieversion() != '') {
		$('#content-toggle-buttons i').css('marginTop', '-2px');
	}
	
	// This fix is only for Safari
	if (isSafari) {
		$('#main-menu a.active, #main-menu a.active').addClass('safari-fix');
	}
	
	// Append show/hide notice div
	$('#side-footer-wrapper').append('<div id="scroll-down-notice">Swipe down for more <i class="icon ion-ios7-arrow-down"></i></div>');
	
	// Whether the current page has the content area + on lower screen res, show/hide the notice
	showHideScrolldownNotice();
	
	// Initially set sidebar footer depending on current screen resolution
	setSidebarFooter();
	
	// If current viewport is small (mobile), always display the content area even it is set as "hidden-content"
	displayContentAreaForMobile();
	
	
	
	/***** Menu *****/
	$('.sf-menu').superfish({
		animation : {
			opacity : 'show'
		},
		speed : 'normal',
		speedOut : 'normal',
		delay : 600	// 0.4 second delay on mouseout
	});
	
	
	
	// Initialize Full Screen Image/Slider
	var autoRotate = $('#full-scrn-slider').attr('data-auto-rotation'), 
		fullScrnSliderAutoAnimated = true, 
		fullScrnSliderAutoAnimatedDelay = 5000;
		
	if (autoRotate !== '0') {
		// Convert to milliseconds
		fullScrnSliderAutoAnimatedDelay = parseInt(autoRotate, 10) * 1000;
	} else {
		fullScrnSliderAutoAnimated = false;
	}
	
	var fullScrnSliderAnimation = $('#full-scrn-slider').attr('data-effect'); // crossfade, directscroll, cover-fade, uncover-fade
	var fullScrnSliderAnimationSpeed = 1000;
	
	$('#full-scrn-slider').imagesLoaded(function() {

		$('#full-scrn-slider').carouFredSel({
			responsive : true,
			swipe : true,
			width : '100%',
			onCreate : function() {

				// Hide loading icon
				$('#loading-bg').hide();

				// Display the slider
				$('.full-scrn-slide').stop().animate({
					opacity : 1,
				}, 800);

				// Stretch the slider's images (always stretch on all resolutions by default)
				$('.full-scrn-slide').each(function() {
					var originalImg = $(this).children('img');
					if (originalImg.length > 0 && originalImg.attr('src')) {
						
						var finalPath = originalImg.attr('src');
						
						// Create a new path for retina display (original filename + "@2x" as a suffix)
						if (Retina.isRetina()) {
							
							var imgSrc = $(originalImg).attr('src');
							var filename = imgSrc.replace(/^.*[\\\/]/, '');
							var path = imgSrc.split(filename)[0];
							
							var retinaFilename = filename.split('.')[0] + '@2x.' + filename.split('.')[1];
							var retinaPath = path + retinaFilename; 
							
							if (urlExists(retinaPath)) {
								finalPath = retinaPath;
							}
								
						}
						
						// Make it full screen
						$(this).css('background-image', 'url("' + finalPath + '")');
						originalImg.remove();
						
					}
				});
				
				/***** Animate caption *****/
				//var caption = $(this).find('.full-scrn-slide:first-child .slide-caption').not('.image-caption-style');
				if ($('#content-container').length == 0) {
					animateFullscreenCaption(true);
				}

			},
			items : {
			},
			scroll : {
				fx : fullScrnSliderAnimation,
				duration : fullScrnSliderAnimationSpeed,
				onBefore : function(data) {
					
					// Reset the caption style
					$('.slide-caption').removeAttr('style').addClass('reset');
					
					$('.slide-caption.image-caption-style').stop().animate({
						opacity : 0,
					}, 40);
					
				},
				onAfter : function(data) {
					
					/***** Animate caption *****/
					if (siteWidth > 1161) {
						
						// This "if" rule only applies to desktop resolution
						if (($('#content-container').length > 0 && isContentHidden) || $('#content-container').length == 0) {
							animateFullscreenCaption(false);
						}
						
					} else { // else, on mobile res, always run this func
						animateFullscreenCaption(false);
					}
				
				},
			},
			auto : {
				play : fullScrnSliderAutoAnimated,
				pauseOnHover : 'resume',
				timeoutDuration : fullScrnSliderAutoAnimatedDelay,
			},
			prev : {
			},
			next : {
			},
			pagination : {
				container : '#full-scrn-bullets',
				anchorBuilder : function(nr) {
					return '<a href="#' + nr + '"></a>';
				}
			},
		}, {
			transition : !(isAndroid), // if running on Android, set it to "false" for this CSS3 transition, otherwise "true"
		});
		
		// Make it center aligned
		$('#full-scrn-bullets').css('margin-left', (($('#full-scrn-bullets').width() / 2) * -1));

	});
	
	
	
	
	
	
	/***** Content Area *****/
	// If there is no content area (like on homepage), just reset the z-index out of this element making the slider bullets clickable
	if( $('#content-container').length == 0) {
		$('#root-container').css('zIndex', 'auto');
	}
	
	// Hide/Show Content
	var isContentHidden = false;
	
	$('#hide-toggle-button').click(function() {
		
		if( ! isContentHidden) {
			triggerContentAreaState('hide');
		} else {
			triggerContentAreaState('show');
		}
	});
	
	// If the content area is set as "hidden-content", so hide it
	if ($('#content-container').hasClass('hidden-content')) {
		triggerContentAreaState('hide');
	}
	
	function triggerContentAreaState(state) {
		
		if (state == 'hide') { // to hide the area
			
			$('#inner-content-container').getNiceScroll().hide();
			$('#content-container').stop().animate({
				opacity : 0,
			}, function() {
				
				$(this).css('display', 'none');
				
				// Remove z-index out of this element making the slider bullets clickable
				$('#root-container').css('zIndex', 'auto');
				
				// Display slider bullets (and caption, if any) when the content area is hidden
				$('#full-scrn-bullets').stop().animate({
					opacity : 1,
				});
				
				animateFullscreenCaption(false);
				
			});
			
			$('#hide-toggle-button').attr('class', 'rotated');
			
			isContentHidden = true;
			
		} else { // to display the area
			
			$('#inner-content-container').getNiceScroll().show();
			$('#content-container').css('display', 'block').stop().animate({
				opacity : 1,
			}).removeClass('hidden-content');
			
			// Set z-index back to the default value
			$('#root-container').css('zIndex', 2);
			
			// Hide slider bullets (and caption, if any) when the content area is displayed
			$('#full-scrn-bullets, .slide-caption').stop().animate({
				opacity : 0,
			});
			
			$('#hide-toggle-button').attr('class', '');
			
			// Trigger Isotope and recalculate the elements
			$('.uxb-port-element-wrapper').isotope();
			recalculatePortfolioHoverInfo();
			
			isContentHidden = false;
			
			recalculateContentArea();
			
		}
		
	}
	
	
	
	
	
	/***** Portfolio *****/
	
	// Run Isotope for portfolio list
	var container = $('.uxb-port-element-wrapper');

	$(container).each(function() {
		var container = $(this);
		var rootContainer = $(this).closest('.uxb-port-root-element-wrapper');

		$(container).imagesLoaded(function() {
			$(container).isotope({
				itemSelector : '.uxb-port-element-item',
			});
			
			// Hide loading icon
			$(rootContainer).find('.uxb-port-loading-text').css('display', 'none');

			// Display loaded wrapper
			$(container).closest('.uxb-port-loaded-element-wrapper').css({
				opacity : 1,
				height : 'auto',
				visibility : 'visible',
			});

			// Display the items one after another
			$(container).find('.uxb-port-element-item').each(function(index) {
				$(this).css('visibility', 'visible').delay(110 * index).animate({
					opacity : 1,
				}, 1);
			});
		});
		var filters = $(container).closest('.uxb-port-loaded-element-wrapper').find('.uxb-port-element-filters a');
		$(filters).click(function() {
			
			// Hide this first to make "nicescroll" works properly
			$('.uxb-port-element-item-hover').css('display', 'none');
			
			var selector = $(this).attr('data-filter');
			$(container).isotope({
				filter : selector
			}, onAnimationFinished);

			$(filters).removeClass('active');
			$(this).addClass('active');

			return false;

		});
		
		$(window).smartresize(function() {
			$(container).isotope();
		});

	});
	
	// Code to be executed after the animation finishes
	var onAnimationFinished = function(){
	
		// Display it back after finished animation
		$('.uxb-port-element-item-hover').css('display', 'block');
		
		recalculateContentArea();
		
	};
	
	recalculatePortfolioHoverInfo();
	
	
	
	
	
	/***** Image Slider *****/
	if (jQuery().flexslider) {

		var imageSlider = $('.image-slider-wrapper');
		imageSlider.each(function() {

			var autoRotate = $(this).attr('data-auto-rotation'), 
				imageSliderAutoAnimated = true, 
				imageSliderAutoAnimatedDelay = 10000;
				
			if (autoRotate !== '0') {
				// Convert to milliseconds
				imageSliderAutoAnimatedDelay = parseInt(autoRotate, 10) * 1000;
			} else {
				imageSliderAutoAnimated = false;
			}
			
			var imageSliderAnimation = $(this).attr('data-effect');
			var imageSliderAnimationSpeed = 700;
			
			$(this).imagesLoaded(function() {

				$(this).flexslider({
					animation : imageSliderAnimation,
					directionNav : false,
					contolNav : false,
					pauseOnAction : true,
					pauseOnHover : true,
					slideshow : imageSliderAutoAnimated,
					slideshowSpeed : imageSliderAutoAnimatedDelay,
					animationSpeed : imageSliderAnimationSpeed,
					selector : '.image-slider > li',
					initDelay : 2000,
					smoothHeight : true,
					start : function(slider) {

						var initFadingSpeed = 800;
						var initDelay = 0;
						// "slide" effect has some different transition to re-define
						if (imageSliderAnimation == 'slide') {
							initFadingSpeed = 1;
							initDelay = 800;
						}

						$(slider).find('.image-slider, .flex-viewport').css('visibility', 'visible').stop().animate({
							opacity : 1,
						}, initFadingSpeed);
						
						// Whether the border is enabled or not
						var borderEnabled = $(slider).closest('.image-slider-wrapper').find('.image-slider li.flex-active-slide img').hasClass('border');
						var extraInitHeight = 16; // border top + bottom heights
						if( ! borderEnabled) { // if not, then there is no extra initial height
							extraInitHeight = 0;
						}

						// Hide loading gif
						$(slider).closest('.image-slider-wrapper').css({
							background : 'none',
							// reset init height fix for Safari (also working on other browsers). this will also set the inline height based on the first slide's image
							height : $(slider).closest('.image-slider-wrapper').find('.image-slider li.flex-active-slide img').height() + extraInitHeight + 'px',
						}).addClass('auto-height');

						$(slider).closest('.image-slider-root-container').attr('data-loaded', 'true');
						
					},
					before : function() {
					},
					after : function(slider) {
						// set a new height based on the next slide
						$(slider).closest('.image-slider-wrapper').css('height', 'inherit');
					},
				});
				// END: flexslider

			});
			//END: imageLoaded

		});
		// END: each

		$('.image-slider-root-container .slider-prev').on('click', function() {
			$(this).closest('.image-slider-root-container').find('.slider-set').flexslider('prev');
			return false;
		});
		$('.image-slider-root-container .slider-next').on('click', function() {
			$(this).closest('.image-slider-root-container').find('.slider-set').flexslider('next');
			return false;
		});

		// Display slider controller on hovered
		$('.image-slider, .slider-controller').hover(function() {
			var root = $(this).closest('.image-slider-root-container');
			if ($(root).find('.image-slider-item:not(.clone)').length > 1) {
				if ($(root).attr('data-loaded') == 'true') {// works only when the slider is loaded
					$(root).attr('data-first-hover', 'true');
					// this is used to prevent the "mousemove" event below continuously firing the handler
					$(root).find('.slider-controller').css('display', 'block').stop().animate({
						opacity : 1
					});
				}
			}
		}, function() {
			var root = $(this).closest('.image-slider-root-container');
			$(root).find('.slider-controller').stop().animate({
				opacity : 0
			});
		});
		// If the mouse cursor is moving on the slider when it is just loaded, display the controller
		$('.image-slider, .slider-controller').mousemove(function() {
			var root = $(this).closest('.image-slider-root-container');
			if ($(root).find('.image-slider-item:not(.clone)').length > 1) {
				if ($(root).attr('data-first-hover') != 'true' && $(root).attr('data-loaded') == 'true') {
					$(root).find('.slider-controller').css('display', 'block').stop().animate({
						opacity : 1
					});
				}
			}
		});
		
		// Some sliders that are in "large-6" column (only left column) might display some 1px glitch.
		// To fix that, using the JS code below to reduce the width by 1px to hide it.
		var slidersToBeFixed = $('.row .large-6.columns:first-child .image-slider-root-container');
		$(slidersToBeFixed).each(function() {
			$(this).css('width', $(this).width() - 1 );
		});

	}
	
	
	
	// Validation Engine
    
    if ($('form.validate').length > 0) {
        $('form.validate').validationEngine('attach', {
            autoHidePrompt : 'false',
            autoHideDelay : '7000',
            fixed : true,
            scroll : false,
            binded : false,
            promptPosition : 'bottomLeft'
        });
    }
    
    // Always initialize contact form "after" Validation Engine plugin
    initContactForm();
    
    /***** Contact Form *****/
    function initContactForm() {
        
        // Submitting contact form
        if ($('form#contact-form').length > 0) {
    
            var contactForm = $('form#contact-form');
            contactForm.submit(function() {
                
                $('#success').css('display', 'none');
                $('#error').css('display', 'none');
                
                if (contactForm.validationEngine('validate')) {
                	
                    var $submitButton = $(this).find('input[type="submit"]');
                    $submitButton.removeClass().addClass('gray button disabled');
                   	$submitButton.attr('value', 'Submitting...');
                   	$submitButton.attr('disabled', 'disabled');
                    
                    $.ajax({
                        type : 'POST',
                        url : 'php/sendmail.php',
                        data : contactForm.serialize(),
                        success : function(result) {
    
                            if (result == 'true') {
                                contactForm.stop().animate({
                                    opacity : '0'
                                }, 400, function() {
                                    contactForm.css('display', 'none');
                                    $('#success').css('display', 'block');
                                    $('#success').stop().animate({
                                        opacity : '1'
                                    }, 900);
                                });
    
                            } else {
                                $('#error').css('display', 'block');
                                $('#error').stop().animate({
                                    opacity : '1'
                                }, 1000);
                                
								recalculateContentArea();
	    
                                alert('Error Message: ' + result);
                            }
    
                        },
                        error : function(xmlHttpRequest, textStatus, errorThrown) {
                            $('#error').css('display', 'block');
                            $('#error').stop().animate({
                                opacity : '1'
                            }, 1000);
                            
							recalculateContentArea();
    
                            alert(errorThrown);
                        }
                    });
                    
		            return false;
		    
                }
            });
            
        }
    }
	
	
	
	
	
	// ---------------------------------------------- //
	// Elements / Misc.
	// ---------------------------------------------- //
	
	/***** BlackAndWhite jQuery Plugin *****/
	$('.black-white').BlackAndWhite({
        hoverEffect : true, // default true
        // set the path to BnWWorker.js for a superfast implementation
        webworkerPath : false,
        // for the images with a fluid width and height 
        responsive:true,
        // to invert the hover effect
        invertHoverEffect: true,
        // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
        intensity:1,
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 500, // 200ms for fadeIn animations
            fadeOut: 1500 // 800ms for fadeOut animations
        },
        onImageReady:function(img) {
            // this callback gets executed anytime an image is converted
        }
    });
    
    
    
	/***** Testimonial Slider *****/
	if (jQuery().carouFredSel) {

		if ($('.uxb-tmnl-testimonial-list').length > 0) {

			var testimonialAnimation = 'crossfade';
			var testimonialAnimationDuration = 500;
			if ($('html').hasClass('touch')) {
				testimonialAnimation = 'fade';
				testimonialAnimationDuration = 300;
			}

			var testimonialList = $('.uxb-tmnl-testimonial-list');
			testimonialList.each(function() {

				var parent = $(this).closest('.uxb-tmnl-testimonial-wrapper');
				
				var autoRotate = $(this).attr('data-auto-rotation'),
					testimonialSliderAutoAnimated = true,
					testimonialSliderAutoAnimatedDelay = 10000;
				if(autoRotate !== '0') {
					testimonialSliderAutoAnimatedDelay = parseInt(autoRotate, 10) * 1000; // Convert to milliseconds
				} else {
					testimonialSliderAutoAnimated = false;
				}
				
				$(this).carouFredSel({
					responsive : true,
					swipe : true,
					onCreate : function() {
						// Display the element
						$(parent).css({
							overflow : 'inherit',
							height : 'auto',
						}).stop().animate({
							opacity : 1
						});
						
						if (siteWidth > 1161) {
								
							// Apply custom z-index to make the first item's image on top
							var zIndex = 50;
							$(this).find('.uxb-tmnl-testimonial-item .uxb-tmnl-testimonial-thumbnail').each(function() {
								$(this).css('z-index', zIndex);
								zIndex -= 1;
							});
							
						}

					},
					pagination : {
						container : $(parent).find('.uxb-tmnl-testimonial-bullets'),
						anchorBuilder : function(nr) {
							return '<a href="#' + nr + '"></a>';
						}
					},
					scroll : {
						fx : testimonialAnimation,
						duration : testimonialAnimationDuration,
						onBefore : function(data) {
							
							if (siteWidth > 1161) {
								
								// Reset custom z-index
								$(this).find('.uxb-tmnl-testimonial-item .uxb-tmnl-testimonial-thumbnail').each(function() {
	
									if ($('html').hasClass('touch')) {
										$(this).stop().animate({
											opacity : 0
										});
									} else {
										$(this).css({
											zIndex : '',
											display : 'none',
										});
									}
	
								});
	
								// Apply a new custom z-index to the next item's image that will be displayed
								var nextItem = data.items.visible;
	
								if ($('html').hasClass('touch')) {
									$(nextItem).find('.uxb-tmnl-testimonial-thumbnail').stop().animate({
										opacity : 1
									});
								} else {
									$(nextItem).find('.uxb-tmnl-testimonial-thumbnail').css({
										zIndex : 50,
										display : 'block',
									});
								}
							
							}

							//console.debug($(data.items.visible).find('p').html());
						},
						onAfter : function() {
							recalculateContentArea();
						},
					},
					auto : {
						play : testimonialSliderAutoAnimated,
						pauseOnHover : 'resume',
						timeoutDuration : testimonialSliderAutoAnimatedDelay,
					},
				}, {
					transition : !(isAndroid), // if running on Android, set it to "false" for this CSS3 transition, otherwise "true"
				});

			});
		}

	}



	/***** Google Maps *****/
	function renderGoogleMaps() {

		if ( typeof google !== 'undefined' && typeof google.maps.MapTypeId !== 'undefined') {

			var elements = $('.google-map');

			elements.each(function() {

				var rawlatlng = $(this).attr('data-latlng').split(',');
				var lat = jQuery.trim(rawlatlng[0]);
				var lng = jQuery.trim(rawlatlng[1]);
				var address = $(this).attr('data-address');
				var displayType = $(this).attr('data-display-type');
				var zoomLevel = parseInt($(this).attr('data-zoom-level'), 10);
				$(this).css('height', $(this).attr('data-height'));

				switch(displayType.toUpperCase()) {
					case 'ROADMAP' :
						displayType = google.maps.MapTypeId.ROADMAP;
						break;
					case 'SATELLITE' :
						displayType = google.maps.MapTypeId.SATELLITE;
						break;
					case 'HYBRID' :
						displayType = google.maps.MapTypeId.HYBRID;
						break;
					case 'TERRAIN' :
						displayType = google.maps.MapTypeId.TERRAIN;
						break;
					default :
						displayType = google.maps.MapTypeId.ROADMAP;
						break;
				}

				var geocoder = new google.maps.Geocoder();
				var latlng = new google.maps.LatLng(lat, lng);
				var myOptions = {
					scrollwheel : false,
					zoom : zoomLevel,
					center : latlng,
					mapTypeId : displayType
				};

				var map = new google.maps.Map($(this)[0], myOptions);

				geocoder.geocode({
					'address' : address,
					'latLng' : latlng,
				}, function(results, status) {
					if (status === google.maps.GeocoderStatus.OK) {
						var marker;
						if (jQuery.trim(address).length > 0) {
							marker = new google.maps.Marker({
								map : map,
								position : results[0].geometry.location
							});

							map.setCenter(results[0].geometry.location);

						} else {
							marker = new google.maps.Marker({
								map : map,
								position : latlng
							});

							marker.setPosition(latlng);
							map.setCenter(latlng);

						}

					} else {
						window.alert("Geocode was not successful for the following reason: " + status);
					}
				});

			});
		}

	}
	
	
	
	/***** Fancybox *****/
	if (jQuery().fancybox) {
		if (isAndroid && androidversion <= 4.0) {
			// Fancybox's thumbnail helper is not working on older Android, so disable it.
			$('.image-box').not('.clone .image-box').fancybox();
		} else {
			$('.image-box').not('.clone .image-box').fancybox({
				padding: 0,
				helpers : {
					thumbs : {
						width : 50,
						height : 50
					},
					overlay: {
						locked: false, // to prevent page jumping to the top when clicking on the object
				    }
				}
			});
		}
	}
	
	
	
	/***** Accordion/Toggle *****/
	var animateObj = {
		animate : 'easeOutQuint',
		duration : 600,
	};

	if ($('.accordion').length > 0) {

		$('.accordion').each(function() {
			$(this).accordion({
				autoHeight : false,
				heightStyle : 'content', // jQuery UI 1.10.x
				collapsible : false,
				animate : animateObj,
				active : parseInt($(this).attr('data-active-index'), 10),
				create : function() {
					$(this).css({
						height : 'auto',
						visibility : 'visible',
					}).animate({
						opacity : 1
					});
				},
				activate: function( event, ui ) {
					recalculateContentArea();
				},
			});
		});

	}

	if ($('.toggle').length > 0) {

		$('.toggle').accordion({
			autoHeight : false,
			heightStyle : 'content', // jQuery UI 1.10.x
			collapsible : true,
			animate : animateObj,
			active : false,
			create : function() {
				$(this).css({
					height : 'auto',
					visibility : 'visible',
				}).animate({
					opacity : 1
				});
			},
			activate: function( event, ui ) {
				recalculateContentArea();
			},
		});

		if ($('.toggle').hasClass('active')) {
			$('.toggle.active').accordion({
				heightStyle : 'content',
				autoHeight : false,
				collapsible : true,
				animate : animateObj,
				active : 0,
				create : function() {
					$(this).css({
						height : 'auto',
						visibility : 'visible',
					}).animate({
						opacity : 1
					});
				},
			});

			$('body').scrollTop(0);
		}

	}
			


	/***** Tabs *****/
	if ($('html').hasClass('lt-ie9')) {
		$('.auto').addClass('tabs').removeClass('auto').attr('data-section', 'tabs');
	}
	var tabs = $('.vertical-tabs p.title > a, .tabs p.title > a, .auto p.title > a');
	tabs.click(function() {

		// Force hiding any content that contains Google Map
		$(this).parents('.section-container').find('.content').each(function() {
			if ($(this).find('.google-map').length > 0) {
				$(this).css('display', 'none');
			}
		});

		var map = $(this).parents('section').find('.content').find('.google-map');
		if (map.length > 0) {
			// Re-render Google Map for tab content and display the content
			$(this).parents('section').find('.content').css({
				'display' : 'block',
				'width' : '100%'
			});
			renderGoogleMaps();
		}
		
		setTimeout( function() {  recalculateContentArea(); }, 500);
		
		// Fix the display of contained images when using with RetinaJS
		$(this).parents('section').find('.content').find('img').css('width', 'auto');
		
	});



	/***** Progress Bar *****/
	if (isAndroid) {
		if (androidversion >= 4.0) {
			animateProgressBar();
		} else {

			$('.progress-bar .bar-meter').each(function() {
				$(this).css('width', $(this).attr('data-meter') + '%');
			});

		}
	} else {
		animateProgressBar();
	}
	function animateProgressBar() {

		if (jQuery().waypoint) {
			
			$('.progress-bar').waypoint(function() {

				var meter = $(this).find('.bar-meter');
				$(meter).css('width', 0);
				$(meter).delay(250).animate({
					width : $(meter).attr('data-meter') + '%',
				}, 1400, 'easeOutQuint');

			}, {
				offset : '85%',
				triggerOnce : true,
				context : '#inner-content-container',
			});

		}

	}
	
	
	
	/***** Other Functions *****/
	
	// Whether the screen is already scrolled down on mobile
	// Note: Use with showHideScrolldownNotice() function below
	var isScrolled = false; 
	
	// Show/hide scrolldown notice on mobile
	function showHideScrolldownNotice() {
		
		// Active only when there is content area
		if( $('#content-container').length > 0 ) {
			
			var siteWidth = $(window).width();
			
			if ( siteWidth <= 1161 ) {
				//$('#side-footer-wrapper').append(siteWidth).append('&nbsp;');
				if ( ! isScrolled ) {
					
					$('#side-footer-wrapper #copyright, #side-footer-wrapper .bar-social').stop().animate({ opacity : 0 }, 10, function() { $(this).css('display', 'none'); });
					$('#scroll-down-notice').css('display', 'inherit').stop().animate({ opacity : 1 });
					
				}
	
				$(window).bind('scroll', function() {
					
					if ($(window).scrollTop() > 150) { // When scrolling down from the top, hide the notice, display the social icons
						
						$('#side-footer-wrapper #copyright, #side-footer-wrapper .bar-social').css('display', 'inherit').stop().animate({ opacity : 1 });
						$('#scroll-down-notice').stop().animate({ opacity : 0 }, 10, function() { $(this).css('display', 'none'); });
						
						isScrolled = true;
							
					} else { // When scrolling up to the top, show the notice, hide the social icons
						
						$('#side-footer-wrapper #copyright, #side-footer-wrapper .bar-social').stop().animate({ opacity : 0 }, 10, function() { $(this).css('display', 'none'); });
						$('#scroll-down-notice').css('display', 'inherit').stop().animate({ opacity : 1 });
						
						isScrolled = false;
						
					}
					
				});
			
			} else {
				
				$('#side-footer-wrapper #copyright, #side-footer-wrapper .bar-social').css('display', 'inherit').stop().animate({ opacity : 1 });
				$('#scroll-down-notice').stop().animate({ opacity : 0 }, 10, function() { $(this).css('display', 'none'); });
				
			}
			
		} else {
			$('#scroll-down-notice').css('display', 'none');
		}
		
	}
	
	
	
	function attachCustomScrollbar() {
		
		var siteWidth = $(window).width();
		
		if (siteWidth > 1161) {
			
			$('#inner-content-container').niceScroll({
				cursorcolor : '#fcda1c',
				cursorwidth : 3,
				cursorborder : 0,
				touchbehavior : false,
				autohidemode : true,
				hidecursordelay : 1000,
				scrollspeed : 100,
				//bouncescroll : true,
			});
			
		}
		
	}
	
	
	
	function setSidebarFooter() {
		
		var siteWidth = $(window).width();
		
		if (siteWidth <= 1161) {
			
			$('#side-footer-wrapper').insertAfter('#side-container');
			$('#copyright').find('br').replaceWith('<span class="blank"></span>');
			 
		} else {
			
			$('#side-container').append($('#side-footer-wrapper'));
			$('#copyright').find('span.blank').replaceWith('<br/>');
			
		}
		
	}
	
	
	
	function animateFullscreenCaption(isFirstLoad) {
		
		var caption = $('.full-scrn-slide:first-child .slide-caption');
		
		var delayTime = 700;
		
		if ( ! isFirstLoad) {
			delayTime = 0;
		}
		
		$(caption).css('marginTop', ($(caption).outerHeight() - 100) * -1);
		
		// Animate to the final position
		$(caption).stop().delay(delayTime).animate({
			marginTop : $(caption).outerHeight()/2 * -1,
			opacity: 1,
		}, 1500, 'easeOutQuint', function() {
			/* ie9 fix for text shadow */
			$(this).css('filter', 'Shadow(Color=#666666, Direction=45, Strength=0);');
		});
		
	}
	
	
	
	function displayContentAreaForMobile() {
		
		// If resize to mobile res, always display the content area
		var siteWidth = $(window).width();
		
		if (siteWidth <= 1161) {
			
			$('#inner-content-container').getNiceScroll().show();
			$('#content-container').css('display', 'block').stop().animate({
				opacity : 1,
			}).removeClass('hidden-content');
			
			// Set z-index back to the default value
			$('#root-container').css('zIndex', 'auto');
			
			$('#hide-toggle-button').attr('class', '');
			
			// Trigger Isotope and recalculate the elements
			$('.uxb-port-element-wrapper').isotope();
			recalculatePortfolioHoverInfo();
			
			isContentHidden = false;
			
			recalculateContentArea();
			
		}
		
	}
	
	
	
	function recalculatePortfolioHoverInfo() {
		
		// Reset the height first
		$('.uxb-port-element-item-hover-info').css('height', 'auto');
		
		// Set the hover element to the center position
		$('.uxb-port-element-item-hover').each(function() {
			var hoverWidth = $(this).width();
			var hoverHeight = $(this).height();
			$(this).css({
				left : '50%',
				top : '50%',
				marginLeft : ((hoverWidth / 2) * -1) + 'px', // add negative margin to centering the element
				marginTop : ((hoverHeight / 2) * -1) + 'px', // add negative margin to centering the element
			});
		});
		
		// Set the hover text to the middle position
		$('.uxb-port-element-item-hover-info').each(function() {
			var infoHeight = $(this).height();
			$(this).css({
				height : infoHeight,
				top : '50%',
				marginTop : ((infoHeight / 2) * -1) + 'px', // add negative margin to centering the element
			});
		});
		
	}
	
	// Function for recalculating the size of the content area
	function recalculateContentArea() {
		$('#inner-content-container').getNiceScroll().resize();
	}
	
	function msieversion() {
	
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
        else                 // If another browser, return 0
            return '';

	   //return false;
	}
	
	function urlExists(url) {
		
	    var http = new XMLHttpRequest();
	    http.open('http://uxbarn.com/demo/creative/kose/HEAD', url, false);
	    http.send();
	    
	    return http.status!=404;
	}
	
	
	
	
	
	/***** Responsive Related *****/
	
	// When resizing the browser's window
	$(window).smartresize(function() {
		
		// Adjust the full screen image when resizing the window
		$('#full-scrn-slider, #full-scrn-slider-container > .caroufredsel_wrapper').css('height', 'inherit');
		recalculatePortfolioHoverInfo();
		
	});
	
	$(window).resize(function() {
		
		// Recalculate these functions when resizing the browser's window
		showHideScrolldownNotice();
		attachCustomScrollbar();
		setSidebarFooter();
		displayContentAreaForMobile();
		
	});
	
	
	
	
	
	/***** Mobile Menu *****/
    function initMobileMenu() {
        //var defaultMenuList = $('#root-menu');
        var mobileMenuList = $('<ul />').appendTo($('#mobile-menu .top-bar-section'));
        
        var clonedList = $('#main-menu > li').clone();
        clonedList = getGeneratedSubmenu(clonedList);
        clonedList.appendTo(mobileMenuList);
        
    }
    
    // Recursive function for generating submenus
    function getGeneratedSubmenu(list) {
    	//console.debug($('#menu-wrapper .main-menu > li'));
        $(list).each(function() {
            //$(this).append('<li class="divider"></li>');
            
            if($(this).find('ul').length > 0) {
                var submenu = $(this).find('ul');
                
                $(this).addClass('has-dropdown');
                submenu.addClass('dropdown'); 
                
                getGeneratedSubmenu(submenu.find('li'));
            }
        });
        
        return list;
    }
	
});