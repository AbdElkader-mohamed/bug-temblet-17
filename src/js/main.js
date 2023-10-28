$(document).ready(function() {
  // preloader 
  $("#preloader").delay("3000").fadeOut("slow");
  // nav handel open menu 
  $(".navbar-toggle").click(function() {
    $("#collapse-nav").toggleClass("collapsed");
    $(".overlay-screen").toggleClass("opened");
  })

  // scrolling navbar handler
  $(window).scroll(function () { 
    $(".header nav").removeClass("no-background")
    if($(window).scrollTop() >= 30){
      $(".header nav").removeClass("no-background")
    }else {
      $(".header nav").addClass("no-background")
    }
    if($(window).scrollTop() >= 90){
      $(".header nav").addClass("sticked");
    }else {
      $(".header nav").removeClass("sticked");
    }
  });
})