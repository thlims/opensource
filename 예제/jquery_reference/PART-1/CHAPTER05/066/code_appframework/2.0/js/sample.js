$(function(){
  // 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // ID 이름 imageList의 img 요소 중 높이가 71 픽셀인 이미지 투명도를 바꾼다
    $("*").filter("img").each(function(index){
      if($(this).height() == 71) {
        $(this).css("opacity", 0.3);
      }
    });
  });
});