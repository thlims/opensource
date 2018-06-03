$(function(){
  // 텍스트 필드에 change 이벤트를 할당한다

  $("input").change(function(event){
    // 변경된 요소의 배경색을 주황색으로 한다
    $(this).css("background-color", "orange");
  });
});