$("#main").on("pageshow", function(e, d){
  // 현재 페이지의 URL을 읽는다
  var url = $.mobile.activePage.context.documentURI;
  // 현재 페이지의 ID를 읽는다
  var id = e.target.id;
  // 페이지에 출력
  $("output").html(id+"<br>"+url);
});
$("#info").on("pageshow", function(e, d){
  // 현재 페이지의 URL을 읽는다
  var url = $.mobile.activePage.context.documentURI;
  // 현재 페이지의 ID를 읽는다
  var id = e.target.id;
  // 페이지에 출력
  $("output").html(id+"<br>"+url);
});
