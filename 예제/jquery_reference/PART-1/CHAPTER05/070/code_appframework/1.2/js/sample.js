$(function(){
  // 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // ID 이름 imageList 중 세 번째 이후의 모든 이미지를 반투명으로 한다
    $("#no3").nextAll().andSelf().css("opacity", 0.3);
  });
});