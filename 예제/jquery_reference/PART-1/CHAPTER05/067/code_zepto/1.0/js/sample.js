$(function(){
  // 이미지에 click 이벤트를 할당한다
  $("#imageList img").click(function(){
    // 클래스 이름이 end인지 확인한다
    if($(this).is(".end")){
      // 불투명도를 바꾼다
      $(this).css("opacity", 0.3);
    }
  });
});