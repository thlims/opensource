$(function(){
  // 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // ID 이름 imageList 중 세 번째 다음 이미지를 불투명으로 표시한다
    $("#basePoint").next().css("opacity", 0.3);
  });
});