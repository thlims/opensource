$(function(){
  // 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // ID 이름 imageList 중 세 번째 이전 이미지를 불투명으로 한다
    $("#imageList img").eq(2).prev().css("opacity", 0.3);
  });
});