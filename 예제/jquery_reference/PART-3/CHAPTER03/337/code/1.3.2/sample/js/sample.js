$("#info").on("click", function(e,d){
  // 동일 페이지 내의 info에 이동한다
  $.mobile.changePage("#info");
});
$("#about").on("click", function(e,d){
  // about.html 페이지에 이동한다
  $.mobile.changePage("about.html");
});
