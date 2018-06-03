$("#pageLoad").on("click", function(e, d){
  // about.html 파일을 읽어들여서 캐시한다
  $.mobile.loadPage("about.html", {
    showLoadMsg: true
  });
  $("output").text("읽기완료");
});
