//time variables
var timingPrimary = 300;
var timingSecondary = 600;
var timingThird = 900;
//we initialize currentTrigger to null
var currentTrigger = null;
//scrollMagic instance
var controller = new ScrollMagic.Controller();

//scroll to section function defined here:
function scrollToAnchor(sectionId){
    var aTag = $("#"+ sectionId );
    $('html,body').animate({scrollTop: aTag.offset().top},timingThird );
}

function menu(){
  $( "div.b--header__trigger" ).click(function() {
    if($(".b--header").hasClass("is-active")){
        $(".b--header").removeClass("is-active");
        $(".b--header__menu").removeClass("is-active");
        $(".b--header__trigger").removeClass("is-active");
        $(".b--header__overlay").removeClass("is-active");
    }else{
        $(".b--header").addClass("is-active");
        $(".b--header__menu").addClass("is-active");
        $(".b--header__trigger").addClass("is-active");
        $(".b--header__overlay").addClass("is-active");
    }
});
$("div.b--header__overlay").click(function() {
    if($(".b--header__overlay").hasClass("is-active")) {
        $(".b--header").removeClass("is-active");
        $(".b--header__menu").removeClass("is-active");
        $(".b--header__trigger").removeClass("is-active");
        $(".b--header__overlay").removeClass("is-active");
    }
});
}

function scrollMagicNavigation(){

    var oneHeight = $("#articleOne").height();
    var twoHeight = $("#articleTwo").height();
    var threeHeight = $("#articleThree").height();
    var threeHeight = $("#articleFour").height();
    var threeHeight = $("#articleFive").height();

    if(document.getElementById("main") !== null){
      new ScrollMagic.Scene({triggerElement: "#articleOne",duration: oneHeight, triggerHook: 0.4,
      })
      .on("enter", function (e) {
          $('.trigger-section-one').addClass('trigger-section--is-active');
      })
      .on("leave", function (e) {
          if (e.scrollDirection == 'REVERSE') {
                $('.trigger-section-one').removeClass('trigger-section--is-active');
          }
      })
      // .addIndicators('por aca!')
      .addTo(controller); // assign the scene to the controller
    }

    if(document.getElementById("articleOne") !== null){
      new ScrollMagic.Scene({triggerElement: "#articleOne",duration: oneHeight, triggerHook: 0.4,
      })
      .on("enter", function (e) {
        $("#articleOne").addClass("b--article--is-active");
        console.log("entro");
          $('.trigger-section-one').addClass('trigger-section--is-active');
          $('.trigger-section-main').addClass('trigger-section--is-visited');
          $('.navigation').show();
      })
      .on("leave", function (e) {
          if (e.scrollDirection == 'REVERSE') {
                $('.trigger-section-one').removeClass('trigger-section--is-active');
                $('.trigger-section-main').removeClass('trigger-section--is-visited');
                $('.navigation').hide();
          }
          $("#articleOne").removeClass("b--article--is-active");
          $("#articleOne").addClass("b--article--is-visited");
      })
      // .addIndicators('por aca!')
      .addTo(controller); // assign the scene to the controller
    }

    if(document.getElementById("articleTwo") !== null){
      new ScrollMagic.Scene({triggerElement: "#articleTwo",duration: oneHeight, triggerHook: 0.4,
      })
      .on("enter", function (e) {
            $("#articleTwo").addClass("b--article--is-active");
            $('.trigger-section-one').addClass('trigger-section--is-visited');
            $('.trigger-section-two').addClass('trigger-section--is-active');
      })
      .on("leave", function (e) {
          if (e.scrollDirection == 'REVERSE') {
            $('.trigger-section-one').removeClass('trigger-section--is-visited');
            $('.trigger-section-two').removeClass('trigger-section--is-active');
          }
          $("#articleTwo").removeClass("b--article--is-active");
          $("#articleTwo").addClass("b--article--is-visited");
      })
      // .addIndicators('por aca!')
      .addTo(controller); // assign the scene to the controller
    }

    if(document.getElementById("articleThree") !== null){
      new ScrollMagic.Scene({triggerElement: "#articleThree",duration: oneHeight, triggerHook: 0.4,
      })
      .on("enter", function (e) {
        $("#articleThree").addClass("b--article--is-active");
        $('.trigger-section-two').addClass('trigger-section--is-visited');
        $('.trigger-section-three').addClass('trigger-section--is-active');

      })
      .on("leave", function (e) {
        if (e.scrollDirection == 'REVERSE') {
          $('.trigger-section-two').removeClass('trigger-section--is-visited');
          $('.trigger-section-three').removeClass('trigger-section--is-active');
        }
        $("#articleThree").removeClass("b--article--is-active");
        $("#articleThree").addClass("b--article--is-visited");
      })
      // .addIndicators('por aca!')
      .addTo(controller); // assign the scene to the controller
    }

    if(document.getElementById("articleFour") !== null){
      new ScrollMagic.Scene({triggerElement: "#articleFour",duration: oneHeight, triggerHook: 0.4,
      })
      .on("enter", function (e) {
        $("#articleFour").addClass("b--article--is-active");
        $('.trigger-section-three').addClass('trigger-section--is-visited');
        $('.trigger-section-four').addClass('trigger-section--is-active');

      })
      .on("leave", function (e) {
        if (e.scrollDirection == 'REVERSE') {
          $('.trigger-section-three').removeClass('trigger-section--is-visited');
          $('.trigger-section-four').removeClass('trigger-section--is-active');
        }
        $("#articleFour").removeClass("b--article--is-active");
        $("#articleFour").addClass("b--article--is-visited");
      })
      // .addIndicators('por aca!')
      .addTo(controller); // assign the scene to the controller
    }

    if(document.getElementById("articleFive") !== null){
      new ScrollMagic.Scene({triggerElement: "#articleFive",duration: oneHeight, triggerHook: 0.4,
      })
      .on("enter", function (e) {
        $("#articleFive").addClass("b--article--is-active");
        $('.trigger-section-four').addClass('trigger-section--is-visited');
        $('.trigger-section-five').addClass('trigger-section--is-active');

      })
      .on("leave", function (e) {
        if (e.scrollDirection == 'REVERSE') {
           $('.trigger-section-five').removeClass('trigger-section--is-active');
        }
        $("#articleFive").removeClass("b--article--is-active");
        $("#articleFive").addClass("b--article--is-visited");
      })
      // .addIndicators('por aca!')
      .addTo(controller); // assign the scene to the controller
    }
  }


