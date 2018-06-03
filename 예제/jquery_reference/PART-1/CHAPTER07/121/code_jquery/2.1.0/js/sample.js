$(function(){
  // 버튼에 이벤트 할당
  $("#btn").click(function(){
    // h1 요소의 body 요소로부터의 상대 위치
    var coords = $("h1").position();
    var x = coords.left;
    var y = coords.top;
    alert("X："+x+"、Y："+y);
  });
});