$(function(){
  $("#slides").slidesjs({
    height: 440,
    width: 337,
    navigation: {
      active: true
    },
    pagination: {
      active: true
    },
    play: {
      active: true,
      effect: "fade",
      interval: 6000,
      auto: true,
      swap: true,
      pauseOnHover: false
    },
    fade: {
      speed: 3000,
      crossfade: true
    }
  });
});
$(document).ready(function() {
  $("a.gallery").colorbox();
});
