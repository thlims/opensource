$(function(){
  // img 요소에 click 이벤트를 할당한다
  $("img").click(function(){
    alert("클릭하였습니다");
  });
  // 첫 번째 버튼에 이벤트를 할당한다
  $(":button:eq(0)").click(function(){
    // 첫 번째 img 요소를 복사한다
    var cloneElement = $("#imageList img:first").clone();
    $(cloneElement).appendTo("#imageList");
  });
  // 두 번째 버튼에 이벤트를 할당한다
  $(":button:eq(1)").click(function(){
    // 첫 번째 img 요소를 이벤트도 포함해서 복사한다
    var cloneElement = $("#imageList img:first").clone(true);
    $(cloneElement).appendTo("#imageList");
  });
});