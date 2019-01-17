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
    console.log(sectionId);
    $('html,body').animate({scrollTop: aTag.offset().top},timingThird );
}

function scrollMagicNavigation(){
  var oneHeight = $("#articleOne").height();
  var twoHeight = $("#articleTwo").height();
  var threeHeight = $("#articleThree").height();
  var threeHeight = $("#articleFour").height();
  var threeHeight = $("#articleFive").height();


  new ScrollMagic.Scene({triggerElement: "#articleOne",duration: oneHeight, triggerHook: 0.4,
  })
  .on("enter", function (e) {
      $('.trigger-section-one').addClass('trigger-section--is-active');
      $('.navigation').addClass('navigation--is-active');
  })
  .on("leave", function (e) {
      if (e.scrollDirection == 'REVERSE') {
            $('.navigation').removeClass('navigation--is-active');
            $('.trigger-section-one').removeClass('trigger-section--is-active');
      }
  })
  .addIndicators('por aca!')
  .addTo(controller); // assign the scene to the controller

  new ScrollMagic.Scene({triggerElement: "#articleTwo",duration: oneHeight, triggerHook: 0.4,
  })
  .on("enter", function (e) {
        $('.trigger-section-one').removeClass('trigger-section--is-active');
        $('.trigger-section-two').addClass('trigger-section--is-active');
  })
  .on("leave", function (e) {
      if (e.scrollDirection == 'REVERSE') {
          $('.trigger-section-two').removeClass('trigger-section--is-active');
      }
  })
  .addIndicators('por aca!')
  .addTo(controller); // assign the scene to the controller

  new ScrollMagic.Scene({triggerElement: "#articleThree",duration: oneHeight, triggerHook: 0.4,
  })
  .on("enter", function (e) {
       $('.trigger-section-two').removeClass('trigger-section--is-active');
       $('.trigger-section-three').addClass('trigger-section--is-active');

  })
  .on("leave", function (e) {
    if (e.scrollDirection == 'REVERSE') {
       $('.trigger-section-three').removeClass('trigger-section--is-active');
    }
  })
  .addIndicators('por aca!')
  .addTo(controller); // assign the scene to the controller

  new ScrollMagic.Scene({triggerElement: "#articleFour",duration: oneHeight, triggerHook: 0.4,
  })
  .on("enter", function (e) {
       $('.trigger-section-three').removeClass('trigger-section--is-active');
       $('.trigger-section-four').addClass('trigger-section--is-active');

  })
  .on("leave", function (e) {
    if (e.scrollDirection == 'REVERSE') {
       $('.trigger-section-four').removeClass('trigger-section--is-active');
    }
  })
  .addIndicators('por aca!')
  .addTo(controller); // assign the scene to the controller
  new ScrollMagic.Scene({triggerElement: "#articleFive",duration: oneHeight, triggerHook: 0.4,
  })
  .on("enter", function (e) {
       $('.trigger-section-four').removeClass('trigger-section--is-active');
       $('.trigger-section-five').addClass('trigger-section--is-active');

  })
  .on("leave", function (e) {
    if (e.scrollDirection == 'REVERSE') {
       $('.trigger-section-five').removeClass('trigger-section--is-active');
    }
  })
  .addIndicators('por aca!')
  .addTo(controller); // assign the scene to the controller
}

$(".trigger-section").click(function(e) {
  e.preventDefault();
  var triggerID = $(this).attr("trigger-to");
  console.log(triggerID);
  scrollToAnchor(triggerID);
});

//smoothState.js
$(function(){
  'use strict';

    scrollMagicNavigation();

    $(window).scroll(function() {
				if ($(".b--header").offset().top > 650) {
						$(".b--header").addClass("b--header--is-scrolled");
				} else {
						$(".b--header").removeClass("b--header--is-scrolled");
				}
		});


  //everything we want to do when the DOM is ready should be included here


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
        // Restart our animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // remove our CSS animation reversing class
        $container.removeClass('is-exiting');
        // inject the new content
        $container.html($newContent);
        var inside = currentTrigger.attr("id");
        $( "#back" ).click(function() {
           $('html, body').animate({scrollTop:0}, 3000);
          var returningID = $("#back").attr("class");
          // console.log(returningID);
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
      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');

});

$(window).resize(function(){location.reload();});
