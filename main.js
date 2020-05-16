$(function () {
   $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
   });
});

$(function () {
   $(window).scroll(function () {
      $('.fadein').each(function () {
         var position = $(this).offset().top;
         var scroll = $(window).scrollTop();
         var windowHeight = $(window).height();
         if (scroll > position - windowHeight + 200) {
            $(this).addClass('active');
         }
      });
   });
});

$('h2').fadeIn(3000);
