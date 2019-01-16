//time variables
var timingPrimary = 300;
var timingSecondary = 600;
var timingThird = 900;

//we initialize currentTrigger to null
var currentTrigger = null;

//scroll to section function defined here:
function scrollToAnchor(sectionId){
    var aTag = $("#"+ sectionId );
    console.log(sectionId);
    $('html,body').animate({scrollTop: aTag.offset().top},timingThird );
}

//smoothState.js
$(function(){
  'use strict';

  //everything we want to do when the DOM is ready should be included here
  function SimulatorDOM() {
    $(".trigger-section").click(function(e) {
      e.preventDefault();
      var triggerID = $(this).attr("trigger-to");
      scrollToAnchor(triggerID);
    });
  }

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
          SimulatorDOM();
           //we call all we want to do inside the DOM
      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});
