
$(document).ready(function () {
  $(".header").height($(window).height());

  $(window).on("resize", function () {
    $(".header").height($(window).height());
  });
});
