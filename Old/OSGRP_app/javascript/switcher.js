window.console = window.console || function() {
   var e = {};
   e.log = e.warn = e.debug = e.info = e.error = e.time = e.dir = e.profile = e.clear = e.exception = e.trace = e.assert = function() {};
   return e
}();

$(document).ready(function() {
   var e =  '<div class="switcher-container">'+
               '<h2>Style Selector<a href="#" class="sw-click"><i class="icon icon-cog"></i></a><a href="#" class="sw-arrow"></a></h2>'+
               '<div class="selector-box">'+
                  '<div class="clearfix"></div>'+
                  '<div class="sw-odd"><h3>Choose accent color:</h3>'+
                  '<div class="ws-colors">'+
                     '<a href="#" class="styleswitch" id="color2">'+
                        '<img src="images/icon/color-1.png" alt="image" style="width:40px; height: 41px;">'+
                     '</a>'+
                     '<a href="#" class="styleswitch" id="color1">'+
                        '<img src="images/icon/color-2.png" alt="image" style="width:40px; height: 41px;">'+
                     '</a>'+
                  '</div></div>'+
                  '<!--<div class="sw-even" style="height:0;"><h3>Color chema:</h3>'+
                     '<a href="#" class="sw-light">Light</a>' +
                     '<a href="#" class="sw-dark">Dark</a>-->' +
                  '</div>'+
                  '<div class="sw-odd sw-form" style="background-color: #282828; display: none;">' +
                        '<h3>Background pattern:</h3>' +
                        '<a href="#" class="sw-roll un-activebox box">Boxed Version</a>' +
                        '<a href="#" class="sw-roll un-activemargin vmargin">Vertical Margins</a>' +
                  '</div>' +
                  '<div class="sw-even pattern" style="background-color: #323232; display: none;"><h3>Background pattern:</h3>'+
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern-1.jpg"><img src="images/icon/pattern-1.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern-2.jpg"><img src="images/icon/pattern-2.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern-3.jpg"><img src="images/icon/pattern-3.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern-4.jpg"><img src="images/icon/pattern-4.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern.jpg"><img src="images/icon/pattern.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern-5.jpg"><img src="images/icon/pattern-5.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern-6.jpg"><img src="images/icon/pattern-6.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern-7.jpg"><img src="images/icon/pattern-7.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern-8.jpg"><img src="images/icon/pattern-8.jpg" alt="image"></a>' +
                     '<a href="#" class="sw-pattern" data-image="images/icon/pattern-9.jpg"><img src="images/icon/pattern-9.jpg" alt="image"></a>' +
                  '</div>'+
                  '<div class="clearfix"></div>'+
               '</div>'+
            '</div>';
   $('body').append(e);
   switchColor.loadEvent();
   switchAnimate.loadEvent();
});

var switchColor = {
   colorObj: {
      colorCookie: "colorCookie",
      switchClass: ".styleswitch",
      currentClass: "current",
      headLink: "head link[id=colors]",
      colorItem: ".ws-colors a.styleswitch",
      reset: "#reset",
      defaultColor: "color1"
   },
   loadEvent: function() {
      var e = switchColor.colorObj;
      if ($.cookie(e.colorCookie)) {
         switchColor.setColor($.cookie(e.colorCookie))
      } else {
         switchColor.setColor(e.defaultColor)
      }
      $(e.colorItem).on("click", function() {
         var e = $(this).attr("id");
         switchColor.setColor(e)
      });
      $(e.reset).click(function () {
         switchColor.setColor(e.defaultColor)
      })
   },
   setColor: function(e) {
      var t = switchColor.colorObj;
      $.cookie(t.colorCookie, e);
      $(t.headLink).attr("href", "stylesheets/colors/" + e + ".css");
		var logo = '', logo_s = '';

      var retina = window.devicePixelRatio > 1 ? true : false;

      if(retina) {
         logo = 'images/logo_' + e + '@2x.png';
         logo_s = 'images/logo_s_' + e + '@2x.png';
         if(e === t.defaultColor){
            logo = 'images/logo@2x.png'
            logo_s = 'images/logo_s@2x.png'
         }

         $('.header .logo').find('img').attr({src:logo,width:'176',height:'42'});
         $('.bottom .copyright').find('img').attr({src:logo,width:'35',height:'42'});

      }
      else {
         logo = 'images/logo_' + e + '.png';
         logo_s = 'images/logo_s_' + e + '.png';
         if(e === t.defaultColor){
            logo = 'images/logo.png'
            logo_s = 'images/logo_s.png'
         }
         
         $('.header .logo').find('img').attr('src',logo);
         $('.bottom .copyright').find('img').attr('src',logo_s);
      }
      $(t.switchClass).removeClass(t.currentClass);
      $("#" + e).addClass(t.currentClass);

      //set color for text in content
      if($('.infomation.text-center h3').length === 1) {
         var hiText = $('.infomation.text-center h3').closest('.section').css("background-color").toString();
         if(hiText === "rgb(91, 91, 91)")
            $('.infomation.text-center h3').css('color', "#fff");
      }
    }
};

var switchAnimate = {
   loadEvent: function() {
      $(".switcher-container h2 a.sw-click").click(function(e) {
         var t = $(".switcher-container");

         if (t.css("left") === "-290px") {
            $(".switcher-container").animate({ left: "0"}, 300, 'easeInOutExpo')
         } else {
            $(".switcher-container").animate({ left: "-290px" }, 300, 'easeInOutExpo')
         }

         e.preventDefault();
     })
   }
};
