$(function(){
  // 버튼에 click 이벤트 할당
  $(":button:eq(0)").click(function(){
    // ID 이름 imageList의 세 번째보다 이전 이미지 전부를 불투명으로 표시한다
    $("#imageList img:eq(2)").prevAll().css("opacity", 0.3);
  });
});