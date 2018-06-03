$(function(){
  // 첫 번째 버튼에 Click 이벤트 할당
  $("#btn").click(function(){
    // note 클래스 앞에 img 요소를 삽입한다
    $('<img src="images/note.png">').prependTo(".note");
  });
});