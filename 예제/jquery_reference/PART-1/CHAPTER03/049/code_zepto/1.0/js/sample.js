$(function(){
  // 버튼에 이벤트를 할당한다
  $(":button").click(function(){
    // 버튼 ID를 읽는다
    var id = this.id;
    // 버튼 ID를 경고 메시지 창에 표시한다
    alert("클릭한 버튼 ID："+id);
  });
});