$(document).ready((function(){$("#preloader").delay("3000").fadeOut("slow"),$(".navbar-toggle").click((function(){$("#collapse-nav").toggleClass("collapsed"),$(".overlay-screen").toggleClass("opened")})),$(window).scroll((function(){$(".header nav").removeClass("no-background"),$(window).scrollTop()>=30?$(".header nav").removeClass("no-background"):$(".header nav").addClass("no-background"),$(window).scrollTop()>=90?$(".header nav").addClass("sticked"):$(".header nav").removeClass("sticked")}))}));