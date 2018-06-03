$(function(){
  // 결과를 넣을 변수 준비
  var resultStr = "";
  // Safari/Chrome(WebKit)인지 확인한다
  resultStr = "<div>WebKit："+$.browser.webkit+"</div>";
  // Firefox(Mozilla)인지 확인한다
  resultStr += "<div>Firefox："+$.browser.mozilla+"</div>";
  // IE인지 확인한다
  resultStr += "<div>Internet Explorer："+$.browser.msie+"</div>";
  // Opera인지 확인한다
  resultStr += "<div>Opera："+$.browser.opera+"</div>";
  // 결과 출력
  $("output:first").html(resultStr);
});