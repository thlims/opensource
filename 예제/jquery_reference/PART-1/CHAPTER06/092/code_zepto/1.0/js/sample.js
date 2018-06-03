$(function(){
  // 요소를 저장하는 변수 클리어
  var saveEle = null;
  // 첫 번째 버튼에 이벤트를 할당한다
  $("#btn1").click(function(){
    // img 요소를 분리한다
    saveEle = $("img").detach();
  });
  // 두 번째 버튼에 이벤트를 할당한다
  $("#btn2").click(function(){
    // img 요소를 연결한다
    $(saveEle).appendTo(".parts");
  });
});