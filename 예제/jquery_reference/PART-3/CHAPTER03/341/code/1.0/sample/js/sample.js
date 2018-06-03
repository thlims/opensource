$("#to400").live("click", function(e,d){
  // 위에서 400px로 이동
  $.mobile.silentScroll(400);
});
$("#toTop").live("click", function(e,d){
  // 맨 앞으로 이동
  $.mobile.silentScroll();
});
