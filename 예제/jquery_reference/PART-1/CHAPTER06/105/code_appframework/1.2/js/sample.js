$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // ID 이름 imageList 중 div 요소안에 div 요소를 넣는다
    $("#imageList div").wrapInner('<div class="note">');
  });
});