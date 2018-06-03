$(function(){
  // 버튼에 click 이벤트를 할당한다
  $(":button:eq(0)").click(function(){
    // ID 이름 imageList 중 div 요소 이미지를 반투명으로 표시한다
    $("#imageList div").has("img").css("opacity", 0.3);
  });
});