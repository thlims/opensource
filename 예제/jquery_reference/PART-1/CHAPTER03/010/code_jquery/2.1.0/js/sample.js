$(function(){
  // 버튼에 클릭 이벤트를 할당한다てる
  $(":button").click(function(){
    // note 클래스 이름을 가지는 요소의 배경색이 주황색으로 된다
    $(".note").css("background", "orange");
  });
});