var val;  // jq.mobi1.2特有(?)
$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $("#getWidth").on("click", function(){
    // h1 요소의 너비와 높이 읽기
    var w = $("h1").width();
    var h = $("h1").height();
    alert("너비："+w+", 높이："+h);
  });
  // 두 번째 버튼에 이벤트 할당
  $("#setWidth").on("click", function(){
    // h1 요소의 너비와 높이 설정
    $("h1").width("320px");
    $("h1").height("140px");
  });
});