$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $(":button:eq(0)").click(function(){
    // h1 요소의 안쪽 너비와 높이 읽기
    var w = $("h1").innerWidth();
    var h = $("h1").innerHeight();
    alert("안쪽 가로폭："+w+"、세로폭："+h);
  });
  // 두 번째 버튼에 이벤트 할당
  $(":button:eq(1)").click(function(){
    // h1 요소의 안쪽 너비와 높이 읽기
    var w = $("h1").outerWidth();
    var h = $("h1").outerHeight();
    alert("바깥쪽 가로폭："+w+"、세로폭："+h);
  });
  // 세 번째 버튼에 이벤트 할당
  $(":button:eq(2)").click(function(){
    // h1 요소의 안쪽 너비와 높이 읽기
    var w = $("h1").outerWidth(true);
    var h = $("h1").outerHeight(true);
    alert("테두리를 포함한 바깥쪽 가로폭："+w+"、세로폭："+h);
  });
});