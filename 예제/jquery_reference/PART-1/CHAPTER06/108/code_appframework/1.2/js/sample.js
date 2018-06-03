$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $("#readField").click(function(){
    // input 요소를 읽는다
    var text = $("#userID").val();
    // output 요소에 출력한다
    $("#result").val(text);
  });
  // 두 번째 버튼에 클릭 이벤트 할당
  $("#writeField").click(function(){
    // input 요소에 텍스트로 출력
    $("#userID").val(Math.random());
  });
});