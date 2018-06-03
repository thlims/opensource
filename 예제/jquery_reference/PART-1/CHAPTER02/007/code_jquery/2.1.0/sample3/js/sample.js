// jQuery 객체를 jQuery, $ 아니라 jq를 사용하여 액세스
var jq = jQuery.noConflict(true);
// jq 오브젝트를 사용하여 처리
jq(function(){
  // jq 오브젝트를 사용하여 처리
  jq("output").text("처리 완료");
  // prototype.js의 $를 사용하여 처리 
  $("result").style.color = "red";
});