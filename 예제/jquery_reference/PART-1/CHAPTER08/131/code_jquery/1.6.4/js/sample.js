$(function(){
  // 버튼에 click 이벤트를 할당한다
  $("#testBtn").click(function(evt){
    return "xyz";
  });
  // 버튼에 다시 click 이벤트를 할당한다
  $("#testBtn").click(function(evt){
    // 이벤트 오브젝트 반환 값과 연결
    return "abc"+evt.result;
  });
  // 버튼에 click 이벤트를 할당한다
  $("#testBtn").click(function(evt){
    // 이벤트 오브젝트 사이에 전달된 데이터 표시
    alert(evt.result);
  });
});