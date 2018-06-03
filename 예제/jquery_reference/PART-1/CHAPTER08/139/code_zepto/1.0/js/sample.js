$(function(){
  // 첫 번째 버튼에 click 이벤트를 할당한다
  $("#btn1").click(function(evt) {
    // 이미지 커스텀 이벤트를 호출한다
    $("img").trigger("changeOpacity.gallery");
  });
  // 두 번째 버튼에 click 이벤트를 할당한다
  $("#btn2").click(function(evt) {
    // 이미지 커스텀 이벤트를 호출한다
    $("img").trigger("changeOpacity.swap");
  });
  // 이미지에 커스텀 이벤트의 이벤트 핸들러를 설정한다
  $("img").on("changeOpacity.gallery", message);
  $("img").on("changeOpacity.swap", message);
  // 커스텀 이벤트 발생시 호출되는 이벤트 핸들러
  function message(evt){
    // 네임 스페이스를 얻는다
    var ns = evt.namespace;
    // 커스텀 이벤트의 네임 스페이스 표시
    $("#result").text(ns);
  }
});