/* Method using for banner position center */
jQuery(document).ready(function(){

});

jQuery(window).on('load resize', function() {
    var $heightElement = jQuery('.tz-training-images').height();
    var $heightAuthor  = jQuery('.tz-single-author').height();

    var $heightBanner        = jQuery('.tz-items').height();
    var $heightContentBanner = jQuery('.tz-banner-content').height();
    var $topContentBanner  =  ($heightBanner - $heightContentBanner) / 2;
    var AnimateTimer= null;
    if (AnimateTimer) clearTimeout(AnimateTimer);
    AnimateTimer = setTimeout(function(){
        var $heightText    = jQuery('.tz-training-content').height();
        var $padding       = ( $heightElement - $heightText ) / 2;
        jQuery('.tz-training-content').css("top",$padding+'px');
    },100);


    if(jQuery('.tz-header-2').length > 0 || jQuery('.tz-header-4').length > 0 || jQuery('.tz-header-6').length > 0){
        jQuery('.tz-banner-content').css('top',$topContentBanner);
        jQuery('.tz-button-right').css('top','40%');
        jQuery('.tz-button-left').css('top','40%');
    }

});

jQuery(document).on('load resize scroll', function() {
    var $width_Windows = jQuery(this).width(); // This is width of windows

/*  Method for scroll Header 01 */
    if(jQuery(this).scrollTop() > 0){
        jQuery('.tz-header-1').addClass('tz-header-eff');
    }else{
        jQuery('.tz-header-1').removeClass('tz-header-eff');
    }

/*  Method for scroll Header Home01 */
    var $affixTopBanner01 = jQuery('.tz-banner .tz-items').height();
    var $heightHeaderHome01 = jQuery('.tz-header-home-1').height();
    if(jQuery('.tz-header-home-1').length > 0){
        if(jQuery(this).scrollTop() > ($affixTopBanner01 - $heightHeaderHome01)){
            jQuery('.tz-header-home-1').addClass('affix-eff');
            jQuery('.tz-banner-style1').css('z-index','99999');
            if(jQuery('.affix-top').length > 0) {
                jQuery('.affix-top').affix({
                    offset: { top: $affixTopBanner01}
                });
            }
        }
        else{
            jQuery('.tz-header-home-1').removeClass('affix-eff');
            jQuery('.tz-banner-style1').css('z-index','1');
        }
    }

/*  Method for scroll Header Home-02 */
    var $height_Tz_Sign_In = jQuery('.tz-sign-in').height();

    if(jQuery('.tz-header-2').length > 0){

        if(jQuery(this).scrollTop() >= ($height_Tz_Sign_In + 30)){
            jQuery('.tz-header-2').addClass('tz-header-2-eff')
            jQuery('.tz-banner-style2').css('z-index','99999');
        }
        else{
            jQuery('.tz-header-2').removeClass('tz-header-2-eff')
            jQuery('.tz-banner-style2').css('z-index','1');
        }
    }

    /*  Method for scroll Header Home-03 */
    if(jQuery('.tz-header-3').length > 0){
        if(jQuery(this).scrollTop() > ($height_Tz_Sign_In + 30)){
            jQuery('.tz-banner').css('z-index','99999');
            jQuery('.tz-header-3').addClass('tz-header-3-eff');
        }
        else{
            jQuery('.tz-banner').css('z-index','1');
            jQuery('.tz-header-3').removeClass('tz-header-3-eff');
        }
    }

    /*  Method for scroll Header Home-04 */

    if(jQuery('.tz-header-4').length > 0){
        if(jQuery(this).scrollTop() > 0 ){
            jQuery('.tz-banner').css('z-index','99999');
            jQuery('.tz-header-4').addClass('tz-header-4-eff');

        }else{
            jQuery('.tz-banner').css('z-index','1');
            jQuery('.tz-header-4').removeClass('tz-header-4-eff');
        }
    }

    /*  Method for scroll Header Home-04 */

    if(jQuery('.tz-header-5').length > 0){
        if(jQuery(this).scrollTop() > 0){
            jQuery('.tz-header-5').addClass('tz-header-5-eff');
            jQuery('.tz-banner').css('z-index','99999');
        }else{
            jQuery('.tz-header-5').removeClass('tz-header-5-eff');
            jQuery('.tz-banner').css('z-index','1');
        }
    }
    /*  Method for scroll Header Home-06 */

    if(jQuery('.tz-header-6').length > 0){
        if(jQuery(this).scrollTop() > ($height_Tz_Sign_In + 30)){
            jQuery('.tz-header-6').addClass('tz-header-6-eff')
            jQuery('.tz-banner').css('z-index','99999');
        }
        else{
            jQuery('.tz-header-6').removeClass('tz-header-6-eff')
            jQuery('.tz-banner').css('z-index','1');
        }
    }
    /*  Method for scroll Header Home-07 */

    if(jQuery('.tz-header-7').length > 0){
        if(jQuery(this).scrollTop() > 0){
            jQuery('.tz-header-7').addClass('tz-header-7-eff')
            jQuery('.tz-banner').css('z-index','99999');
        }
        else{
            jQuery('.tz-header-7').removeClass('tz-header-7-eff')
            jQuery('.tz-banner').css('z-index','1');
        }
    }

})

