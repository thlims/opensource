$(function(){
  // 버튼에 click 이벤트 할당て
  $(":button:eq(0)").click(function(){
    // 첫 번째 이미지 자식 요소를 모두 찾아 불투명도를 바꾼다
    $("#imageList").children("img").css("opacity", 0.3);
  });
});