$(function(){
  // 초깃값을 설정한다
  var percent = 0;
  // 프로그래스 바를 설정한다
  $("#waterStatus").progressbar({
    // 초깃값을 설정한다
    value : 25
  });
  // 읽기 버튼이 클릭되었을 때 처리
  $("#getValue").click(function(){
    // 프로그래스 바 읽기
    var n = $("#waterStatus").progressbar("value");
    alert(n);
  });
  // 설정 버튼이 클릭되었을 때 처리
  $("#setValue").click(function(){
    // 프로그래스 바에 값을 설정한다
    $("#waterStatus").progressbar("value", 50);
  });
});