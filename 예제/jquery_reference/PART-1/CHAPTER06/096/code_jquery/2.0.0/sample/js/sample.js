$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $(":button:eq(0)").click(function(){
    // note 클래스 요소를 대체한다
    $("#damList .note").replaceWith('<li><img src="images/note.png">촬영 완료</li>');
  });
});