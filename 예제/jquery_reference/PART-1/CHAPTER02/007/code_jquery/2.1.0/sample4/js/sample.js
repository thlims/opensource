// $를 alert으로 할당
var $ = alert;
// jQuery 오브젝트를 $로 전달
(function($) {
  $(function() {
  // jq 오브젝트를 사용하여 처리
  $("output").text("처리 완료");
  // prototype.js의 $를 사용하여 처리
  $("#result").css("color", "red");
  });
})(jQuery.noConflict(true));
// 경고 대화상자 표시
$("충돌 회피");
