jQuery(document).ready(function ($) {

    $(".navbar-toggler").click(function(){
      $(".signature").toggle();
    });
  
   $(".button").click(function(){
     $(".theme").toggleClass("lightThemeBackground");
     $(".darkFont-color").toggleClass("lightFont-color");
     $(".text-col").toggleClass("text-colLight");
     $imgsrc = $('.location-logo').attr('src');
     if($imgsrc == 'images/lightLocation.png'){
       $(".location-logo").attr('src','images/darkLocation.png');
     }
     else{
       $(".location-logo").attr('src','images/lightLocation.png');
     }
     $(this).toggleClass("lightThemeButton");
     $(this).text($(this).text() == 
     'Dark' ? 'Light' : 'Dark');
   });
  
   $(".signature").click(function(){
     location.reload();
   });
  
   //if screen width < 991px delete the class 
   // $(window).on('resize', function() {
   //   if ($(window).width() < 991) {
   //     $(nav).removeClass("bg-transparent");
   //     $(nav).addClass("bg-white");
   //   } 
   //   else {
   //     $(nav).removeClass("bg-white");
   //     $(nav).addClass("bg-transparent");
   //   }
   // });
  
   // $(window).scroll(function(){
   //   var ww = document.body.clientWidth;
   //   if(ww>991){
   //     $(".navbar").removeClass("bg-transparent");
   //     $(".navbar").addClass("bg-white");
   //   }
   // });
  
   // $(window).scroll(function () {
   //   $(".bg-transparent").toggleClass('bg-white', $(this).scrollTop() > 5);
   // });
  
     // if($(window).width()>991){
     //   window.addEventListener("scroll", function(event){
     //     var scroll = this.scrollY;
     //     if(scroll>90){
     //       $(".navbar").css("background-color", "rgba(255, 255, 255, 1)");
     //     }
     //     else if(scroll<100){
     //       $(".navbar").css("background-color", "rgba(255, 255, 255, 0.5)");
     //     }
     //   });
     // }
  
   //  function activeLinkControl(){
   //    $(".navbar-nav .nav-item a").click(function(){
   //      //remove active class from any of nav-item
   //      $(".nav-item").removeClass("active");
  
   //      //add active class to clicked item but at li not at anchor
   //      $(this).closest(".nav-item").addClass("active");
   //    });
   //  }
  
   $(".education").hover(
     function(){
       $(".line").css('width', '120%');
       $(".line").css('transition', '1s');
     },
     
     function(){
       $(".line").css('width', '100%');
       $(".line").css('transition', '1s');
     }
     );
  });
  