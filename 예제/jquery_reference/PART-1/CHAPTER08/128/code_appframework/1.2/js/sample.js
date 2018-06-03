$(function(){
  // 첫 번째 버튼에 이벤트를 할당한다
  $("#btn1").on("click", function(){
    // 이미지를 추가한다
    $("#basePoint").append('<img src="images/photo1.jpg" width="160" height="120" alt="">');
  });
  // 두 번째 버튼에 이벤트를 할당한다
  $("#btn2").on("click", function(){
    // 모든 이미지의 이벤트를 해제한다
    $(document).off("click", "img");
  });
  // document에 있는 모든 이미지에 click 이벤트를 할당한다
  $(document).on("click", "img", function(){
    // 클릭하면 메시지 창을 표시한다
    alert("클릭하였습니다");
  });
});