$(function(){  // 버튼에 click 이벤트를 할당
  $(":button").click(function(){
    // note의 ID 이름을 가진 요소의 배경색이 주황색이 된다
    $("#note").css("background", "orange");
  });
});