jQuery(window).load(function(){

    /* Method for Pre-Loading */
    "use strict";

    jQuery('.loading-page').remove();

    /* Method for menu offcavas-menu for page Canvans-Menu */
    var $true = true;
    jQuery('.tz-button-toggle-canvans').on('click',function(){
        if ( $true == true ){
            jQuery('.tz-offcavans-menu').animate({
                right : '0'
            },300) ;
            jQuery('.tzscrollable').addClass('tz-offcavans-menu-eff');
            $true = false;
        }else{
            jQuery('.tz-offcavans-menu').animate({
                right : '-20em'
            },150,function(){
                jQuery('.tzscrollable').removeClass('tz-offcavans-menu-eff');
            }) ;
            $true = true;
        }
    });
    jQuery('.tz-offcanvas-close').on('click',function(){
        jQuery('.tz-offcavans-menu').animate({
            right : '-20em'
        },150,function(){
            jQuery('.tzscrollable').removeClass('tz-offcavans-menu-eff');
        }) ;
        $true = true
    });


    /* Method for menu offcavas-menu for Header-04 */
    var $true_toggle_header4 = true;
    if(jQuery('.tz-header-4').length > 0){
        jQuery('.tz-canvas-customer, .tz-canvas-customer-right').on('click',function(){
            if ( $true_toggle_header4 == true ){
                if(jQuery(window).width() > 991){
                    jQuery('.tz-offcavans-menu-customer').animate({
                        left : '0'
                    },300) ;
                    jQuery('.tzscrollable').addClass('tz-offcavans-menu-eff-customer');
                }else{
                    jQuery('.tz-offcavans-menu-customer').animate({
                        right : '0em'
                    },300) ;
                    jQuery('.tzscrollable').addClass('tz-offcavans-menu-eff-customer');
                }
                $true_toggle_header4 = false;
            }else{
                if(jQuery(window).width() > 991){
                    jQuery('.tz-offcavans-menu-customer').animate({
                        left : '-20em'
                    },150,function(){
                        jQuery('.tzscrollable').removeClass('tz-offcavans-menu-eff-customer');
                    }) ;
                }else{
                    jQuery('.tz-offcavans-menu-customer').animate({
                        right : '-20em'
                    },150,function(){
                        jQuery('.tzscrollable').removeClass('tz-offcavans-menu-eff-customer');
                    }) ;
                }
                $true_toggle_header4 = true;
            }
        });
        jQuery('.tz-offcanvas-close').on('click',function(){
            if(jQuery(window).width() > 991){
                jQuery('.tz-offcavans-menu-customer').animate({
                    left : '-20em'
                },150,function(){
                    jQuery('.tzscrollable').removeClass('tz-offcavans-menu-eff-customer');
                }) ;
            }else{
                jQuery('.tz-offcavans-menu-customer').animate({
                    right : '-20em'
                },150,function(){
                    jQuery('.tzscrollable').removeClass('tz-offcavans-menu-eff-customer');
                }) ;
            }
            $true_toggle_header4 = true
        });
    }

    /* Method for button search */
    jQuery('.tz-search').on('click',function(){
        jQuery('.tz-content-search').addClass('tz-content-search-eff');
        jQuery('.tz-search-input').focus();
    });
    jQuery('.tz-form-close').on('click',function(){
        jQuery('.tz-content-search').removeClass('tz-content-search-eff');
    });


    /*  Method click event for module Find Cources */
        jQuery('#tz-sidemenu a').on('click', function(e){
            e.preventDefault();
            if($(this).hasClass('tz-open')) {
                // do nothing because the link is already open
            } else {
                var oldcontent = $('#tz-sidemenu a.tz-open').attr('href');
                var newcontent = $(this).attr('href');

                $(oldcontent).fadeOut('fast', function(){
                    $(newcontent).fadeIn().removeClass('tz-hidden');
                    $(oldcontent).addClass('tz-hidden');
                });

                $('#tz-sidemenu a').removeClass('tz-open');
                $(this).addClass('tz-open');
            }
        });

        /* owlCarousel for Courses*/

        jQuery('.tz-tab-slider').owlCarousel({
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:false,
            stopOnHover: false,
            singleItem:false,
            rewindNav:false,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false
        });
        jQuery('.tz-cources-prev').on('click',function(){
            jQuery(".tz-tab-slider").trigger('owl.prev');
        }) ;
        jQuery(".tz-cources-next").on('click',function(){
            jQuery(".tz-tab-slider").trigger('owl.next');
        }) ;

        /* owlCarousel for section in Event-Single-Page*/

        jQuery('.tz-gallery-wrapper').owlCarousel({
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:true,
            stopOnHover: false,
            singleItem:false,
            rewindNav:false,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false
        });
        jQuery('.tz-cources-prev').on('click',function(){
            jQuery(".tz-gallery-wrapper").trigger('owl.prev');
        }) ;
        jQuery(".tz-cources-next").on('click',function(){
            jQuery(".tz-gallery-wrapper").trigger('owl.next');
        }) ;

        /* owlCarousel for section Event HomePage 2 */

        jQuery(".tz-event-wrapper").owlCarousel({
            items : 4,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:true,
            stopOnHover: false,
            singleItem:false,
            rewindNav:false,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false
        });
        jQuery(".tz-last-event-prev").on('click',function(){
            jQuery(".tz-event-wrapper").trigger('owl.prev');
        }) ;
        jQuery(".tz-last-event-next").on('click',function(){
            jQuery(".tz-event-wrapper").trigger('owl.next');
        }) ;

        /* owlCarousel for section Lastest Articles HomePage 1 */

        jQuery(".tz-lastest-articles-content").owlCarousel({
            items : 5,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
            slideSpeed:100,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:true,
            stopOnHover: true,
            singleItem:false,
            rewindNav:false,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false
        });

        /* owlCarousel for section Page Social-Activity */

        jQuery('.tz-connect-people').owlCarousel({
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            slideSpeed:500,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:true,
            stopOnHover: false,
            singleItem:false,
            rewindNav:false,
            pagination:true,
            paginationNumbers:false,
            itemsScaleUp:false
        });

    /* owlCarousel for Slider Banner */

        jQuery('.tz-slider-banner').owlCarousel({
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            slideSpeed:400,
            paginationSpeed:800,
            rewindSpeed:1000,
            autoPlay:false,
            stopOnHover: false,
            singleItem:false,
            rewindNav:false,
            pagination:false,
            paginationNumbers:false,
            itemsScaleUp:false,
            addClassActive:true
        });

        jQuery(".tz-button-left").on('click',function(){
            jQuery(".tz-slider-banner").trigger('owl.prev');
        }) ;
        jQuery(".tz-button-right").on('click',function(){
            jQuery(".tz-slider-banner").trigger('owl.next');
        }) ;

        /* Method for video */
        jQuery('.tzautoplay').on('click',function(){
            var $_this = jQuery(this);
            var myVideo = $_this.parents('.tz-video').find('.videoID')[0];
            jQuery(this).hide();
            $_this.parents('.tz-video').find('.tz-video-content h3').css('opacity',0);
            $_this.parents('.tz-video').find('.tz-video-content small').css('opacity',0);
            $_this.parents('.tz-video').find('.tz-video-content span').css('opacity',0);
            $_this.parents('.tz-video').find('.tz-video-content strong').css('opacity',0);
            $_this.parents('.tz-video').find('.bg-video').hide();
            $_this.parents('.tz-video').find('.bg-video-style-5').hide();
            $_this.parents('.tz-video').find('.bg-video-style-7').hide();
            $_this.parents('.tz-video').find('.tzpause').show().css('opacity',0);
            if (myVideo.paused)
                myVideo.play();

        }) ;
        jQuery('.tzpause').on('click',function(){
            jQuery(this).hide();
            var $_this = jQuery(this);
            var myVideo = $_this.parents('.tz-video').find('.videoID')[0];
            $_this.parents('.tz-video').find('.tz-video-content h3').css('opacity',1);
            $_this.parents('.tz-video').find('.tz-video-content small').css('opacity',1);
            $_this.parents('.tz-video').find('.tz-video-content span').css('opacity',1);
            $_this.parents('.tz-video').find('.tz-video-content strong').css('opacity',1);
            $_this.parents('.tz-video').find('.bg-video').show();
            $_this.parents('.tz-video').find('.bg-video-style-5').show();
            $_this.parents('.tz-video').find('.bg-video-style-7').show();
            $_this.parents('.tz-video').find('.tzautoplay').show();
            if (myVideo.play)
                myVideo.pause();
        });
 });











