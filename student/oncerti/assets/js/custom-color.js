/*====================================
 Free To Use For Personal And Commercial Usage
Author: http://binarytheme.com
 License: Open source - MIT
 Please visit http://opensource.org/licenses/MIT for more Full Deatils of license.
 Share Us if You Like our work 
 Enjoy Our Codes For Free always.
======================================*/

(function ($) {
    "use strict";
    var mainApp = {


        plusMain: function () {

            //FUNCTION TO SCROLL BETWEEN LEFT MENU LINKS
            $(function () {
                $('nav a').bind('click', function (event) {
                    var $anchor = $(this);

                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
                    event.preventDefault();
                });
            });

           
            // MAIN FUNTION FOR TRIGGER LEFT MENU


            $('.Icon-trigger span').click(function () {
                if (
            $('.left-panel').css('left') == '-160px') {
                    $('.left-panel').animate({ left: '0px' });
                }
                else
                    $('.left-panel').animate({ left: '-160px' });
            });

            //  FUNTION TO OVERWRITE BODY BACK COLOR
            $('body').addClass('body-back'); // YOU CAN SET COLOR IN THIS CLASS THAT IS PRESENT IN Style.css.
            
           
            /*
            YOU CAN WRITE 
            YOUR SCRIPTS HERE
            
            */



        },

        initialization: function () {
            mainApp.plusMain();

        }


    }
    // INITIALIZING ///

    $(document).ready(function () {
        mainApp.plusMain();
    });


}(jQuery));


