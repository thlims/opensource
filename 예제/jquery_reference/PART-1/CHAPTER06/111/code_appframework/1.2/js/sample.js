$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // ID 이름 imageList 중 이미지 전부를 div 요소, mark 클래스로 묶는다
    $("#imageList img").wrapAll('<div class="mark">');
  });
});