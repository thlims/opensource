$(function(){
  // 이미지에 click 이벤트를 설정한다
  $("img").bind("click", function(){
    // 이벤트 발생을 나타내는 문자 표시
    $("#result").text("click 이벤트 발생");
  });
  // 이미지에 mouseover 이벤트를 설정한다
  $("img").bind("mouseover", function(){
    // 이벤트 발생을 나타내는 문자 표시
    $("#result").text("mouseover 이벤트 발생");
  });
  // 이미지에 mouseout 이벤트를 설정한다
  $("img").bind("mouseout", function(){
    // 이벤트 발생을 나타내는 문자 표시
    $("#result").text("mouseout 이벤트 발생");
  });
  // click 이벤트 해제 버튼 처리
  $("#one").bind("click", function(){
    // click 이벤트 해제
    $("img").unbind("click");
    // click이벤트 해제를 나타내는 문자 표시
    $("#result").text("click 이벤트를 해제하였습니다");
  });
  // 모든 이벤트 해제 버튼 처리
  $("#all").bind("click", function(){
    // 모든 이벤트 해제
    $("img").unbind();
    // 모든 이벤트 해제를 알리는 문자 표시
    $("#result").text("모든 이벤트를 해제하였습니다");
  });
});