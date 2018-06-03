// jQuery 오브젝트에는 $가 되므로 jq를 사용하여 액세스
var jq = jQuery.noConflict();
// jq 오브젝트를 사용하여 처리
jq(function(){
  // jq 오브젝트를 사용하여 처리
  jq("#result").text("처리 완료");
  // jQuery 오브젝트를 사용하여 처리
  jQuery("#result").css("border", "2px solid red");
});