//smoothState.js
$(function($){
  'use strict';

  $(".navigation ul").hover(
    function() {
      $(this).addClass("is-active");
      $(".navigation").addClass( "is-active" );
    }, function() {
      $( this ).removeClass( "is-active" );
      $(".navigation").removeClass( "is-active" );
    }
  );

  menu();


    $(window).scroll(function() {
				if ($(".b--header").offset().top > 50) {
						$(".b--header").addClass("b--header--is-scrolled");
            $(".navigation").addClass("navigation--is-scrolled");

				} else {
						$(".b--header").removeClass("b--header--is-scrolled");
            $(".navigation").removeClass("navigation--is-scrolled");

				}
		});

    scrollMagicNavigation();

    $("#back").click(function(e) {
      e.preventDefault();
      controller.destroy();
      var returningID = $("#back").attr("data-alt");
      console.log(returningID);
      $("#" + returningID).addClass(returningID + "--is-shown");
      if (returningID == "cloud") {
        $("#digital").addClass("digital--is-notshown");
        $("#enterprise").addClass("enterprise--is-notshown");
      }
      if (returningID == "enterprise") {
        $("#digital").addClass("digital--is-notshown");
        $("#cloud").addClass("cloud--is-notshown");
      }
      if (returningID == "digital") {
        $("#cloud").addClass("cloud--is-notshown");
        $("#enterprise").addClass("enterprise--notshown");
      }
    });

    $("#arrow").click(function(e) {
      e.preventDefault();
      controller.destroy();
      var returningID = $("#arrow").attr("data-alt");
      console.log(returningID);
      $("#" + returningID).addClass(returningID + "--is-shown");
      if (returningID == "cloud") {
        $("#digital").addClass("digital--is-notshown");
        $("#enterprise").addClass("enterprise--is-notshown");
      }
      if (returningID == "enterprise") {
        $("#digital").addClass("digital--is-notshown");
        $("#cloud").addClass("cloud--is-notshown");
      }
      if (returningID == "digital") {
        $("#cloud").addClass("cloud--is-notshown");
        $("#enterprise").addClass("enterprise--notshown");
      }
    });

    $(".trigger-section").click(function(e) {
      e.preventDefault();
      var triggerID = $(this).attr("trigger-to");
      scrollToAnchor(triggerID);
    });

    //setting for our SmoothState
    var options = {
      prefetch: true,
      // cacheLength: 3, //3 pages are saved in cache
      debug: true,

      onBefore: function($currentTarget, $container)
      {
        //where we click is saved as currentTargetid and we add a class to that
         var currentTargetid = $currentTarget.attr("id");
         $($currentTarget).addClass(currentTargetid + "--is-active");
         //we save that var as a new one to pass its value to SmoothState's next step
          currentTrigger = $currentTarget;
          //if is not active, then add class is-hidden
          if (currentTargetid == "cloud") {
            $("#digital").addClass("digital--is-hidden");
            $("#enterprise").addClass("enterprise--is-hidden");
          }
          if (currentTargetid == "enterprise") {
            $("#digital").addClass("digital--is-hidden");
            $("#cloud").addClass("cloud--is-hidden");
          }
          if (currentTargetid == "digital") {
            $("#cloud").addClass("cloud--is-hidden");
            $("#enterprise").addClass("enterprise--is-hidden");
          }
          return currentTrigger;
       },

      onStart: {
        duration: timingPrimary, // Duration of our animation
        render: function ($container, $currentTrigger) {
          $container.addClass('is-exiting');
          // Restart our animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          // remove our CSS animation reversing class
          $container.removeClass('is-exiting');
          controller = new ScrollMagic.Controller();

          $container.html($newContent);

            $(".navigation ul").hover(
              function() {
                  $(this).addClass("is-active");
                  $(".navigation").addClass( "is-active" );
              }, function() {
                  $( this ).removeClass( "is-active" );
                  $(".navigation").removeClass( "is-active" );
              }
           );

          scrollMagicNavigation();

          menu();

          $(".trigger-section").click(function(e) {
            e.preventDefault();
            var triggerID = $(this).attr("trigger-to");
            scrollToAnchor(triggerID);
          });

          $("#back").click(function(e) {
            e.preventDefault();
            controller.destroy();
            var returningID = $("#back").attr("data-alt");
            console.log(returningID);
            $("#" + returningID).addClass(returningID + "--is-shown");
            if (returningID == "cloud") {
              $("#digital").addClass("digital--is-notshown");
              $("#enterprise").addClass("enterprise--is-notshown");
            }
            if (returningID == "enterprise") {
              $("#digital").addClass("digital--is-notshown");
              $("#cloud").addClass("cloud--is-notshown");
            }
            if (returningID == "digital") {
              $("#cloud").addClass("cloud--is-notshown");
              $("#enterprise").addClass("enterprise--notshown");
            }

          });

          $("#arrow").click(function(e) {
            e.preventDefault();
            controller.destroy();
            var returningID = $("#arrow").attr("data-alt");
            console.log(returningID);
            $("#" + returningID).addClass(returningID + "--is-shown");
            if (returningID == "cloud") {
              $("#digital").addClass("digital--is-notshown");
              $("#enterprise").addClass("enterprise--is-notshown");
            }
            if (returningID == "enterprise") {
              $("#digital").addClass("digital--is-notshown");
              $("#cloud").addClass("cloud--is-notshown");
            }
            if (returningID == "digital") {
              $("#cloud").addClass("cloud--is-notshown");
              $("#enterprise").addClass("enterprise--notshown");
            }
          });

        },
      }
    },
    smoothState = $('#main').smoothState(options).data('smoothState');

});

$(window).resize(function(){location.reload();});
