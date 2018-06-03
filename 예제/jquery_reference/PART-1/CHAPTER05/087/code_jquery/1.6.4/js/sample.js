$(function(){
  // 버튼에 click 이벤트 할당
  $(":button:eq(0)").click(function(){
    // ID 이름 imageList 중 세 번째 〜 다섯 번째 요소의 불투명도를 바꾼다
    $("#imageList img").slice(2, 5).css("opacity", 0.3);
  });
});