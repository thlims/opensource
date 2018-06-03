$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // ID 이름 noteList 중 li 요소 앞에 img 요소를 삽입한다
    $("#noteList li").prepend('<img src="images/note.png">');
  });
});