$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $("#btn1").click(function(){
    // h1 요소 가로 폭과 세로 폭 읽기
    var coords = $("h1").offset();
    var x = coords.left;
    var y = coords.top;
    alert("X："+x+"、Y："+y);
  });
  // 두 번째 버튼에 이벤트 할당
  $("#btn2").click(function(){
    // h1 요소 가로 폭과 세로 폭 설정
    $("h1").offset({ left: 20, top: 40 });
  });
});